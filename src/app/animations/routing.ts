import { trigger, state, style, transition, animate, animation, useAnimation } from '@angular/animations';

export const RouteTransition = trigger('routeScaleOutSlideIn', [
  transition(':enter', [
    style({
      transform: 'translateX(100%)',
      opacity: 0
    }),
    animate(300)
  ]),
  transition(':leave', animate(300, style({
    transform: 'scale(0.5)',
    opacity: 0
  })))
]);