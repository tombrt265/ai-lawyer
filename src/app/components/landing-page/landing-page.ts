import { Component, inject } from "@angular/core";
import { LoginFormDialog } from "./login-form-dialog/login-form-dialog";
import { MatDialog } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";
import { SignUpFormDialog } from "./sign-up-form-dialog/sign-up-form-dialog";

@Component({
  selector: "app-landing-page",
  imports: [RouterModule],
  templateUrl: "./landing-page.html",
  styleUrls: ["../../app.css", "./landing-page.scss"],
})
export class LandingPage {
  readonly loginDialog = inject(MatDialog);
  readonly signUpDialog = inject(MatDialog);

  openLoginDialog() {
    this.loginDialog.open(LoginFormDialog);
  }

  openSignUpDialog() {
    this.signUpDialog.open(SignUpFormDialog);
  }
}
