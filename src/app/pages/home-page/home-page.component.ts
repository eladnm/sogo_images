import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title: string;
  description: string;
  date: Date;

  constructor(private router: Router) {}

  ngOnInit() {}

  gotoUpload() {
    this.router.navigate(['preview'], {
      queryParams: {
        title: this.title,
        description: this.description,
        date: this.date.toString()
      }
    });
  }
}
