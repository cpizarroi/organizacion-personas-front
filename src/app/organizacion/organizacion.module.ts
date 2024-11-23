// src/app/organizacion/organizacion.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { OrganizacionRoutingModule } from './organizacion-routing.module';
import { AboutComponent } from './about/components/about.component';
import { HomeComponent } from './home/components/home.component';
import { RegisterComponent } from './register/components/register.component';
import { ResultsComponent } from './results/components/results.component';
import { AreaService } from './register/services/areas.service';

@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    RegisterComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule,
    OrganizacionRoutingModule
  ],
  providers: [AreaService],
  exports: []
})
export class OrganizacionModule { }
