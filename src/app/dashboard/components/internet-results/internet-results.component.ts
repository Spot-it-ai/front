import { Component } from '@angular/core';
import { SearchResultsService } from '../../services/search-results.service';

@Component({
  selector: 'app-internet-results',
  templateUrl: './internet-results.component.html',
  styleUrls: ['./internet-results.component.scss'],
})
export class InternetResultsComponent {

  private results: SearchResultsService;

  constructor(results: SearchResultsService) {
    this.results = results;
    this.subscribeToResults();
  }

  private subscribeToResults(): void {
    this.results.resultSub.subscribe((res: any) => {

    });
  }
}
