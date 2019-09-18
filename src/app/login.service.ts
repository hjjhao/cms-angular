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
  constructor(private http: HttpClient, private router: Router) {}

  public login(user) {
    return this.http.post(this.baseUrl, user).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/home'])
      },
      error => console.log(error)
    );
  }
  logout() {}
}
