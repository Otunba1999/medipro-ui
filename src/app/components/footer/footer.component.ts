import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Tweet} from "../../models/tweet";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private _services: string[] = ['Home', 'Timetable', 'Services', 'Specialities', 'Events', 'About Us', 'Department', 'Why us', 'Contact us'];
 private _tweets: Tweet[] = [
   {username: '@Rotography', description: 'Please kindly use Support Forum: Medipro.co.uk', date: new Date('2024-11-15')},
   {username: '@Medipro', description: 'A quick launcher for wordpress dashboard', date: new Date('2024-11-19')},
 ];
  get services() {
    return this._services;
  }
  get tweets() {
    return this._tweets;
  }
}
