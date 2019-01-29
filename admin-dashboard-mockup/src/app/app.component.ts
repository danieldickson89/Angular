import { Component, OnInit } from '@angular/core';
import { Application } from './application';
import { ApplicationService } from './application.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Admin Dashboard Mockup';
  applications: Application[];

  ngOnInit() {
    this.getApplications();
  }

  constructor(private applicationService: ApplicationService) {}

  getApplications(): void {
    this.applicationService.getApplications()
        .subscribe(applications => this.applications = applications);
  }
}
