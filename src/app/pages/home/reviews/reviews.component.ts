import {Component, Input} from '@angular/core';
import {Review} from "../../../models/review";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {

  @Input() reviews: Review[] = [];
  currentIndex: number =0 ;

  onScroll(slider: HTMLElement) {
    this.currentIndex = Math.round(slider.scrollLeft / slider.clientWidth);
  }
}
