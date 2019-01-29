import { Component, OnInit } from '@angular/core';
import { Application } from '../application';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  applications: Application[];

  ngOnInit() {
    this.getApplications();
  }

  constructor(private applicationService: ApplicationService) { }

  getApplications(): void {
    this.applicationService.getApplications()
      .subscribe(applications => this.applications = applications);
  }
}
