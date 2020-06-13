import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule { }
