import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params)=> {
      this.event = this.eventService.getEvent(+params['id'])
    })

    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    this.addMode =false;
   /* this.event = this.eventService.getEvent(
      +this.route.snapshot.params['id']);*/

    //this.event = this.eventService.getEvent(1);
  }
  addSession() {
    this.addMode = true;
  }
  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map((s: { id: any; }) => {
      return s.id;
    }));
    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
