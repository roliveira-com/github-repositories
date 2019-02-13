import { trigger, state, style, transition, animate, animation, useAnimation } from '@angular/animations';

export const SlideDownEnter = trigger('slidedownenter', [
  transition(':enter', [
    style({
      transform: 'translateY(-150%)',
    }),
    animate(100, style({
      transform: 'translateY(0)'
    }))
  ]),
  transition(':leave', animate(100, style({
    transform: 'translateY(100%)',
  })))
]);