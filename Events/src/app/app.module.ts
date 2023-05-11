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

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,  
    BrowserAnimationsModule,
    ToastrModule.forRoot(),   

   ],
  providers: [EventService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
