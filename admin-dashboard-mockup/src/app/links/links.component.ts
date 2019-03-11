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

  private categories: Category[];
  private category: Category;
  links: Link[];

  constructor(
    private route: ActivatedRoute,
    private applicationService: ApplicationService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.category = this.findCategory();
    this.links = this.category.links;
  }

  findCategory(): Category {
    this.applicationService.getApplications().filter(
      applications => {
        if (applications.code === this.route.snapshot.params.application) {
          this.categories = applications.categories.filter(
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