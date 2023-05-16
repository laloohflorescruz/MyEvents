import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service';
import { ISession } from '../shared';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any;
  addMode: boolean | undefined;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(
      +this.route.snapshot.params['id']);

    //this.event = this.eventService.getEvent(1);
  }
  addSession() {
    this.addMode = true;
  }
  saveNewSession (session : ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map((s: { id: any; })=>{
      return s.id;
    }));
      session.id = nextId + 1
      this.event.sessions.push(session)
      this.eventService.updateEvent(this.event)
      this.addMode = false
  }
  cancelAddSession() {
    this.addMode= false;
  }
}
