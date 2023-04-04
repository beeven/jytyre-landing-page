import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.less']
})
export class HistoryComponent {
    constructor(private router: Router) { }

    onSwipe(ev: HammerInput) {
        //console.log(ev);
        if (ev.direction === Hammer.DIRECTION_LEFT) {
            this.router.navigateByUrl('/about');
        } else if (ev.direction === Hammer.DIRECTION_RIGHT) {
            this.router.navigateByUrl('/advantage');
        }
    }
}
