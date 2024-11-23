import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';
import { HomeComponent } from './home/components/home.component';
import { RegisterComponent } from './register/components/register.component';
import { ResultsComponent } from './results/components/results.component';
import { AboutComponent } from './about/components/about.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'registro',
        component: RegisterComponent
      },
      {
        path: 'resultados',
        component: ResultsComponent
      },
      {
        path: 'acercade',
        component: AboutComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizacionRoutingModule { }
