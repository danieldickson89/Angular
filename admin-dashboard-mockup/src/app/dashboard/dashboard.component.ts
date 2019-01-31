import { Component, OnInit } from '@angular/core';
import { Application } from '../interfaces/application.interface';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  applications: Application[];

  ngOnInit() {
    this.fetchApplications();
  }

  constructor(private applicationService: ApplicationService) { }

  fetchApplications(): void {
    this.applicationService.getApplications().subscribe(
      response => { 
        this.applications = response;
        this.applicationService.applications = response;
      },
      error => {
        console.error('Failed to get applications', error);
      }
    );
  }
}
