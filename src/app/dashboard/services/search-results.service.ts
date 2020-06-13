import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DashboardModule } from '../dashboard.module';

@Injectable({
  providedIn: DashboardModule,
})
export class SearchResultsService {
  private readonly VIDEO_RESULTS_ENDPOINT: string = '/search/internet-results';
  private readonly INTERNET_RESULTS_ENDPOINT: string = '/search/internet-results';
  private router: Router;
  private http: HttpClient;

  constructor(router: Router, http: HttpClient) {
    this.router = router;
    this.http = http;
  }

  public getResults(): void {
    this.router.navigate(['/dash/results']);
  }

  public getVideoResults(): Observable<any> {
    return this.http.get(environment.hostUrl + this.VIDEO_RESULTS_ENDPOINT);
  }

  public getInternetResults(): Observable<any> {
    return this.http.get(environment.hostUrl + this.INTERNET_RESULTS_ENDPOINT);
  }
}
