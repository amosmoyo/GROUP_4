import { Component, OnInit } from '@angular/core';
import { AuthService } from '../autheticate/auth.service';
import { Router } from '@angular/router';
import { Toastr } from '../toastr';
import { DashboardUser } from './dashboard';
import { CartServiceT } from '../../cart-items/cart/cart.service';
import { Ipayment } from 'src/app/user';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  user: DashboardUser;
  panelOpenState = false;
  payDetail: Ipayment;
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: Toastr,
    private payment: CartServiceT
  ) { }

  ngOnInit() {
    this.auth.getDashboard()
    .subscribe(
      (res) => {
        if (res) {
          const data = {
            id: res.id,
            firstname: res.firstname,
            lastname: res.lastname,
            username: res.username,
            email: res.email
          };
          this.user = data;

            // tslint:disable-next-line: max-line-length
          this.toastr.success(`_______________________________________________________________________________________________________________Welcome to Your Dashboard ${data.username} .................................................................................................................`);
          } else {
            this.toastr.warning('Errr');
          }
      },
      (err) => {
        console.log('The error is amos', err);
      });

    this.payment.paymentInfo().subscribe(
        (res) => {
          // tslint:disable-next-line: no-unused-expression
          this.payDetail = res.data;
        },
        (err) => {
          console.log('The error is ', err);
        });

  }

}
