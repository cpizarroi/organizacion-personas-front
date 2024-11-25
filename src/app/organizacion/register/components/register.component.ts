import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { AreaService } from '../services/areas.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Areas } from '../../interface/organizacion.interface'; // Interface de las áreas
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup; // Formulario reactivo
  areas: Areas[] = []; // Lista para almacenar las áreas disponibles

  constructor(
    private router: Router, // Router para navegar entre páginas
    private registerService: RegisterService, // Servicio para registrar usuario
    private areaService: AreaService, // Servicio para obtener las áreas
    private fb: FormBuilder // FormBuilder para crear el formulario reactivo
  ) {
    // Inicialización del formulario con validaciones
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required], // El nombre es obligatorio
      correo: ['', [Validators.required, Validators.email]], // El correo es obligatorio y debe ser un email válido
      area: ['', Validators.required] // El área es obligatoria
    });
  }

  ngOnInit(): void {
    this.loadAreas(); // Cargar las áreas disponibles al iniciar el componente
  }

  loadAreas(): void {
    // Llamada al servicio para obtener las áreas
    this.areaService.getAreas().subscribe(
      (data: Areas[]) => {
        this.areas = data; // Asignar las áreas obtenidas a la lista
      },
      (error: any) => {
        // Manejar errores si no se puede cargar las áreas
        console.error('Error al cargar las áreas', error);
      }
    );
  }

  navigateToHome(): void {
    // Navegar al componente Home
    this.router.navigate(['/home']);
  }

  onSubmit(): void {
    // Verificar si el formulario es válido antes de enviar
    if (this.registerForm.valid) {
      // Llamada al servicio para registrar el usuario
      this.registerService.registerUser(this.registerForm.value).subscribe(
        (response) => {
          // Mostrar un mensaje de éxito con SweetAlert2
          Swal.fire({
            title: '¡Éxito!',
            text: 'Persona registrada con éxito.',
            icon: 'success',
            confirmButtonText: 'Aceptar',
          }).then(() => {
            // Redirigir al home después de que se cierre el modal
            this.router.navigate(['/home']);
          });
        },
        (error) => {
          // Manejar errores de registro de usuario
          console.error('Error al registrar el usuario', error);

          // Verificar si el error es de "correo ya registrado"
          if (error.status === 409 && error.error.message === 'El correo ya está registrado.') {
            // Mostrar mensaje de error para correo ya registrado
            Swal.fire({
              title: 'Error',
              text: 'El correo electrónico ya está registrado.',
              icon: 'error',
              confirmButtonText: 'Aceptar',
            });
          } else {
            // Error genérico si no es correo duplicado
            Swal.fire({
              title: 'Error',
              text: 'Hubo un problema al registrar la persona.',
              icon: 'error',
              confirmButtonText: 'Aceptar',
            });
          }
        }
      );
    } else {
      // Si el formulario no es válido, mostrar mensaje en consola
      Swal.fire({
        title: 'Error',
        text: 'Por favor completa todos los campos.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
  }  
}
