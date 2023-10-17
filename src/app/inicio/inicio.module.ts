import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio.component'; // Asegúrate de que la importación sea correcta.
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module'; // Si tienes un archivo de rutas para el módulo de inicio.
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    InicioComponent,
    // Otros componentes relacionados con la página de inicio, si los tienes.
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    MatSnackBarModule

    // Otros módulos que necesites importar.
  ],
  providers: [
    // Servicios relacionados con la página de inicio.
  ]
})
export class InicioModule { }
