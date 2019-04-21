import { Routes } from "@angular/router";
import { EventsComponent } from "./events/events.component";
import { WinterHandicapComponent } from "./events/winter-handicap/winter-handicap.component";
import { SummerHandicapComponent } from "./events/summer-handicap/summer-handicap.component";
import { ClubRunsAndTrainingComponent } from "./events/club-runs-and-training/club-runs-and-training.component";
import { ClubChampionshipComponent } from "./events/club-championship/club-championship.component";
import { SocialEventsComponent } from "./events/social-events/social-events.component";
import { FindUsComponent } from "./find-us/find-us.component";
import { BeansheafComponent } from "./find-us/beansheaf/beansheaf.component";
import { ProspectParkComponent } from "./find-us/prospect-park/prospect-park.component";
import { OtherLocationsComponent } from "./find-us/other-locations/other-locations.component";
import { AboutComponent } from "./about/about.component";
import { AboutUsComponent } from "./about/about-us/about-us.component";
import { CommitteeComponent } from "./about/committee/committee.component";
import { NewsComponent } from "./news/news.component";
import { AgmMinutesComponent } from "./news/2019-04-10-agm-minutes/2019-04-10-agm-minutes.component";
import { HomeComponent } from "./home/home.component";
import { KitComponent } from "./kit/kit.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContactComponent } from "./contact/contact.component";
import { ContactSubmittedComponent } from "./contact-submitted/contact-submitted.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

export const appRoutes: Routes = [
    {
      path: 'events',
      component: EventsComponent,
      data: { title: 'Events' },
      children: [
        {
          path:'',
          redirectTo: 'club-runs-and-training',
          pathMatch: 'full'
        },
        {
          path: 'winter-handicap',
          component: WinterHandicapComponent,
          data: { title: 'Winter Handicap' },
          pathMatch: 'prefix'
        },
        {
          path: 'summer-handicap',
          component: SummerHandicapComponent,
          data: { title: 'Summer Handicap' },
          pathMatch: 'prefix'
        },
        {
          path: 'club-runs-and-training',
          component: ClubRunsAndTrainingComponent,
          data: { title: 'Club Runs & Training' },
          pathMatch: 'prefix'
        },
        {
          path: 'club-championship',
          component: ClubChampionshipComponent,
          data: { title: 'Club Championship' },
          pathMatch: 'prefix'
        },
        {
          path: 'social-events',
          component: SocialEventsComponent,
          data: { title: 'Social Events' },
          pathMatch: 'prefix'
        }
      ]
    },
    {
      path: 'find-us',
      component: FindUsComponent,
      data: { title: 'Find Us' },
      children: [
        {
          path:'',
          redirectTo: 'beansheaf',
          pathMatch: 'full'
        },
        {
          path: 'beansheaf',
          component: BeansheafComponent,
          data: { title: 'Beansheaf' },
          pathMatch: 'prefix'
        },
        {
          path: 'prospect-park',
          component: ProspectParkComponent,
          data: { title: 'Prospect Park' },
          pathMatch: 'prefix'
        },
        {
          path: 'other-locations',
          component: OtherLocationsComponent,
          data: { title: 'Other Locations' },
          pathMatch: 'prefix'
        }
      ]
    },
    {
      path: 'about',
      component: AboutComponent,
      data: { title: 'About' },
      children: [
        {
          path:'',
          redirectTo: 'about-us',
          pathMatch: 'full'
        },
        {
          path: 'about-us',
          component: AboutUsComponent,
          data: { title: 'About Us' },
        },
        {
          path: 'committee',
          component: CommitteeComponent,
          data: { title: 'Committee' },
        }
      ]
    },
    {
      path: 'news',
      component: NewsComponent,
      data: { title: 'News' },
      children: [
        {
          path:'',
          redirectTo: '2019-04-10-agm-minutes',
          pathMatch: 'full'
        },
        {
          path: '2019-04-10-agm-minutes',
          component: AgmMinutesComponent,
          data: { title: '2019-04-10-agm-minutes' },
        },
      ]
    },
    {
      path: 'home',
      component: HomeComponent,
      data: { title: 'Home' },
      pathMatch: 'prefix'
    },
    {
      path: 'kit',
      component: KitComponent,
      data: { title: 'Kit' },
      pathMatch: 'prefix'
    },
    {
      path: 'gallery',
      component: GalleryComponent,
      data: { title: 'Gallery' },
      pathMatch: 'prefix'
    },
    {
      path: 'contact',
      component: ContactComponent,
      data: { title: 'Contact' },
      pathMatch: 'prefix'
    },
    {
      path: 'contact-submitted',
      component: ContactSubmittedComponent,
      data: { title: 'Contact' },
      pathMatch: 'prefix'
    },
    {
      path: 'events.html',
      redirectTo: '/events',
      pathMatch: 'full'
    },
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ];
  