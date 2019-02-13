import { trigger, state, style, transition, animate, animation, useAnimation } from '@angular/animations';

export const RouteTransition = trigger('routeScaleOutSlideIn', [
  transition(':enter', [
    style({
      transform: 'translateY(100%)',
      opacity: 0
    }),
    animate(100)
  ]),
  transition(':leave', animate(100, style({
    transform: 'scale(0.5)',
    opacity: 0
  })))
]);