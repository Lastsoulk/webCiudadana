import { Component } from '@angular/core';


/**
 * @title Card with multiple sections
 */

@Component({
    selector: 'nosotros',
    templateUrl: './nosotros.component.html',
    styleUrls: ['./nosotros.component.css'],
})
export class Nosotros {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  


}