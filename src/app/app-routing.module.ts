import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: PaginaInicioComponent
  },
  {
    path: 'inicio',
    component: PaginaInicioComponent
  },
  {
    path: 'ingresoCliente',
    component: ClienteComponent
  },
  {
    path: 'usuario',
    component: UsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
