import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event-list/shared/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(
      +this.route.snapshot.params['id']);

    //this.event = this.eventService.getEvent(1);
  }
}