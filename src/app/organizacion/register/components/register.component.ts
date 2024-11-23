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
  registerForm: FormGroup;
  areas: Areas[] = []; // Lista de áreas

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private areaService: AreaService, // Servicio de áreas
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      area: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadAreas(); // Cargar áreas al iniciar
  }

  loadAreas(): void {
    this.areaService.getAreas().subscribe(
      (data: Areas[]) => {
        this.areas = data;
      },
      (error: any) => {
        console.error('Error al cargar las áreas', error);
      }
    );
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value); // Para depuración
      this.registerService.registerUser(this.registerForm.value).subscribe(
        (response) => {
          console.log('Usuario registrado con éxito', response);
  
          // Mostrar el modal de éxito usando SweetAlert2
          Swal.fire({
            title: '¡Éxito!',
            text: 'Persona registrada con éxito.',
            icon: 'success',
            confirmButtonText: 'Aceptar',
          }).then(() => {
            // Redirige al home después de que se cierre el modal
            this.router.navigate(['/home']);
          });
        },
        (error) => {
          console.error('Error al registrar el usuario', error);
          Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al registrar la persona.',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
        }
      );
    } else {
      console.log('Por favor completa todos los campos.');
    }
  }
}  