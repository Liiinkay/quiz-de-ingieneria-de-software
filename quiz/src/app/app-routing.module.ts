import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from '../app/components/principal/principal.component';
import { CambiarClimaComponent } from '../app/components/cambiar-clima/cambiar-clima.component';

const routes: Routes = [
  {path:'',component:PrincipalComponent},
  {path:'cambiar-clima',component:CambiarClimaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
