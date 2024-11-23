import {Component, EventEmitter, HostListener, Output} from '@angular/core';
import {EventService} from "../../services/event.service";
import {NgClass, NgForOf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private eventService: EventService, private router: Router) {
  }
  private _navProp: string[] = ['Home', 'About Us', 'Pages', 'Procedures', 'Gallery', 'News Posts', 'Shop', 'Contact Us'];
  currentIndex: number = 0;
  get navProp(): string[] {
    return this._navProp;
  }
  @Output() barClicked = new EventEmitter<boolean>();
   showMenu = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const headerCon = document.querySelector('.header-con');
    if (headerCon) {
      if(window.scrollY > 50)
        headerCon.classList.add('shrink');
      else
        headerCon.classList.remove('shrink');
    }
  }

  showNavMenu() {
    this.showMenu = !this.showMenu;
    this.eventService.showMenu = this.showMenu;
  }

  navigate(index: number, options:string) {
    this.currentIndex = index;
    const word = options.trim().split(/\s+/);
    const nav = word[0].toLowerCase();
    console.log(nav);
    this.router.navigate([nav]);
  }
}
