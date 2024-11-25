import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganizacionModule } from './organizacion/organizacion.module';

@NgModule({
  declarations: [
    AppComponent,  // Declaración del componente principal de la aplicación
  ],
  imports: [
    BrowserModule,  // Necesario para ejecutar la aplicación en el navegador
    AppRoutingModule,  // Configuración de las rutas de la aplicación
    CommonModule,  // Módulo común para usar funcionalidades generales
    OrganizacionModule,  // Módulo que agrupa componentes relacionados con la organización
  ],
  exports: [],
  providers: [],  // Servicios que se proporcionarán a la aplicación
  bootstrap: [AppComponent]  // Componente raíz que se cargará primero
})
export class AppModule { }
