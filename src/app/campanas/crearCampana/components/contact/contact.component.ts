import { Component, Input, SkipSelf } from '@angular/core';
import { ControlContainer } from '@angular/forms';

interface Autoridad {
    value: string;
    viewValue: string;
    posicion: string;
}

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    viewProviders: [{
        provide: ControlContainer,
        useFactory: (container: ControlContainer) => container,
        deps: [[new SkipSelf(), ControlContainer]],
    }]
})
export class ContactComponent {

    @Input() modelGroupName: string;
    autoridades: Autoridad[] = [
        { value: 'auto-0', viewValue: 'Cecilia Paredes', posicion: 'Rectora ESPOL' },
        { value: 'auto-1', viewValue: 'Cynthia Viteri', posicion: 'Alcalde de Guayaquil' },
        { value: 'auto-2', viewValue: 'Guillermo Lasso', posicion: '' },
        { value: 'auto-3', viewValue: 'Jorge Yunda', posicion: '' },
        { value: 'auto-4', viewValue: 'Lenin Moreno', posicion: '' },
        { value: 'auto-5', viewValue: 'Nueva Autoridad', posicion: '' },
    ];

}