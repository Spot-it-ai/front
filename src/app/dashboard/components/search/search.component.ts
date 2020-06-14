import { Component } from '@angular/core';
import { SearchResultsService } from '../../services/search-results.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {

  public query: string;
  private results: SearchResultsService;

  constructor(results: SearchResultsService) {
    this.results = results;
    this.query = this.results.getQuery();
  }

  public onSubmit(): void {
    console.log(this.query);
    if (this.query.trim()) {
      this.results.getResults(this.query.trim());
    }
  }
}
