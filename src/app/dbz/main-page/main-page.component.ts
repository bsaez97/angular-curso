import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]

  nuevo: Personaje = {
    nombre: "Marstro Roshi",
    poder: 1000
  };

  // agregar( event: any ) {
  //   event.preventDefault();
  //   console.log(event);
  // }

  agregarNuevoPersonaje(argumento: Personaje) {
    // console.log('main page console');
    // console.log(argumento);
    // debugger; //brakepoint en codigo
    this.personajes.push(argumento);
  }

  // cambiarNombre(event: any) {
  //   console.log(event.target.value);
  // }

  constructor( private dbzService: DbzService ) {

  }

}
