import { Component } from '@angular/core';

/**
 * @title Card with multiple sections
 */

@Component({
    selector: 'card-fancy-example',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class CardFancyExample {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}