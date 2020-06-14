import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchResultsService {
  public resultSub = new Subject<any>();
  public results$: Observable<any>;
  private readonly RESULTS_ENDPOINT: string = '/api/search/?query=';
  private router: Router;
  private http: HttpClient;
  private query = '';

  constructor(router: Router, http: HttpClient) {
    this.router = router;
    this.http = http;
    this.results$ = this.resultSub.asObservable();
  }

  public getResults(query: string): void {
    this.router.navigate(['/dash/results']);
    this.query = query;
    this.http.get(environment.hostUrl + this.RESULTS_ENDPOINT + query)
    .subscribe((res: any) => {
      if (res?.meta?.code === 200) {
        console.log(res);
        this.resultSub.next(res);
      } else {
          // notify the user
      }
    });
  }

  public getQuery(): string {
    return this.query;
  }
}
