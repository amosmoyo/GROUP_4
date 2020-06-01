import { Component, OnInit, OnDestroy } from '@angular/core';
import { Toastr } from '../users/toastr';
import { AuthService } from '../users/autheticate/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  isUserAuth;
  subject: Subscription;
  deternimer: boolean;

  constructor(private router: Router, private auth: AuthService, private toastr: Toastr) { }

  ngOnInit() {
    this.isUserAuth = this.auth.getSubjectControl();
    this.subject = this.auth.getSubject()
    .subscribe( isAuth => {
      this.isUserAuth = isAuth;
    });

    if (this.isUserAuth) {
      this.deternimer = true;
    } else {
      this.deternimer = false;
    }
  }

  onLogout() {
     this.auth.logout();
     // tslint:disable-next-line: max-line-length
     this.toastr.success(`_______________________________________________________________________________________________________________You have successfully logout .................................................................................................................`);
     this.router.navigate(['/user/login']);

  }

  ngOnDestroy() {
    this.subject.unsubscribe();
  }

}
