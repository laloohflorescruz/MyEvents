import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/login/auth.service';
import { EventService, ISession } from '../events/shared';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
searchTerm: string= "";
foundSessions: ISession[] | undefined;

  constructor(
    public authService : AuthService,
    private eventService: EventService
    ) { }

  ngOnInit() {
  }


  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe
    ((sessions: ISession[] | undefined) => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    })
  }

  
  
}
