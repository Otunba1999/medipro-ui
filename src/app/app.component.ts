import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {NgIf} from "@angular/common";
import {EventService} from "./services/event.service";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavigationComponent, NgIf, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'medipro-app-ui';
  showMenu = false;
  constructor(private eventService: EventService,) {
  }
  handleShowMenu($event: boolean) {
    console.log($event);
  }
  // private subscription: Subscription = new Subscription<boolean>();
  ngOnInit(): void {
    this.eventService.showMenu$.subscribe((show: boolean) => {
      this.showMenu = show;
      console.log(show, 'from init');
    })
  }
}
