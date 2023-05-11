import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../shared/notification.service';


@Component({
  selector: 'app-event-list',
  template: `<div>
  <h1>Upcoming Event</h1>
  <hr>
  <div class="row">
  <div *ngFor="let event of events" class="col-md-5">
  <app-event-thumbnail (click)="handleThumbnailClick(event.name)"
  [event]="event"></app-event-thumbnail>
  </div>
  </div>
  `
})
export class EventListComponent implements OnInit {
  events: any[] | undefined

  constructor(private eventService: EventService,
    private toastr: ToastrService,
    private not : NotificationService
  ) {

  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

 
  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName)

  }
  
  // showSuccess(message, title){
  //   this.toastr.success(message, title)
  // }
}
