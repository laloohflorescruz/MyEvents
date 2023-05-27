import { Injectable } from '@angular/core';
import { ISession } from '../../shared';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor() { }


  deleteVoters(session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);

  }

  addVoter(session: ISession, voterName: string) {
    session.voters.push(voterName);
  }


}
