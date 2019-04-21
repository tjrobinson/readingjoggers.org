import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';

import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { KitComponent } from './kit/kit.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { WinterHandicapComponent } from './events/winter-handicap/winter-handicap.component';
import { CommitteeComponent } from './about/committee/committee.component';
import { ContactSubmittedComponent } from './contact-submitted/contact-submitted.component';
import { SocialEventsComponent } from './events/social-events/social-events.component';
import { ClubRunsAndTrainingComponent } from './events/club-runs-and-training/club-runs-and-training.component';
import { SummerHandicapComponent } from './events/summer-handicap/summer-handicap.component';
import { ClubChampionshipComponent } from './events/club-championship/club-championship.component';
import { ImageBannerComponent } from './image-banner/image-banner.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { FindUsComponent } from './find-us/find-us.component';
import { ProspectParkComponent } from './find-us/prospect-park/prospect-park.component';
import { BeansheafComponent } from './find-us/beansheaf/beansheaf.component';
import { OtherLocationsComponent } from './find-us/other-locations/other-locations.component';
import { NewsComponent } from './news/news.component';
import { AgmMinutesComponent } from './news/2019-04-10-agm-minutes/2019-04-10-agm-minutes.component';

import 'jquery';
import 'popper.js';
import 'bootstrap';
import { NavigationComponent } from './navigation.component';
import { appRoutes } from './app.routes';
import { FooterComponent } from './footer.component';
import { EventItemComponent } from './events/club-runs-and-training/event-item.component';
import { EventsService } from './events/events.service';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    HomeComponent,
    AboutComponent,
    KitComponent,
    GalleryComponent,
    PageNotFoundComponent,
    ContactComponent,
    WinterHandicapComponent,
    CommitteeComponent,
    ContactSubmittedComponent,
    SocialEventsComponent,
    ClubRunsAndTrainingComponent,
    SummerHandicapComponent,
    ClubChampionshipComponent,
    ImageBannerComponent,
    AboutUsComponent,
    FindUsComponent,
    ProspectParkComponent,
    BeansheafComponent,
    OtherLocationsComponent,
    NewsComponent,
    AgmMinutesComponent,
    NavigationComponent,
    FooterComponent,
    EventItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {
        //enableTracing: true, // <-- debugging purposes only
        useHash: false,
        scrollPositionRestoration: 'enabled'
      } 
    ),
    HttpClientModule,
    FormsModule, 
    MarkdownModule.forRoot(),
  ],
  providers: [
    EventsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
