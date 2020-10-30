import { Component } from '@angular/core';

/**
 * @title Card with multiple sections
 */

@Component({
    selector: 'detalle-campana',
    templateUrl: './detalleCampana.component.html',
    styleUrls: ['./detalleCampana.component.css'],
})
export class DetalleCampana {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}