import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // agregar( event: any ) {
  //   event.preventDefault();
  //   console.log(event);
  // }

  agregar() {
    if ( this.nuevo.nombre.trim().length === 0 ) {
      return;
    }

    console.log(this.nuevo);
  }

  // cambiarNombre(event: any) {
  //   console.log(event.target.value);
  // }

}
