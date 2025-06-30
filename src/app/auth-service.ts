import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { LoginData } from "./landing-page/login-form-dialog/login-form-dialog";
import { SignUpData } from "./landing-page/sign-up-form-dialog/sign-up-form-dialog";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly apiUrlUsers = "http://localhost:3000/users";
  private readonly http = inject(HttpClient);

  isLoggedIn = signal(false);

  async loginUser(loginData: LoginData): Promise<Boolean> {
    const res = await fetch(`${this.apiUrlUsers}`);
    const users = await res.json();
    for (const user of users) {
      if (
        loginData.email == user.email &&
        loginData.password == user.password
      ) {
        console.log("Login Successful");
        this.isLoggedIn.update(() => true);
        return true;
      }
    }
    console.log("Login Failed");
    return false;
  }

  logOutUser() {
    this.isLoggedIn.update(() => false);
    console.log("User logged out");
  }

  async signUpUser(signupData: SignUpData) {
    const res = await fetch(`${this.apiUrlUsers}`);
    const users = await res.json();
    for (const user of users) {
      if (signupData.email == user.email) {
        console.log("User already exists");
        return;
      }
    }
    return this.http
      .post(this.apiUrlUsers, signupData)
      .subscribe((userProfile) => {
        console.log("Updated users: ", userProfile);
      });
  }
}
