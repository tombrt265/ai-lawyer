import { Component, inject, signal } from "@angular/core";
import { FormControl, FormGroup, FormsModule } from "@angular/forms";
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
  imports: [FormsModule],
  templateUrl: "./sign-up-form-dialog.html",
  styleUrls: [
    "../../../styles.css",
    "../../app.css",
    "./sign-up-form-dialog.scss",
  ],
})
export class SignUpFormDialog {
  private readonly auth = inject(AuthService);
  private readonly signUpDialogRef = inject(MatDialogRef);
  private readonly loginDialog = inject(MatDialog);

  signupData = signal<SignUpData>({
    surname: "",
    name: "",
    email: "",
    password: "",
  });

  updateSurname(newSurname: string) {
    this.signupData.update((data) => ({ ...data, surname: newSurname }));
  }

  updateName(newName: string) {
    this.signupData.update((data) => ({ ...data, name: newName }));
  }

  updateEmail(newEmail: string) {
    this.signupData.update((data) => ({ ...data, email: newEmail }));
  }

  updatePassword(newPassword: string) {
    this.signupData.update((data) => ({ ...data, password: newPassword }));
  }

  signUpUser() {
    this.auth.signUpUser(this.signupData()).then((signedUp) => {
      if (signedUp) {
        this.closeDialog();
      }
    });
  }

  closeDialog() {
    this.signUpDialogRef.close();
  }

  openLoginDialog() {
    this.loginDialog.open(LoginFormDialog);
  }
}
