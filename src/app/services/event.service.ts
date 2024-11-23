import { Injectable } from '@angular/core';
import {Subject, Subscriber} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }
  private _showMenu = new Subject<boolean>();
  private _showAppointment = new Subject<boolean>();
  set showMenu(show: boolean) {
    this._showMenu.next(show);
  }
   showMenu$ = this._showMenu.asObservable();

    set showAppointment(showAppointment: boolean) {
        this._showAppointment.next(showAppointment);
    }
    showAppointment$ = this._showAppointment.asObservable();
}
