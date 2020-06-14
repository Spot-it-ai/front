import { Component } from '@angular/core';
import { SearchResultsService } from '../../services/search-results.service';

@Component({
  selector: 'app-video-results',
  templateUrl: './video-results.component.html',
  styleUrls: ['./video-results.component.scss'],
})
export class VideoResultsComponent {

  public videos = [];
  private results: SearchResultsService;

  constructor(results: SearchResultsService) {
    this.results = results;
    this.subscribeToResults();
  }

  private subscribeToResults(): void {
    this.results.resultSub.subscribe((res: any) => {
      if (res?.data?.lectureVideos) {
        this.videos = res?.data?.lectureVideos;
      }
    });
  }
}
