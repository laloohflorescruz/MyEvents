import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input() count: number = 0;
  @Input() voted: boolean = false;
  @Output() vote = new EventEmitter();


  constructor() { }

  ngOnInit() {

  }

  onClick() {
    if (!this.voted) {
      this.count++;
      this.voted = true;
    } else {
      this.count--;
      this.voted = false;
    }
  }
}
