import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {


  private _personajes: Personaje[] = [ // lo hacemos privado para que no se manipule desde afuer
  {
  nombre: "guku",
  poder: 1650
  },

  {
    nombre: "Lenin",
    poder: 20000
  }
];

get personajes(): Personaje[] {
  return [...this._personajes];
}


    constructor() {

    }

    agregarPersonaje(personaje: Personaje) {
      this._personajes.push(personaje);
    }


}
