import { Component } from '@angular/core';
import { SearchResultsService } from '../../services/search-results.service';

@Component({
  selector: 'app-internet-results',
  templateUrl: './internet-results.component.html',
  styleUrls: ['./internet-results.component.scss'],
})
export class InternetResultsComponent {

  public webResults = [];
  public placeholderCount = new Array(5);
  public resultsReady = false;
  private results: SearchResultsService;

  constructor(results: SearchResultsService) {
    this.results = results;
    this.subscribeToResults();
  }

  private subscribeToResults(): void {
    this.results.resultSub.subscribe((res: any) => {
      if (res?.data?.webResults) {
        this.webResults = res?.data?.webResults;
        this.resultsReady = true;
      }
    });

    this.results.apiCallInitiated$.subscribe((res: boolean) => {
      if (res) {
        this.resultsReady = false;
      }
    });
  }
}
