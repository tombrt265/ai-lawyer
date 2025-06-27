import { Component, inject, model, OnDestroy, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { AuthService } from "../../auth-service";
import { SignUpFormDialog } from "../sign-up-form-dialog/sign-up-form-dialog";

export interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: "app-login-form-dialog",
  imports: [FormsModule],
  templateUrl: "./login-form-dialog.html",
  styleUrl: "./login-form-dialog.scss",
})
export class LoginFormDialog implements OnDestroy {
  private readonly authService = inject(AuthService);
  private readonly loginDialogRef = inject(MatDialogRef);
  private readonly signUpDialog = inject(MatDialog);

  email = signal<string>("werwe");
  password = model<string>("wer");

  ngOnDestroy(): void {
    console.log("Destroy");
  }

  // authService.loginUser() returns boolean, myb. work with loggedIn = signal(false)
  loginUser() {
    this.authService.loginUser(this.email(), this.password());
  }

  closeDialog() {
    console.log("close");
    this.loginDialogRef.close();
  }

  openSignUpDialog() {
    console.log("open sign up");
    this.signUpDialog.open(SignUpFormDialog);
  }

  setLogin(emailValue: string) {
    this.email.set(emailValue);
  }
}
