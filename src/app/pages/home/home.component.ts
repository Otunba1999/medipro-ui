import {Component, OnInit} from '@angular/core';
import {BannerComponent} from "../../components/banner/banner.component";
import {HeaderComponent} from "../../components/header/header.component";
import {NavigationComponent} from "../../components/navigation/navigation.component";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {EventService} from "../../services/event.service";
import {SpecComponent} from "./spec/spec.component";
import {AppointmentComponent} from "./appointment/appointment.component";
import {expandContrast} from "../../animations/slide";
import {News} from "../../models/news";
import {SlideComponent} from "../../components/slide/slide.component";
import {ReviewsComponent} from "./reviews/reviews.component";
import {Review} from "../../models/review";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, HeaderComponent, NavigationComponent, NgClass, SpecComponent, AppointmentComponent, NgIf, SlideComponent, NgForOf, ReviewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [expandContrast]
})
export class HomeComponent implements OnInit {

  constructor(private eventService: EventService,) {
  }

  private _news: News[] = [
    {
      newsImage: 'assets/images/news/news-img1.jpg',
      title: 'Center For Medical',
      profileImage: 'assets/images/profiles/news-dr1.jpg',
      description: 'The proton is more green people now than c-beam. colorful and wildly distant.',
      date: new Date(),
      comments: ['I love you', 'I Like this']
    },
    {
      newsImage: 'assets/images/news/news-img2.jpg',
      title: 'Innovations in Healthcare',
      profileImage: 'assets/images/profiles/news-dr2.jpg',
      description: 'New breakthroughs in medical technology are changing lives every day.',
      date: new Date('2024-05-15'),
      comments: ['This is amazing!', 'Very informative.']
    },
    {
      newsImage: 'assets/images/news/news-img3.jpg',
      title: 'Nutrition and Wellness',
      profileImage: 'assets/images/profiles/news-dr1.jpg',
      description: 'A balanced diet is essential for a healthy lifestyle.',
      date: new Date('2024-06-20'),
      comments: ['Great tips!', 'I will try this!']
    },
    {
      newsImage: 'assets/images/news/news-img4.jpg',
      title: 'Mental Health Awareness',
      profileImage: 'assets/images/profiles/news-dr2.jpg',
      description: 'Understanding mental health is crucial for overall well-being.',
      date: new Date('2024-07-25'),
      comments: ['So important!', 'Thank you for sharing.']
    },
    {
      newsImage: 'assets/images/news/news-img5.jpg',
      title: 'Fitness Trends of 2024',
      profileImage: 'assets/images/profiles/news-dr1.jpg',
      description: 'Stay fit with the latest trends in fitness and exercise.',
      date: new Date('2024-08-30'),
      comments: ['I need this in my life!', 'Very helpful!', 'You can add more comments to this']
    }
  ];

  private _reviews: Review[] = [
    {
      reviewerProfileImg: 'assets/images/testimonials/testimonial-img1.jpg',
      reviewerName: 'John Doe',
      reviewerCondition: 'Hair Patient',
      review: 'Stigma at the ready room was the ionic cannon of mankind, experienced to a delighted moon.\n' +
        '        Stigma at the ready room was the ionic cannon of mankind, experienced to a delighted moon.\n' +
        '        Stigma at the ready room was the ionic cannon of mankind, experienced to a delighted moon.'
    },
    {
      reviewerProfileImg: 'assets/images/testimonials/testimonial-img2.jpg',
      reviewerName: 'Johnny Bravo',
      reviewerCondition: 'Heart Patient',
      review: 'Stigma at the ready room was the ionic cannon of mankind, experienced to a delighted moon.\n' +
        '        Stigma at the ready room was the ionic cannon of mankind, experienced to a delighted moon.\n' +
        '        Stigma at the ready room was the ionic cannon of mankind, experienced to a delighted moon.'
    },
    {
      reviewerProfileImg: 'assets/images/testimonials/testimonial-img3.jpg',
      reviewerName: 'Eloana Monroe',
      reviewerCondition: 'Skin Patient',
      review: 'Stigma at the ready room was the ionic cannon of mankind, experienced to a delighted moon.\n' +
        '        Stigma at the ready room was the ionic cannon of mankind, experienced to a delighted moon.\n' +
        '        Stigma at the ready room was the ionic cannon of mankind, experienced to a delighted moon.'
    }
  ];
  currentNews: number = 0;

  get news() {
    return this._news;
  }
  get reviews(){
    return this._reviews;
  }

  handleShowMenu($event: boolean) {
    console.log($event);
  }

  showMenu = false;
  // private subscription: Subscription = new Subscription<boolean>();
  showAppointment: boolean = false;

  ngOnInit(): void {
    this.eventService.showMenu$.subscribe((show: boolean) => {
      this.showMenu = show;
    });
    this.eventService.showAppointment$.subscribe((show: boolean) => {
      this.showAppointment = show;
    })
  }

  onSwipe(event: any) {
    console.log('swipe occur', event)
    if (event.direction === 2) {
      // Swipe left
      this.nextItem();
      console.log('swipe left')
    } else if (event.direction === 4) {
      // Swipe right
      this.previousItem();
      console.log('swipe right')
    }
  }

  nextItem() {
    this.currentNews = (this.currentNews + 1) % this.news.length;
    console.log(this.currentNews)
  }

  previousItem() {
    this.currentNews = (this.currentNews - 1 + this.news.length) % this.news.length;
    console.log(this.currentNews)
  }

  scrollRight(slider: HTMLDivElement) {
    slider.scrollLeft += 250;
  }

  scrollLeft(slider: HTMLDivElement) {
    slider.scrollLeft -= 250;
  }
}
