import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Definición de las rutas
const routes: Routes = [
  {
    path: '',  // Ruta principal
    loadChildren: () => import('./organizacion/organizacion.module').then(m => m.OrganizacionModule)  // Carga perezosa del módulo de organización
  },
  {
    path: '**',  // Ruta comodín para redirigir cualquier ruta desconocida
    redirectTo: ''  // Redirige a la ruta principal
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura las rutas en la aplicación
  exports: [RouterModule]  // Exporta el RouterModule para que esté disponible en toda la aplicación
})
export class AppRoutingModule { }
