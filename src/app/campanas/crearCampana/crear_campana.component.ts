import { Component } from '@angular/core';

/**
 * @title Card with multiple sections
 */

@Component({
    selector: 'crear-campana',
    templateUrl: './crear_campana.component.html',
    styleUrls: ['./crear_campana.component.css'],
})
export class CrearCampana {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}