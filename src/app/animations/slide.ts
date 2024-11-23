import {animate, style, transition, trigger} from "@angular/animations";

export const slideOut = trigger('slideOut', [
  transition(':leave', [animate('.15s linear', style({ transform: 'translateX(100%)' }))]),
]);
export const slideIn = trigger('slideIn', [
  transition(':leave', [animate('0.15s linear', style({ transform: 'translateX(-50%)' }))]),
])
export const expandContrast = trigger('expandContrast', [
  transition(':enter', [
    style({ transform: 'translateY(-80%)' }),
    animate('.15s ease-in', style({transform : 'translateY(0)'})),
  ]),
  transition(':leave', [
    style({transform: 'translateY(0)'}),
    animate('150ms ease-in', style({transform: 'translateY(80%)', opacity: 0})),
  ]),

])
