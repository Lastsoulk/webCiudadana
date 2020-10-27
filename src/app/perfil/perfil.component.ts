import { Component } from '@angular/core';

/**
 * @title Card with multiple sections
 */

@Component({
    selector: 'perfil',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.css'],
})
export class Perfil {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}