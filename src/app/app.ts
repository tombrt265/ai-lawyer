import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Footer } from "./footer/footer";

@Component({
  selector: "app-root",
  imports: [RouterModule, Footer],
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
})
export class App {
  title = "default";
}
