import { Component, EventEmitter, Output } from '@angular/core';
import { Paciente } from '../_modelo/Paciente';

@Component({
  selector: 'app-hijo-paciente',
  templateUrl: './hijo-paciente.component.html',
  styleUrls: ['./hijo-paciente.component.css']
})
export class HijoPacienteComponent {
  paciente:Paciente=new Paciente("","","","","","");
  @Output()
  eventoHijo : EventEmitter<Paciente> = new EventEmitter<Paciente>();
  
  comunicaPadre(){
    this.eventoHijo.emit(this.paciente);
  }

}
