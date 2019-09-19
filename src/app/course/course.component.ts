import { Component, OnInit } from "@angular/core";
import { CourseService } from "../course.service";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.scss"]
})
export class CourseComponent implements OnInit {
  courses;
  displayedColumns: string[] = ["id", "courseName", "description", "startAt"];
  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService
      .getCourses()
      .subscribe(data => (this.courses = data), error => console.log(error));
  }
}
