import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  EventListComponent,
  EventThumbnailComponent,
  CreateEventComponent,
  EventDetailsComponent
} from './events/index'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { EventService } from './events/event-list/shared/event.service';
import { NotificationService } from './events/event-list/shared/notification.service';

const routes: Routes = [

  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module')
      .then(m => m.UserModule)
  }
];


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),

  ],
  providers: [
    EventService,
    NotificationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
