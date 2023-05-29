import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioDataServiceService {
  private _usuarioActual: BehaviorSubject<Usuario>;

  constructor() {
    this._usuarioActual = new BehaviorSubject<Usuario>(null);
  }

  get usuarioActual() {
    return this._usuarioActual.asObservable();
  }

  changeUsuario(usuario: Usuario) {
    this._usuarioActual.next(usuario);
  }
}
