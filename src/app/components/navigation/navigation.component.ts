import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {EventService} from "../../services/event.service";
import {slideOut} from "../../animations/slide";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgStyle,
    NgClass
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  animations: [slideOut]
})
export class NavigationComponent implements OnInit {
  constructor(private eventService: EventService) {
  }
    private _navProp: string[] = ['Home', 'About Us', 'Pages', 'Procedures', 'Gallery', 'News Posts', 'Shop', 'Contact Us'];
    get navProp(): string[] {
      return this._navProp;
    }
    showMenu: boolean = false;

  ngOnInit(): void {
    this.eventService.showMenu$.subscribe((show: boolean) => {
      this.showMenu = show;
    })
  }
}
