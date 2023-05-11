import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../shared/notification.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: any[] | undefined

  constructor(private eventService: EventService,
    private toastr: ToastrService,
    private not: NotificationService
  ) {

  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName: any) {
    this.not.success(eventName)
  }
}
