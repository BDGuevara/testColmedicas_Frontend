import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Modal } from 'bootstrap';
import { UsuarioDataServiceService } from 'src/app/services/usuario-data-service.service';
import { Tipoid } from 'src/app/models/tipoid';
import { Plan } from 'src/app/models/plan';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements AfterViewInit {

  usuarios: Usuario[];
  usuario: Usuario;

  @ViewChild('myModal') myModal: ElementRef;
  modalInstance: any;

  constructor(private service: UsuarioService, private router: Router, private usuarioDataService: UsuarioDataServiceService){}

  ngOnInit(): void {
    this.getUsuarios();

    this.service.usuarioChanged.subscribe(() => {
      // Recargamos la lista de usuarios cada vez que se crea o actualiza un usuario.
      this.getUsuarios();
    });
  }

  private getUsuarios(): void {
    this.service.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  ngAfterViewInit() {
    this.modalInstance = new Modal(this.myModal.nativeElement);
  }

  mostrarFormulario(id: number) {
    this.service.viewUsuario(id).subscribe(usuario => {
      this.usuarioDataService.changeUsuario(usuario);
      this.modalInstance.show();
    });
  }

  // Puedes llamar a este método en caso de que necesites ocultar el modal.
  ocultarFormulario() {
    this.modalInstance.hide();
  }

  initUsuario() {
    const newUser = new Usuario();
    newUser.tipoidentificacion = new Tipoid();
    newUser.plan = new Plan();
    this.usuarioDataService.changeUsuario(newUser);
  }

  deleteUsuario(id: number)
  {

    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      this.service.deleteUsuario(id).subscribe(() => {
        // Elimina el usuario de la lista local de usuarios después de que la eliminación sea exitosa.
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
      }, error => {
        console.error('Error eliminando usuario', error);
      });
    }

  }
}
