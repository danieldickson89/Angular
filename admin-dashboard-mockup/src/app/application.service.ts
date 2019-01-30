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

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private applicationsUrl = 'api/applications'; // URL to web api

  /** Log a ApplicationService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ApplicationService: ${message}`);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Get applications from the server */
  getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.applicationsUrl);
  }
}
