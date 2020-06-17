import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InternetResultsComponent } from './components/internet-results/internet-results.component';
import { ResultsComponent } from './components/results/results.component';
import { SearchComponent } from './components/search/search.component';
import { VideoResultsComponent } from './components/video-results/video-results.component';
import { YoutubeResultsComponent } from './components/youtube-results/youtube-results.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
  declarations: [
    SearchComponent,
    DashboardComponent,
    ResultsComponent,
    VideoResultsComponent,
    InternetResultsComponent,
    YoutubeResultsComponent,
    SafeUrlPipe,
    AddVideoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    FlexLayoutModule,

    // material ui
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatChipsModule,
    MatTabsModule,
  ],
})
export class DashboardModule { }
