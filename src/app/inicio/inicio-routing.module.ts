import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component'; // Asegúrate de que la importación sea correcta.

const routes: Routes = [
  {
    path: 'inicio', // La ruta para la página de inicio
    component: InicioComponent
  },
  // Otras rutas relacionadas con la página de inicio, si las tienes.

  // Ruta por defecto (por ejemplo, si se ingresa una ruta incorrecta)
  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
