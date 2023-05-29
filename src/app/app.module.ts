import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { TiposidComponent } from './components/tiposid/tiposid.component';
import { PlanesComponent } from './components/planes/planes.component';
import { LayoutModule } from './layout/layout.module';
import { UsuarioEditComponent } from './components/usuarios/modals/edit/usuario-edit/usuario-edit.component';
import { UsuarioNewComponent } from './components/usuarios/modals/new/usuario-new/usuario-new.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    TiposidComponent,
    PlanesComponent,
    UsuarioEditComponent,
    UsuarioNewComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
