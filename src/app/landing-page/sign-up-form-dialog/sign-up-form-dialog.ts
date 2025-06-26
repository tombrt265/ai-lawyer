import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import {
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from "@angular/material/dialog";
import { AuthService } from "../../auth-service";
import { LoginFormDialog } from "../login-form-dialog/login-form-dialog";

export interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: "app-sign-up-form-dialog",
  imports: [ReactiveFormsModule, MatDialogContent, MatDialogActions],
  templateUrl: "./sign-up-form-dialog.html",
  styleUrl: "./sign-up-form-dialog.scss",
})
export class SignUpFormDialog {
  authService = inject(AuthService);
  readonly signUpDialogRef = inject(MatDialogRef);
  readonly loginDialog = inject(MatDialog);

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
