import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  public currentUser: any = {};
  public baseUrl: string =
    "http://ec2-13-55-165-246.ap-southeast-2.compute.amazonaws.com/api/users/auth";

  public isLogin = false;

  constructor(private http: HttpClient, private router: Router) {}

  public login(user) {
    return this.http.post(this.baseUrl, user).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["/home"]);
        this.isLogin = true;
      },
      error => console.log(error)
    );
  }

  public logout() {
    this.router.navigate(["/"]);
    this.isLogin = false;
  }

  public getCourses() {
    return this.http
      .get(this.baseUrl)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  public getLoginStatus() {
    return this.isLogin;
  }
}
