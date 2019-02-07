import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { ApplicationService } from '../application.service';
import { Application, Category, Link } from '../interfaces/application.interface';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  private application: Application;
  private category: Category;
  categories: Category[];
  links: Link[];

  constructor(
    private route: ActivatedRoute,
    private applicationService: ApplicationService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.category = this.findCategory();
    this.links = this.category.links;
    console.log('LINKS: ', this.category.links)
  }

  findCategory(): Category {
    this.applicationService.applications.filter(
      application => {
        if (application.code === this.route.snapshot.params.application) {
          this.application = application;
          this.categories = application.categories.filter(
            category => {
              return category.category === this.route.snapshot.params.category
            }
          );
        }
      }
    );
    return this.categories[0];
  }

  goBack(): void {
    this.location.back();
  }

}
