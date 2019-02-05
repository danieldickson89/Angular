import { Injectable } from '@angular/core';
import { Application } from './interfaces/application.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ApplicationService {

  public applications: Application[] = [];

  private applicationsUrl = 'api/applications'; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Get applications from the server */
  getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.applicationsUrl);
  }

  addApplication (application: Application): Observable<Application> {
    return this.http.post<Application>(this.applicationsUrl, application, httpOptions);
  }
}
