import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component'; // Ajusta la ruta a tu estructura de carpetas

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
  //{ path: 'noticia/:id', component: NoticiaDetalleComponent },
  //{ path: 'favoritos', component: FavoritosComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
