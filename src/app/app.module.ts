import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { KitComponent } from './kit/kit.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { WinterHandicapComponent } from './winter-handicap/winter-handicap.component';

const appRoutes: Routes = [
  {
    path: 'events',
    component: EventsComponent,
    data: { title: 'Events' },
    pathMatch: 'prefix'
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' },
    pathMatch: 'prefix'
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
    data: { title: 'Gallery' },
    pathMatch: 'prefix'
  },
  {
    path: 'socialmedia',
    component: SocialmediaComponent,
    data: { title: 'Social Media' },
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
    component: PagenotfoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    HomeComponent,
    AboutComponent,
    KitComponent,
    GalleryComponent,
    PagenotfoundComponent,
    ContactComponent,
    SocialmediaComponent,
    WinterHandicapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
