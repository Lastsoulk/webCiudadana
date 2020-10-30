import { Component } from '@angular/core';

/**
 * @title Card with multiple sections
 */

@Component({
    selector: 'campanas',
    templateUrl: './campanas.component.html',
    styleUrls: ['./campanas.component.css'],
})
export class Campana {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}