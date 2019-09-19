import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public user: any = {};

  constructor(private loginService: LoginService) {}

  ngOnInit() {}


  handleSubmit(): void {
    console.log(this.user);
    this.loginService.login(this.user);
  }
}
