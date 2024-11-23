import { Component } from '@angular/core';
import {expandContrast, slideIn} from "../../../animations/slide";
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    NgForOf
  ],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss',
  animations: [slideIn, expandContrast]
})
export class AppointmentComponent {
  showIcon: boolean = false;
  private _inputs: { icon: string, placeholder: string }[] = [
    {icon : 'fa fa-user', placeholder: 'Your Name'},
    {icon : 'fa fa-envelope', placeholder: 'Email Address'},
    {icon : 'fa fa-phone', placeholder: 'Phone Number'},
    {icon : 'fa fa-calender', placeholder: 'Appointment Date'},
    {icon : 'fa fa-clipboard', placeholder: 'Message'},

  ];
  get inputs() {
    return this._inputs;
  }
  selectedIndex: number | null = null;
  onFocus(index: number) {
    this.showIcon = true;
    this.selectedIndex = index;
  }

  onBlur() {
    this.selectedIndex = null;
    this.showIcon = false;
  }
}
