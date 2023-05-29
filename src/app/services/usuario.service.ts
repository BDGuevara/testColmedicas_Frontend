import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Usuario } from '../models/usuario';
import {map, tap} from 'rxjs/operators';
import { Plan } from '../models/plan';
import { Tipoid } from '../models/tipoid';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseEndpoint = 'http://localhost:9090/usuarios';

  private cabeceras: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  public usuarioChanged: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient ) {

  }

  public getUsuarios(): Observable<Usuario[]> {
    //return this.http.get<Usuario[]>(this.baseEndpoint);

    //usamos pipe
    return this.http.get<Usuario[]>(this.baseEndpoint).pipe(
      map(usuarios => {
        return usuarios as Usuario[]
      })
    );
  }

  public viewUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(this.baseEndpoint + '/' + id);
  }

  public createUsuario(usuario: Usuario): Observable<Usuario>{
    const usuarioToSend = { ...usuario };

    // Creamos nuevos objetos Tipoid y Plan solo con el campo id
    usuarioToSend.tipoidentificacion = { id: usuario.tipoidentificacion.id } as Tipoid;
    usuarioToSend.plan = { id: usuario.plan.id } as Plan;

    return this.http.post<Usuario>(this.baseEndpoint, usuarioToSend, { headers: this.cabeceras }).pipe(
      tap(() => {
        // Emitimos un evento cuando el usuario ha sido creado.
        this.usuarioChanged.next();
      })
    );
  }

  public editUsuario(usuario: Usuario): Observable<Usuario> {
    const usuarioToSend = { ...usuario };

    // Creamos nuevos objetos Tipoid y Plan solo con el campo id
    usuarioToSend.tipoidentificacion = { id: usuario.tipoidentificacion.id } as Tipoid;
    usuarioToSend.plan = { id: usuario.plan.id } as Plan;

    return this.http.put<Usuario>(this.baseEndpoint, usuarioToSend, {headers: this.cabeceras}).pipe(
      tap(() => {
        // Emitimos un evento cuando el usuario ha sido actualizado.
        this.usuarioChanged.next();
      })
    );
  }

  public deleteUsuario(id: number): Observable<void>{
    return this.http.delete<void>(this.baseEndpoint + '/' + id);
  }
}
