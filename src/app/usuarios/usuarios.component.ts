import { Component } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  providers: [PeticionesService]
})

export class UsuariosComponent {
  constructor(private peticionesService: PeticionesService) {
    console.log(peticionesService.obtenerUsuarios());
  }
}