import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/models/plan';
import { Tipoid } from 'src/app/models/tipoid';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioDataServiceService } from 'src/app/services/usuario-data-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-new',
  templateUrl: './usuario-new.component.html',
  styleUrls: ['./usuario-new.component.css']
})
export class UsuarioNewComponent {

  usuario: Usuario = new Usuario();


  constructor(private service: UsuarioService,
              private router: Router,
              private usuarioDataService: UsuarioDataServiceService) {

    this.usuarioDataService.usuarioActual.subscribe(usuario => {
      this.usuario = usuario || new Usuario();
      this.usuario.tipoidentificacion = this.usuario.tipoidentificacion || new Tipoid(); // Asegurándonos de que 'tipoidentificacion' esté inicializado
      this.usuario.plan = this.usuario.plan || new Plan(); // Haciendo lo mismo para 'plan'
    });
  }

 createUsuario() {
    this.service.createUsuario(this.usuario).subscribe(
      response => {
        console.log('Usuario creado', response);
        alert("Cliente creado con exito");
        // Aquí puedes redirigir a la página que desees, por ejemplo:
         this.router.navigate(['/usuarios']);
      },
      error => {
        console.error('Error al crear el usuario', error);
      }
    );
  }

  editarUsuario() {
    this.service.editUsuario(this.usuario).subscribe(
      response => {
        console.log('Usuario Actualizado', response);
        alert("Cliente Actualizado con exito");
        // Aquí puedes redirigir a la página que desees, por ejemplo:
         this.router.navigate(['/usuarios']);
      },
      error => {
        console.error('Error al actualizar el usuario', error);
      }
    );
  }



}
