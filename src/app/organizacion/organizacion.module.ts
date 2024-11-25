// src/app/organizacion/organizacion.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { OrganizacionRoutingModule } from './organizacion-routing.module';
import { AboutComponent } from './about/components/about.component';
import { HomeComponent } from './home/components/home.component';
import { RegisterComponent } from './register/components/register.component';
import { ResultsComponent } from './results/components/results.component';
import { AreaService } from './register/services/areas.service';

@NgModule({
  declarations: [
    AboutComponent,  // Componente para la sección "Acerca de"
    HomeComponent,   // Componente para la página de inicio
    RegisterComponent,  // Componente para el registro de usuarios
    ResultsComponent   // Componente para ver los resultados
  ],
  imports: [
    CommonModule,  // Módulo común que contiene directivas y tuberías comunes
    HttpClientModule,  // Módulo para hacer peticiones HTTP
    ReactiveFormsModule,  // Módulo para trabajar con formularios reactivos
    FormsModule,  // Módulo para trabajar con formularios template-driven
    SharedModule,  // Módulo compartido con componentes y servicios comunes
    RouterModule,  // Módulo para manejar rutas
    OrganizacionRoutingModule  // Módulo de rutas específicas de la organización
  ],
  providers: [
    AreaService  // Servicio para gestionar las áreas
  ],
  exports: []  // No se exportan componentes desde este módulo
})
export class OrganizacionModule { }
