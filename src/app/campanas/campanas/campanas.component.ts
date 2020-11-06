import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

/**
 * @title Card with multiple sections
 */

interface Ciudad {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'campanas',
    templateUrl: './campanas.component.html',
    styleUrls: ['./campanas.component.css'],
})
export class Campana {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    ciudades: Ciudad[] = [
        { value: 'ciudad-0', viewValue: 'Guayaquil' },
        { value: 'ciudad-1', viewValue: 'Quito' },
        { value: 'ciudad-2', viewValue: 'Cuenca' }
    ];
}