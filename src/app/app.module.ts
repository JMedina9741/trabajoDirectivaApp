import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServiciosEmpleadosService } from './servicios-empleados.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, CommonModule
  ],
  providers: [ServiciosEmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
