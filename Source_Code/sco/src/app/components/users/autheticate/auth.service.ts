import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/user';
import { Toastr } from '../toastr';
import { Router } from '@angular/router';


import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authToken;
  private user;

  private subject = new Subject<boolean>();
  private subjectControl = false;

  getSubject() {
  return this.subject.asObservable();
  }

  getSubjectControl() {
  return this.subjectControl;
  }

  getToken() {
  return this.authToken;
  }

  getUser() {
  return this.user;
  }

  constructor(private http: HttpClient, private toastr: Toastr, private router: Router) { }

  register(user) {
    this.http.post<{success: boolean, message: string}>('users/register', user).subscribe(
      (res) => {
        if (res.success) {
          this.toastr.success(res.message);
          this.router.navigate(['/user/login']);
        } else {
          this.toastr.warning(res.message);
        }
      },
      (err) => {
        console.log('The error is ', err);
      });
  }

  login(user) {
    // tslint:disable-next-line: max-line-length
   return this.http.post<{success: boolean, expiresIn: number, message: string, token: string, user: object}>('users/authenticate', user)
   .subscribe(
      (res) => {
        const token = res.token;

        const expiryTime = res.expiresIn;
        const now = new Date();
        const expiryDate = new Date(now.getTime() + (expiryTime * 1000));
        if (token) {
          this.setAuthData(token, expiryDate, res.user);
          this.reset(expiryTime * 1000);
          this.subjectControl = true;
          this.subject.next(true);
          this.user = res.user;
          // tslint:disable-next-line: max-line-lengt
          this.router.navigate(['/user/dashboard']);
          } else {
            this.toastr.warning(res.message);
            this.router.navigate(['/user/login']);
          }
      },
      (err) => {
        console.log('The error is ', err);
      });
  }

  getDashboard() {
    const tokenInfo = this.getAuthData();
    this.authToken = tokenInfo.token;
    // tslint:disable-next-line: prefer-const
    let headers = new HttpHeaders(
      {Authorization: this.authToken,
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    }
    );
    // tslint:disable-next-line: object-literal-shorthand
    // tslint:disable-next-line: max-line-length
    return this.http.get<{id, firstname, lastname, username, email}>('users/profile', {headers});
  }

  logout() {
    this.authToken = null;
    this.user = null;
    this.subjectControl = false;
    this.subject.next(false);
    this.clearAuthData();
  }

  autoAutheticate() {
    const tokenInfo = this.getAuthData();
    if (!tokenInfo) {
      return;
    }
    const now = new Date();
    const expiresIn =  tokenInfo.expiryDate.getTime() - now.getTime();

    if (expiresIn > 0) {
      this.authToken = tokenInfo.token;
      this.reset(expiresIn);
      this.subjectControl = true;
      this.subject.next(true);
    }
  }

  reset(data: number) {
    setTimeout(() => {
      this.logout();
    }, data);
  }

  // set data
  private setAuthData(token: string, expiryDate, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('expiry', expiryDate);
    localStorage.setItem('user', JSON.stringify(user));
  }

  // clear data
  private clearAuthData() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
    localStorage.removeItem('expiry');
  }

  // get items  C:\Users\PROBOOK 440\AppData\Local\.meteor
  private getAuthData() {
    const tokenData = localStorage.getItem('id_token');
    const expiryData = localStorage.getItem('expiry');
    const user = localStorage.getItem('user');

    if (! tokenData || ! expiryData) {
      return;
    }

    return {
      token: tokenData,
      expiryDate: new Date(expiryData),
      user
    };
  }
}

