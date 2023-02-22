import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  contactDetail = new BehaviorSubject(false);
  headerLoginBack = new BehaviorSubject(false);
  goBackLink = new BehaviorSubject(false);
  goBackLink2 = new BehaviorSubject(false);
  headerNav = new BehaviorSubject(true);
  logSignUser = new BehaviorSubject(false);
  welcomeLogOut = new BehaviorSubject(true);
  username = new BehaviorSubject('naman');
  loader = new BehaviorSubject(false);
}
