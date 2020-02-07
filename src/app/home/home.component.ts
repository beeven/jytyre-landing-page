import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent {
    constructor(private router: Router) { }

    onSwipe(ev: HammerInput) {
        console.log(ev);
        if (ev.direction === Hammer.DIRECTION_LEFT) {
            this.router.navigateByUrl('/advantage');
        }
    }


}
