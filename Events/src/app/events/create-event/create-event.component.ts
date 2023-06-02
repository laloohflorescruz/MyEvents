import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  newEvent: any
  isDirty:boolean = true
  event:any
  form: any;
   
  constructor(
    private router: Router,
    private eventService: EventService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      date: [null, Validators.required],
      time: [null, Validators.required],
      price: [null, Validators.required],
      location: this.formBuilder.group({
        address: [null, Validators.required],
        city: [null, Validators.required],
        country: [null, Validators.required]
      })
    });
  }

  saveEvent(formValues: any) {
    console.log(formValues);
   this.eventService.saveEvent(formValues).subscribe(()=> {
    this.isDirty = false
    this.router.navigate(['/events'])
   });
  }

  cancel() {
    this.router.navigate(['/events'])
  }
}
