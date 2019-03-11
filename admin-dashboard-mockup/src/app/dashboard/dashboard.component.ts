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
    this.applicationService.queryApplications().subscribe( 
      applications => {
        this.applications = applications;
        this.applicationService.setApplications(applications);
      });

  }

  constructor(private applicationService: ApplicationService) { }

}
