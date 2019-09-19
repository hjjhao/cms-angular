import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  public courses = [];
  public baseUrl: string = "http://5d821b7b1c8ff70014ef440b.mockapi.io/courses";
  constructor(private http: HttpClient) {}
  public getCourses() {
    return this.http
      .get(this.baseUrl)
  }
}
