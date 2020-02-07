import { trigger, transition, style, query, animateChild, group, animate, animation, useAnimation } from '@angular/animations';


const slideInFromLeftAnimation = animation([
    style({ position: 'relative' }),
    query(':enter, :leave', [
        style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
        })
    ]),
    query(':enter', [
        style({ left: '-100%', opacity: 0 })
    ]),
    query(':leave', animateChild(), {optional: true}),
    group([
        query(':leave', [
            animate('500ms ease-out', style({ left: '100%', opacity: 0 }))
        ], {optional: true}),
        query(':enter', [
            animate('500ms ease-out', style({ left: '0%', opacity: 1.0 }))
        ])
    ]),
    query(':enter', animateChild()),
]);

const slideInFromRightAnimation = animation([
    style({ position: 'relative' }),
    query(':enter, :leave', [
        style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden'
        })
    ]),
    query(':enter', [
        style({ left: '100%', opacity: 0 })
    ]),
    query(':leave', animateChild(), {optional: true}),
    group([
        query(':leave', [
            animate('500ms ease-out', style({ left: '-100%', opacity: 0 }))
        ], {optional: true}),
        query(':enter', [
            animate('500ms ease-out', style({ left: '0%', opacity: 1.0 }))
        ])
    ]),
    query(':enter', animateChild())
]);

export const slideInAnimation =
    trigger('routerAnimations', [
        transition('HomePage => *', useAnimation(slideInFromRightAnimation)),
        transition('AdvantagePage => HomePage', useAnimation(slideInFromLeftAnimation)),
        transition('HistoryPage => HomePage', useAnimation(slideInFromLeftAnimation)),
        transition('AdvantagePage => HistoryPage', useAnimation(slideInFromRightAnimation)),
        transition('HistoryPage => AdvantagePage', useAnimation(slideInFromLeftAnimation)),
        transition('AboutPage => *', useAnimation(slideInFromLeftAnimation)),
        transition('* => AboutPage', useAnimation(slideInFromRightAnimation))
    ]);
