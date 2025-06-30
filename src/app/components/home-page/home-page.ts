import { Component, inject } from "@angular/core";
import { AuthService } from "../../services/auth-service";
import { FileUpload } from "../file-upload/file-upload";

@Component({
  selector: "app-home-page",
  imports: [FileUpload],
  templateUrl: "./home-page.html",
  styleUrls: ["../../../styles.css", "../../app.css", "./home-page.scss"],
})
export class HomePage {
  private readonly auth = inject(AuthService);

  logOut() {
    this.auth.logOutUser();
  }
}
