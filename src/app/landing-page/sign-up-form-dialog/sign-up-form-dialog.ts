import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { AuthService } from "../../auth-service";
import { LoginFormDialog } from "../login-form-dialog/login-form-dialog";

export interface SignUpData {
  surname: string;
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: "app-sign-up-form-dialog",
  imports: [ReactiveFormsModule],
  templateUrl: "./sign-up-form-dialog.html",
  styleUrls: [
    "../../../styles.css",
    "../../app.css",
    "./sign-up-form-dialog.scss",
  ],
})
export class SignUpFormDialog {
  // authService is injected in SignUpDialog and LoginDialog (should be top-level-variable??)
  private readonly authService = inject(AuthService);
  private readonly signUpDialogRef = inject(MatDialogRef);
  private readonly loginDialog = inject(MatDialog);

  SignUpForm = new FormGroup({
    surname: new FormControl(""),
    name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
  });

  signUpUser() {
    const formValues = this.SignUpForm.value;
    this.authService.signUpUser(
      formValues.surname ?? "",
      formValues.name ?? "",
      formValues.email ?? "",
      formValues.password ?? ""
    );
  }

  closeDialog() {
    this.signUpDialogRef.close();
  }

  openLoginDialog() {
    this.loginDialog.open(LoginFormDialog);
  }
}
