import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importar Router
import { AreaService } from '../../register/services/areas.service';
import { Areas, Personas } from '../../interface/organizacion.interface';

declare var Chart: any;

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private areaService: AreaService, private router: Router) {}  // Inyectar Router

  ngOnInit(): void {
    this.areaService.getAreas().subscribe(
      (areas) => {
        console.log('Áreas:', areas); // Verificar que las áreas se reciben correctamente
        this.areaService.getPersonas().subscribe(
          (personas) => {
            console.log('Personas:', personas); // Verificar que las personas se reciben correctamente
            const data = this.calculatePersonasPorArea(areas, personas);
            this.createChart(data);
          },
          (error) => {
            console.error('Error al cargar los datos de personas', error);
          }
        );
      },
      (error) => {
        console.error('Error al cargar las áreas', error);
      }
    );
  }
  

  calculatePersonasPorArea(areas: Areas[], personas: Personas[]): any[] {
    const personasPorArea = areas.map(area => {
      const count = personas.filter(persona => {
        // Compara el nombre del área de la persona con el nombre del área
        return persona.area.nombre === area.nombre;
      }).length;
  
      return {
        areaNombre: area.nombre,
        count: count
      };
    });
  
    console.log('Datos procesados:', personasPorArea);
    return personasPorArea;
  }
  
  createChart(data: any): void {
    console.log('Datos para el gráfico:', data); 
  
    const labels = data.map((item: any) => item.areaNombre);
    const counts = data.map((item: any) => item.count);
  
    const ctx = (document.getElementById('myChart') as HTMLCanvasElement).getContext('2d');
    new Chart(ctx!, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Personas por Área',
          data: counts,
          backgroundColor: '	rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true, // Esto asegura que el gráfico comienza desde 0
            min: 0,            // Valor mínimo en el eje Y
            max: 5,            // Valor máximo en el eje Y
            ticks: {
              stepSize: 1      // Configura el paso entre cada número en el eje Y
            }
          }
        }
      }
    });
  }
  

  // Método para redirigir al Home
  goHome(): void {
    this.router.navigate(['/']);  // Navega a la página de inicio (Home)
  }
}
