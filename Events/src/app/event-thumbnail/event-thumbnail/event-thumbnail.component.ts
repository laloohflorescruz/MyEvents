import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
  <h2>{{event?.name}}</h2>
  <div>Date: {{event?.date}}</div>
  <div [ngSwitch]="event?.time">

   Time: {{event?.time}} 

  <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
  <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
  <span *ngSwitchDefault>(Normal Start)</span>
  </div>


  <div>Price: \${{event?.price}}</div>
  <div *ngIf="event?.location">
  <span>Address: {{event.location?.address}}</span>
  <span><p>Location: {{event?.location?.city}}, {{event?.location?.country}}</p></span>
  <div>
  <div *ngIf="event?.onlineUrl">
  <span><p>URL:{{event?.onlineUrl}}</p></span>
  </div>
  </div>
</div>
`
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  constructor() { }

  ngOnInit() {
  }

}
