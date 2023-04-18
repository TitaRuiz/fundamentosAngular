import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  mostrarElemento:boolean=true;
  condicion:boolean=false;
  saludos:string[]=["Buenos días","Buenas tardes", "Buenas noches"];
  opcion:string="opcion2";
}
