import { Component } from '@angular/core';
import { ServiciosEmpleadosService } from './servicios-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today: Date;
  titulo = 'Registro de usuarios';
  mensaje = "";
  registrado = false;
  nombre:string="";
  apellido:string="";
  entradas:Array<{titulo:string}>;
  cargo:string="";

constructor(private miServicio:ServiciosEmpleadosService){
  this.today = new Date();
 
   this.entradas=[
    {titulo:"Mi primera entrada de blog"},
    {titulo:"Mi segunda entrada de blog"},
    {titulo:"Mi tercera entrada de blog"},
    {titulo:"Mi cuarta entrada de blog"}
  ] 
}



// Funcion de registro de usuario

registrarUsuario(){
  
  this.registrado = true;
  this.miServicio.muestraMensaje("He incorporado mi servicio");
  this.mensaje = "Usuario registrado correctamente";
  
}

}
