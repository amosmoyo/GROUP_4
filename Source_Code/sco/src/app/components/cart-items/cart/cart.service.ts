import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Toastr } from '../../users/toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartServiceT {
  authToken;
  constructor(
    private http: HttpClient,
    private toastr: Toastr,
    private router: Router
  ) { }

buyItem(obj) {
    this.authToken = localStorage.getItem('id_token');
    // tslint:disable-next-line: prefer-const
    let headers = new HttpHeaders(
      {Authorization: this.authToken,
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    }
    );
    this.http.post('users/payme', obj, {headers}).subscribe(
      (res) => {
        // tslint:disable-next-line: max-line-length
        this.toastr.success(`_______________________________________________________________________________________________________________ PAYMENT DONE .................................................................................................................`);

        this.router.navigate(['/user/dashboard']);
      },
      (err) => {
        console.log('The error is ', err);
    });
  }

  paymentInfo() {
    this.authToken = localStorage.getItem('id_token');
    // tslint:disable-next-line: prefer-const
    let headers = new HttpHeaders(
      {Authorization: this.authToken,
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    }
    );
    return this.http.get<{docs}>('users/getdata', {headers})
    .pipe(map(res => {
      return {data: res.docs.map(x => {
          return {
            id: x.id,
            creatorId: x.creatorId,
            // tslint:disable-next-line: radix
            amount: parseInt(x.amount) * 100,
            date: x.date
          };
      })};
    }));
  }

}
