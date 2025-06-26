import { Component, inject, signal } from "@angular/core";
import { LoginFormDialog } from "../login-form-dialog/login-form-dialog";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-landing-page",
  imports: [],
  templateUrl: "./landing-page.html",
  styleUrl: "./landing-page.scss",
})
export class LandingPage {
  readonly loginDialog = inject(MatDialog);

  openLoginDialog() {
    this.loginDialog.open(LoginFormDialog);
  }
}
