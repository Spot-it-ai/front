import { Component } from '@angular/core';
import { SearchResultsService } from '../../services/search-results.service';

@Component({
  selector: 'app-youtube-results',
  templateUrl: './youtube-results.component.html',
  styleUrls: ['./youtube-results.component.scss'],
})
export class YoutubeResultsComponent {

  public videos = [];
  public placeholderCount = new Array(5);
  public resultsReady = false;
  private results: SearchResultsService;

  constructor(results: SearchResultsService) {
    this.results = results;
    this.subscribeToResults();
  }

  private subscribeToResults(): void {
    this.results.resultSub.subscribe((res: any) => {
      if (res?.data?.youtubeResults) {
        this.videos = res?.data?.youtubeResults;
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
