import { Component } from '@angular/core';

// Definición del componente principal de la aplicación
@Component({
  selector: 'app-root', // Selector para referirse a este componente en HTML
  templateUrl: './app.component.html', // Archivo de plantilla asociada
  styleUrls: ['./app.component.css'] // Archivos de estilo asociados al componente
})
export class AppComponent {
  // Propiedad para el título de la aplicación
  title = 'frontend';
}
