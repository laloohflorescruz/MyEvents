import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input() count: number | undefined;
  @Input() voted: boolean | undefined;
  @Output() vote = new EventEmitter();


  constructor() { }

  ngOnInit() {
    
  }

  onClick() {
    this.vote.emit({});
  }
}
