import { Component } from "@angular/core";

import { User } from "./shared/user/user";
import { UserService } from "./shared/user/user.service";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "./pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {

  user: User;
  isLoggingIn = true;

  constructor(private userService: UserService) {
    this.user = new User();
    this.user.email = "my.test.account@nativescript.org";
    this.user.password = "password";
  }

  submit() {
    if (this.isLoggingIn) {
      this._login();
    } else {
      this._register();
    }
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }

  private _login() {
    //TODO
  }

  private _register() {
    this.userService.register(this.user)
      .subscribe(
      () => {
        alert("Your account was successfully created.");
        this.toggleDisplay();
      },
      () => alert("Unfortunately we were unable to create your account.")
      );
  }
}