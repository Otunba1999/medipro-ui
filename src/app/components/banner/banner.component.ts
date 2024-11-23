import {Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {fadeInOut} from "../../animations/fade-in-out";
import {NgFor, NgIf, NgOptimizedImage, NgStyle} from "@angular/common";
import {interval, Subscription} from "rxjs";
import {SlideComponent} from "../slide/slide.component";
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    NgFor,
    NgOptimizedImage,
    NgIf,
    SlideComponent,
    NgStyle
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  animations: [fadeInOut]
})
export class BannerComponent implements OnDestroy, OnInit {

  constructor(private eventService: EventService) {
  }

  private _bannerProp: { bannerImage: string, bannerContent: string, bannerTitle: string, bannerSubTitle: string }[] = [
    {
      bannerImage: 'assets/images/slides/banner-img5.jpg',
      bannerContent: 'Avast, ye wet lubber- set sails for pestilence!Nobilis abnobas ducunt ad victrix.\n' +
        '      Avast, ye wet lubber- set sails for pestilence!Nobilis abnobas ducunt ad victrix.\n' +
        '      Avast, ye wet lubber- set sails for pestilence!Nobilis abnobas ducunt ad victrix.',
      bannerTitle: "Medical Care",
      bannerSubTitle: 'Health Care Solution'
    },
    {
      bannerImage: 'assets/images/slides/banner-img4.jpg',
      bannerContent: 'Desolation, grace, and passion. Desolation, grace, and passion. Desolation, grace, and passion.' +
        'Desolation, grace, and passion. Desolation, grace, and passion. Desolation, grace, and passion.',
      bannerTitle: "FAMILY PLANS",
      bannerSubTitle: 'Affordable Solutions'
    },
    {
      bannerImage: 'assets/images/slides/banner-img9.jpg',
      bannerContent: 'Avast, ye wet lubber- set sails for pestilence!Nobilis abnobas ducunt ad victrix.\n' +
        '      Avast, ye wet lubber- set sails for pestilence!Nobilis abnobas ducunt ad victrix.\n' +
        '      Avast, ye wet lubber- set sails for pestilence!Nobilis abnobas ducunt ad victrix.',
      bannerTitle: "Medical Care",
      bannerSubTitle: 'Health Care Solution'
    },
    {
      bannerImage: 'assets/images/slides/banner-img10.jpg',
      bannerContent: 'Desolation, grace, and passion. Desolation, grace, and passion. Desolation, grace, and passion.' +
        'Desolation, grace, and passion. Desolation, grace, and passion. Desolation, grace, and passion.',
      bannerTitle: "Family Plan",
      bannerSubTitle: 'Affordable Solutions'
    },
    {
      bannerImage: 'assets/images/slides/banner-img8.jpg',
      bannerContent: '',
      bannerTitle: "Research",
      bannerSubTitle: 'cancer researchers honored'
    },
  ];

  index: number = 0;
  private subscription: Subscription = new Subscription();
  private interval: any
  showAppointment: boolean = false;

  ngOnInit(): void {
    this.autoChangeBanner();
  }

  get bannerProp() {
    return this._bannerProp;
  }

  autoChangeBanner(): void {
    // this.subscription.unsubscribe();
    this.interval = setInterval(() => {
      this.showNext()
    }, 10000)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  timeRunning = 4000;
  runtimeOut: any;

  showPrev() {
    let carousel = document.querySelector('.carousel');
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let positionLastItem = itemSlider.length - 1;
    const sliderParent = itemSlider[0].parentNode;
    if (sliderParent && carousel) {
      setTimeout(() => {
        sliderParent.prepend(itemSlider[positionLastItem]);
      }, this.timeRunning)
      carousel.classList.add('next');
      clearTimeout(this.runtimeOut);
      this.runtimeOut = setTimeout(() => {
        carousel.classList.remove('next');
      }, this.timeRunning)
    } else return;
  }

  showNext() {
    // clearInterval(this.interval);
    let carousel = document.querySelector('.carousel');
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    const sliderParent = itemSlider[0].parentNode;
    if (sliderParent && carousel) {
      setTimeout(() => {
        sliderParent.appendChild(itemSlider[0]);
      }, 4000)
      carousel.classList.add('next');
      clearTimeout(this.runtimeOut);
      this.runtimeOut = setTimeout(() => {
        carousel.classList.remove('next');
      }, this.timeRunning)
    } else return;

  }

  onShowAppointment() {
    this.showAppointment = !this.showAppointment;
    this.eventService.showAppointment = this.showAppointment;
  }
}
