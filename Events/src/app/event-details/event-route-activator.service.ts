import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { EventService } from '../event-list/shared/event.service';

 
@Injectable()
export class EventRouteActivator {
    constructor(
        private eventService: EventService,
        private router: Router) {

    }

    // CanActivate(route: ActivatedRouteSnapshot) {
    //     const eventExists = !!this.eventService.getEvent(+route.params['id'])

    //     if (!eventExists)
    //         this.router.navigate(['/404'])
    //         return eventExists
    // }
}
