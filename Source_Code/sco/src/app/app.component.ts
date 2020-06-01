import { Component, OnInit } from '@angular/core';
import { AuthService } from './components/users/autheticate/auth.service';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppComponent  implements OnInit {
  title = 'sco';
  isRoot: boolean;

  previousRoute: string;

  constructor(
    private auth: AuthService,
    // private serverhistrory: ServerHistoryService,
    private location: Location,
    private router: Router
  ) {
    // serverhistrory.loadRouting();
  }

  goBack() {
    this.location.back();
  }

  goForward() {
    this.location.forward();
  }

  getPath() {
    console.log(this.location.path());
  }

  ngOnInit() {
    this.auth.autoAutheticate();
    // this.previousRoute = this.serverhistrory.getPreviousUrl();

    this.router.events.subscribe(event => {
      if (this.location.path() !== '') {
        this.isRoot = false;
      } else {
        this.isRoot = true;
      }
    });
  }
}
