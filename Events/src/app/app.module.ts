import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  EventListComponent,
  EventThumbnailComponent,
  CreateEventComponent,
  EventDetailsComponent,
  CreateSessionComponent,
  
} from './events/index'

import {
  EventService,
  NotificationService
} from './events/shared/index'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/login/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
  
const routes: Routes = [

  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: 'events/session/new', component: CreateSessionComponent  },
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
    CreateSessionComponent,
    SessionListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    EventService,
    NotificationService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
