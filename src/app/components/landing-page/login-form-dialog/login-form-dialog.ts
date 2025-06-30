import { Component, inject, model, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { AuthService } from "../../../services/auth-service";
import { SignUpFormDialog } from "../sign-up-form-dialog/sign-up-form-dialog";
import { LoginData } from "../../../models/LoginData";

@Component({
  selector: "app-login-form-dialog",
  imports: [FormsModule],
  templateUrl: "./login-form-dialog.html",
  styleUrls: [
    "../../../../styles.css",
    "../../../app.css",
    "./login-form-dialog.scss",
  ],
})
export class LoginFormDialog {
  private readonly authService = inject(AuthService);
  private readonly loginDialogRef = inject(MatDialogRef);
  private readonly signUpDialog = inject(MatDialog);

  loginData = signal<LoginData>({ email: "", password: "" });

  updateEmail(newEmail: string) {
    this.loginData.update((data) => ({ ...data, email: newEmail }));
  }

  updatePassword(newPassword: string) {
    this.loginData.update((data) => ({ ...data, password: newPassword }));
  }

  // authService.loginUser() returns boolean, myb. work with loggedIn = signal(false)
  loginUser() {
    this.authService.loginUser(this.loginData()).then((loggedIn) => {
      if (loggedIn) {
        this.closeDialog();
      }
    });
  }

  closeDialog() {
    this.loginDialogRef.close();
  }

  openSignUpDialog() {
    this.signUpDialog.open(SignUpFormDialog);
  }
}
