import { Injectable } from '@angular/core';
import { Application } from './interfaces/application.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ApplicationService {

  private applications: Application[] = [];

  private applicationsUrl = 'api/applications'; // URL to web api

  constructor(
    private http: HttpClient,
  ) { }

  /** Get applications from the server */

  public queryApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.applicationsUrl);
  }

  public getApplications(): Application[] {
    return this.applications;
  }

  public setApplications(applications: Application[]): void {
    this.applications = applications;
  }

  addApplication (application: Application): Observable<Application> {
    return this.http.post<Application>(this.applicationsUrl, application, httpOptions);
  }
}
