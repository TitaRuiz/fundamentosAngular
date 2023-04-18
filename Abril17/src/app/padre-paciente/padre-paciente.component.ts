import { Component } from '@angular/core';
import { Paciente } from '../_modelo/Paciente';

@Component({
  selector: 'app-padre-paciente',
  templateUrl: './padre-paciente.component.html',
  styleUrls: ['./padre-paciente.component.css']
})
export class PadrePacienteComponent {
  pacientes:Paciente[]=[];
  tieneElementos:boolean=this.pacientes.length>0;

  agregarElemento(p:Paciente){
    this.pacientes.push(new Paciente(p.nombre, p.apellido,p.dni,p.telefono,p.direccion,p.email));
    this.tieneElementos = this.pacientes.length>0;
  }

}
