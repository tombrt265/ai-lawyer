import { Component, inject, signal } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Footer } from "./footer/footer";
import { LandingPage } from "./landing-page/landing-page";
import { AuthService } from "./auth-service";

@Component({
  selector: "app-root",
  imports: [RouterModule, Footer, LandingPage],
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
})
export class App {
  readonly auth = inject(AuthService);
  
}
