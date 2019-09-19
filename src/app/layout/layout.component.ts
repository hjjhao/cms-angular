import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit() {}


  handleLogout() {
    this.loginService.logout();
  }
}
