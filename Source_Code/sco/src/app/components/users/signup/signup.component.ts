import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { Toastr } from '../toastr';
import { AuthService } from '../autheticate/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    mouseOver;

    constructor(
      private router: Router,
      private toastr: Toastr,
      private auth: AuthService
    ) {}

    ngOnInit() {}

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    save(form) {
      if (form.invalid) {
        return;
      }

      const user: User = {
        firstname: form.value.fname,
        lastname: form.value.sname,
        username: form.value.username,
        email: form.value.email,
        password: form.value.passwordGroup.password
      };
      this.auth.register(user);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    cancel() {
      this.router.navigate(['/']);
    }
}
