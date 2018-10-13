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
    component: HomeComponent,
    data: { title: 'Kit' },
    pathMatch: 'prefix'
  },
  {
    path: 'gallery',
    component: HomeComponent,
    data: { title: 'Gallery' },
    pathMatch: 'prefix'
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    HomeComponent,
    AboutComponent,
    KitComponent,
    GalleryComponent,
    PagenotfoundComponent
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
