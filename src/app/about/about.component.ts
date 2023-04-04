import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.less']
})
export class AboutComponent {
    constructor(private router: Router) { }
    onSwipe(ev: HammerInput) {
        //console.log(ev);
        if (ev.direction === Hammer.DIRECTION_RIGHT) {
            this.router.navigateByUrl('/history');
        }
    }
}
