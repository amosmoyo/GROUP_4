import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../autheticate/auth.service';
import { Toastr } from '../toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    mouseOver;

    constructor(private router: Router, private auth: AuthService, private toastr: Toastr) {}

    ngOnInit() {}

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    save(form: NgForm) {
      if (form.invalid) {
        return;
      }

      const user = {
        email: form.value.email,
        password: form.value.password
      };

      this.auth.login(user);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    cancel() {
      this.router.navigate(['/']);
  }

}
