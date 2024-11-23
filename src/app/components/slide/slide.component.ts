import {Component, Input} from '@angular/core';
import {Slide} from "../../utilities/slide";
import {NgOptimizedImage, NgStyle} from "@angular/common";
import {News} from "../../models/news";
import {fadeInOut} from "../../animations/fade-in-out";
import {slideIn} from "../../animations/slide";

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgStyle
  ],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss',
  animations: [slideIn]
})
export class SlideComponent {
  @Input() news: News = {} as News;
  formatDate(date: Date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
    const day = date.getDay();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${day} ${year}`;

  }
  onSwipe(event: any){
    console.log('swipe occur', event);
  }
}
