import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import {
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from "@angular/material/dialog";
import { AuthService } from "../auth-service";
import { SignUpFormDialog } from "../sign-up-form-dialog/sign-up-form-dialog";

export interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: "app-login-form-dialog",
  imports: [ReactiveFormsModule, MatDialogContent, MatDialogActions],
  templateUrl: "./login-form-dialog.html",
  styleUrl: "./login-form-dialog.scss",
})
export class LoginFormDialog {
  loginService = inject(AuthService);
  readonly loginDialogRef = inject(MatDialogRef);
  readonly signUpDialog = inject(MatDialog);

  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  });

  loginUser() {
    const formValues = this.loginForm.value;
    this.loginService.loginUser(
      formValues.email ?? "",
      formValues.password ?? ""
    );
  }

  closeDialog() {
    this.loginDialogRef.close();
  }

  openSignUpDialog() {
    this.signUpDialog.open(SignUpFormDialog);
  }
}
