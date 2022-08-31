import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent  {

// @Input() personajes: Personaje[] = [] // @ input recibe los datos del componente padre

get personajes()
{
  return this.dbzService.personajes;
}

constructor(private dbzService: DbzService) {}

}
