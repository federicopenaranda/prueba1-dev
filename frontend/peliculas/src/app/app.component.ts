import { Component } from '@angular/core';
import { LoginService } from './features/admin/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.loginService.isAccessTokenValid()
    .subscribe(
      (response) => {
        if (!response) {
          this.loginService.logOut();
        }
      }
    );
    }
  
}
