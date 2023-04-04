import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-advantage',
    templateUrl: './advantage.component.html',
    styleUrls: ['./advantage.component.less']
})
export class AdvantageComponent {
    constructor(private router: Router) { }

    onSwipe(ev: HammerInput) {
        //console.log(ev);
        if (ev.direction === Hammer.DIRECTION_LEFT) {
            this.router.navigateByUrl('/history');
        } else if (ev.direction === Hammer.DIRECTION_RIGHT) {
            this.router.navigateByUrl('/home');
        }
    }
}
