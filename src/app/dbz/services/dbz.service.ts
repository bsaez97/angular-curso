import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    };
    

    // SE PODRIA ELIMINAR PERO LO MANTENDREMOS PARA LA CLARIDAD DEL CURSO

    constructor() {
        // console.log('Servicio inicializado');
    }

    // METODOS SEGUN DOCUMENTACION DEBERIA ESTAR SIEMPRE BAJO EL CONSTRUCTOR DE EXISTIR

    agregarPersonaje( personaje: Personaje ) {
        this._personajes.push( personaje );
    }

}