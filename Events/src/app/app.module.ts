import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
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
import { UpvoteComponent } from './events/event-details/upvote/upvote.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/login/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import { JQ_TOKEN, JQueryService } from './common/jQuery.service';   
import { VoterService } from './events/event-details/upvote/voter.service';

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


//let jQuery = window['$'];
 


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
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    DurationPipe,
    UpvoteComponent
    
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    EventService,
    NotificationService,
    AuthService,
    VoterService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
