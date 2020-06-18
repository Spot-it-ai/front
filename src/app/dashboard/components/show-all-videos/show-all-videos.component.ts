import { Component, OnInit } from '@angular/core';
import { SearchResultsService } from '../../services/search-results.service';

@Component({
  selector: 'app-show-all-videos',
  templateUrl: './show-all-videos.component.html',
  styleUrls: ['./show-all-videos.component.scss'],
})
export class ShowAllVideosComponent implements OnInit {

  public videos = [];
  public noVideos = true;
  private search: SearchResultsService;

  constructor(search: SearchResultsService) {
    this.search = search;
  }

  public ngOnInit(): void {
    this.search.getAllVideos()
    .subscribe((res: any) => {
      if (res?.meta?.code === 200 && res?.data?.allVideos.length > 0) {
        this.noVideos = false;
        this.videos = res?.data?.allVideos;
      } else {
        this.noVideos = true;
      }
    });
  }

  public getAllVideos(): void {
    this.ngOnInit();
  }

  public deleteVideo(id: string): void {
    if (id.trim()) {
      if (confirm('Are you sure you want to delete the video?')) {
        this.search.deleteVideo(id)
        .subscribe((res: any) => {
          if (res?.meta?.code === 200) {
            this.ngOnInit();
          }
        });
      }
    }
  }
}
