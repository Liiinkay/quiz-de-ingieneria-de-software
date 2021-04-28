import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './components/principal/principal.component';
import {MatButtonModule} from '@angular/material/button';
import { CambiarClimaComponent } from './components/cambiar-clima/cambiar-clima.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent,
    CambiarClimaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
