import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PlanesComponent } from './components/planes/planes.component';
import { TiposidComponent } from './components/tiposid/tiposid.component';
import { UsuarioNewComponent } from './components/usuarios/modals/new/usuario-new/usuario-new.component';


const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo : 'usuarios' },
  {path:'usuarios', component: UsuariosComponent},
  {path:'usuarios/form', component: UsuarioNewComponent},
  {path:'usuarios/form/:id', component: UsuarioNewComponent},
  {path:'planes', component: PlanesComponent},
  {path:'tiposid', component: TiposidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
