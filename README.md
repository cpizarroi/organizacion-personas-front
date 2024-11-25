# Organización de Personas - Frontend

## Descripción
El frontend de la aplicación Organización de Personas se ha desarrollado utilizando Angular. Este frontend proporciona una interfaz de usuario interactiva para registrar personas, mostrar estadísticas sobre las áreas de trabajo y ofrecer información sobre el creador de la aplicación. Se conecta con el backend de la aplicación, el cual maneja las tablas `personas` y `areas` en una base de datos MySQL.

## Requisitos Previos
- Node.js (v20.10)
- npm (v10.8.2)
- Angular (v17.3.0)
- Angular CLI (v17.3.10)
- MySQL (v8.0)

## Ejecución Local
1. Clonar el proyecto:
    ```sh
    git clone https://github.com/cpizarroi/organizacion-personas-front.git
    ```
2. Ingresar al directorio que se creará:
    ```sh
    cd organizacion-personas-front
    ```
3. Procurar que el backend se esté ejecutando localmente.
4. Ejecutar:
    ```sh
    npm install
    ```
5. Iniciar la aplicación frontend usando:
    ```sh
    npm start
    ```
    o bien
    ```sh
    ng serve -o
    ```
6. Se abrirá una ventana de un navegador web en la dirección `http://localhost:4200/`.

## Pruebas Unitarias
Las pruebas unitarias se realizan utilizando [Jasmine](https://jasmine.github.io/) y [Karma](https://karma-runner.github.io/).

### Ejecución de Pruebas
Para ejecutar las pruebas unitarias, utiliza el siguiente comando:
    ```
    ng test
    ```

## Rutas Principales
- **/home**: Página principal que contiene enlaces a las rutas de registro, resultados y acerca de.
- **/registro**: Permite registrar a una nueva persona con su nombre, correo electrónico y área de trabajo.
- **/resultados**: Muestra un gráfico indicando el número de personas por área de trabajo.
- **/acercade**: Ofrece una breve reseña sobre la persona que creó la aplicación.

