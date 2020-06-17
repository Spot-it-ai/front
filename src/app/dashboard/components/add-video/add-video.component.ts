import { Component } from '@angular/core';
import { SearchResultsService } from '../../services/search-results.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss'],
})
export class AddVideoComponent {

  public title = '';
  public url = '';
  public success = false;
  public failed = false;
  public isDisabled = false;
  public msg = '';
  private searchResultws: SearchResultsService;

  constructor(searchResultws: SearchResultsService) {
    this.searchResultws = searchResultws;
  }

  public onSubmit(): void {
    if (this.title.trim() && this.url.trim()) {
      this.isDisabled = true;
      this.searchResultws.addNewVideo(this.url.trim(), this.title.trim())
      .subscribe((data: any) => {
        this.isDisabled = false;
        if (data?.meta?.code === 200) {
          this.success = true;
          this.failed = false;
          this.msg = 'Video successfully added';
          setTimeout(() => {
            this.success = false;
          }, 5000);
        } else {
          this.failed = true;
          this.success = false;
          this.msg = 'Oops! something went wrong!';
        }
      });
    } else {
      this.failed = true;
      this.success = false;
      this.msg = 'Oops! You missed title or url!';
    }
  }

}
