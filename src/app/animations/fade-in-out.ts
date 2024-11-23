import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0}),
    animate('1000ms ease-in', style({
      opacity: 0
  }))]),
  transition(':leave', [animate('1s ease-in',style({opacity: 0}))]),

])
