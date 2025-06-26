import { Component, inject } from "@angular/core";
import { LoginFormDialog } from "./login-form-dialog/login-form-dialog";
import { MatDialog } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-landing-page",
  imports: [RouterModule],
  templateUrl: "./landing-page.html",
  styleUrl: "./landing-page.scss",
})
export class LandingPage {
  readonly loginDialog = inject(MatDialog);

  openLoginDialog() {
    this.loginDialog.open(LoginFormDialog);
  }
}
