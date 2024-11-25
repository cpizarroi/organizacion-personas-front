import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { ResultsComponent } from './results.component';
import { AreaService } from '../../register/services/areas.service';
import { Areas, Personas } from '../../interface/organizacion.interface';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let areaService: jasmine.SpyObj<AreaService>;

  const mockAreas: Areas[] = [
    { nombre: 'Area 1' },
    { nombre: 'Area 2' }
  ];

  const mockPersonas: Personas[] = [
    { nombre: 'Persona 1', area: { nombre: 'Area 1' }, email: 'persona1@example.com' },
    { nombre: 'Persona 2', area: { nombre: 'Area 1' }, email: 'persona2@example.com' },
    { nombre: 'Persona 3', area: { nombre: 'Area 2' }, email: 'persona3@example.com' }
  ];

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AreaService', ['getAreas', 'getPersonas']);

    TestBed.configureTestingModule({
      declarations: [ ResultsComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [ { provide: AreaService, useValue: spy } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    areaService = TestBed.inject(AreaService) as jasmine.SpyObj<AreaService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call areaService.getAreas and getPersonas on init and process the data', () => {
    areaService.getAreas.and.returnValue(of(mockAreas));
    areaService.getPersonas.and.returnValue(of(mockPersonas));

    fixture.detectChanges();

    expect(areaService.getAreas).toHaveBeenCalled();
    expect(areaService.getPersonas).toHaveBeenCalled();
    const expectedData = [
      { areaNombre: 'Area 1', count: 2 },
      { areaNombre: 'Area 2', count: 1 }
    ];
    expect(component.calculatePersonasPorArea(mockAreas, mockPersonas)).toEqual(expectedData);
  });

  it('should handle error when getAreas fails', () => {
    const consoleErrorSpy = spyOn(console, 'error');
    areaService.getAreas.and.returnValue(throwError('Error'));

    fixture.detectChanges();

    expect(consoleErrorSpy).toHaveBeenCalledWith('Error al cargar las áreas', 'Error');
  });

  it('should handle error when getPersonas fails', () => {
    areaService.getAreas.and.returnValue(of(mockAreas));
    const consoleErrorSpy = spyOn(console, 'error');
    areaService.getPersonas.and.returnValue(throwError('Error'));

    fixture.detectChanges();

    expect(consoleErrorSpy).toHaveBeenCalledWith('Error al cargar los datos de personas', 'Error');
  });
});
