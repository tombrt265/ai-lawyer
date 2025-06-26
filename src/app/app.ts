import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LandingPage } from "./landing-page/landing-page";

@Component({
  selector: "app-root",
  imports: [RouterModule, LandingPage],
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
})
export class App {
  title = "default";
}
