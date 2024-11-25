import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';
import { HomeComponent } from './home/components/home.component';
import { RegisterComponent } from './register/components/register.component';
import { ResultsComponent } from './results/components/results.component';
import { AboutComponent } from './about/components/about.component';

// Definición de las rutas para los componentes de la aplicación
const routes: Routes = [
  {
    path: '', // Ruta base
    component: LayoutComponent, // Componente principal de la aplicación
    children: [
      {
        path: '', // Ruta para la página de inicio
        component: HomeComponent 
      },
      {
        path: 'registro', // Ruta para la página de registro
        component: RegisterComponent 
      },
      {
        path: 'resultados', // Ruta para la página de resultados
        component: ResultsComponent 
      },
      {
        path: 'acercade', // Ruta para la página "Acerca de"
        component: AboutComponent 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importa el RouterModule con las rutas definidas
  exports: [RouterModule] // Exporta RouterModule para que esté disponible en otros módulos
})
export class OrganizacionRoutingModule { } // Módulo de rutas para la sección de organización
