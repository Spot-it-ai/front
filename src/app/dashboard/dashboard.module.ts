import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [SearchComponent, DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,

    // material ui
    MatInputModule,
    MatButtonModule,
  ],
})
export class DashboardModule { }
