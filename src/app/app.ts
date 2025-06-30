import { Component, inject, signal } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Footer } from "./components/footer/footer";
import { LandingPage } from "./components/landing-page/landing-page";
import { AuthService } from "./services/auth-service";

@Component({
  selector: "app-root",
  imports: [RouterModule, Footer, LandingPage],
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
})
export class App {
  readonly auth = inject(AuthService);
}
