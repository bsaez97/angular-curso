import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe() {
    // this.heroes.length = this.heroes.length - 1;

    this.heroeBorrado = this.heroes.shift() || '';
  }
}

