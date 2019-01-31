import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Application, Category }         from '../interfaces/application.interface';
import { ApplicationService }  from '../application.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  private application: Application;
  private applications: Application[];
  categories: Category[];

  constructor(
    private route: ActivatedRoute,
    private applicationService: ApplicationService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.application = this.filterApplications();
    this.categories = this.application.categories;
    console.log('APPLICATION: ', this.application)
  }

  filterApplications(): Application {
    this.applications = this.applicationService.applications.filter(
      application => {
        return application.code === this.route.snapshot.params.application;
      }
    );
    return this.applications[0];
  }

  goBack(): void {
    this.location.back();
  }
}
