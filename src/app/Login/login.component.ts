import { Component } from '@angular/core';

/**
 * @title Card with multiple sections
 */

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class Login {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}