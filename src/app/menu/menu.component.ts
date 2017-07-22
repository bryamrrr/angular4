import { Component } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  public enlaces = ['Inicio', 'Catálogo', 'Contáctanos', 'Login'];
}