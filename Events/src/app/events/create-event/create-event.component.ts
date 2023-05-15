import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  newEvent: any
  isDirty:boolean = true
  event:any
  
  constructor(
    private router: Router,
    private eventService: EventService
  ) { }

  ngOnInit() {
  }

  saveEvent(formValues: any) {
   // console.log(formValues);
   this.eventService.saveEvent(formValues)
   this.isDirty = false
   this.router.navigate(['/events'])

  }

  cancel() {
    this.router.navigate(['/events'])
  }
}
