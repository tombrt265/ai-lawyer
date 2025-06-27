import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly apiUrlUsers = "http://localhost:3000/users";
  private readonly http = inject(HttpClient);

  async loginUser(email: string, password: string) {
    const res = await fetch(`${this.apiUrlUsers}`);
    const users = await res.json();
    for (const user of users) {
      if (email == user.email && password == user.password) {
        console.log("Login Successful");
        return;
      }
    }
    console.log("Login Failed");
  }

  async signUpUser(
    surname: string,
    name: string,
    email: string,
    password: string
  ) {
    const userProfile = {
      surname,
      name,
      email,
      password,
    };
    const res = await fetch(`${this.apiUrlUsers}`);
    const users = await res.json();
    for (const user of users) {
      if (email == user.email) {
        console.log("User already exists");
        return;
      }
    }
    return this.http.post(this.apiUrlUsers, userProfile).subscribe((userProfile) => {
      console.log("Updated users: ", userProfile);
    });
  }
}
