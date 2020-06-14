import { Component } from '@angular/core';
import { SearchResultsService } from '../../services/search-results.service';

@Component({
  selector: 'app-youtube-results',
  templateUrl: './youtube-results.component.html',
  styleUrls: ['./youtube-results.component.scss'],
})
export class YoutubeResultsComponent {

  public videos = [];
  private results: SearchResultsService;

  constructor(results: SearchResultsService) {
    this.results = results;
    this.subscribeToResults();
  }

  private subscribeToResults(): void {
    this.results.resultSub.subscribe((res: any) => {
      if (res?.data?.youtubeResults) {
        this.videos = res?.data?.youtubeResults;
      }
    });
  }

}
