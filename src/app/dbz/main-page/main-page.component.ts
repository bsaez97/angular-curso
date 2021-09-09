import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  // personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: "Marstro Roshi",
    poder: 1000
  };

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  // agregar( event: any ) {
  //   event.preventDefault();
  //   console.log(event);
  // }

  // agregarNuevoPersonaje(argumento: Personaje) {
  //   // console.log('main page console');
  //   // console.log(argumento);
  //   // debugger; //brakepoint en codigo
  //   this.personajes.push(argumento);
  // }

  // cambiarNombre(event: any) {
  //   console.log(event.target.value);
  // }

  // constructor( private dbzService: DbzService ) {
  //   // this.personajes = this.dbzService.personajes;
  // }

  constructor() {}

}
