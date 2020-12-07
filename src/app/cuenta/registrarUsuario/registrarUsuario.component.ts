import { Component } from '@angular/core';

/**
 * @title Card with multiple sections
 */

@Component({
    selector: 'registrar-usuario',
    templateUrl: './registrarUsuario.component.html',
    styleUrls: ['./registrarUsuario.component.css'],
})
export class RegistrarUsuario {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}