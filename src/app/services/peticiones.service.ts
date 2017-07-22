import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PeticionesService {
  public url: string;

  constructor(private _http: Http) {
    this.url = 'https://jsonplaceholder.typicode.com/users';
  }

  obtenerUsuarios() {
    return this._http.get(this.url);
  }
}