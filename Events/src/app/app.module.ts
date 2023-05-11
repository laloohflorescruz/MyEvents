import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventListModule } from './event-list/event-list.module';
import { EventListComponent } from './event-list/event-list/event-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventService } from './event-list/shared/event.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationService } from './event-list/shared/notification.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './event-details/event-route-activator.service';
 
const routes: Routes = [
 
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventListComponent },
  { path: 'events/:id', component: EventDetailsComponent},
    //canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    EventService,
    NotificationService,
    EventRouteActivator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
