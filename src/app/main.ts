import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; 
import { AppModule } from './app.module'; 

// Arranca la aplicación Angular usando el módulo principal AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); // Captura y muestra cualquier error en el proceso de arranque
