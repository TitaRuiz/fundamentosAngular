import { Component, Input } from '@angular/core';
import { Medico } from '../_modelo/Medico';

@Component({
  selector: 'app-hijo-medico',
  templateUrl: './hijo-medico.component.html',
  styleUrls: ['./hijo-medico.component.css']
})
export class HijoMedicoComponent {
  @Input() hMedico:Medico;
  medicos : Medico[] = [];
  tieneElementos :boolean=this.medicos.length>0;

  

  actualizarLista():void{  
    this.medicos.push(new Medico(this.hMedico.nombre, this.hMedico.apellido, this.hMedico.cedula, this.hMedico.foto));
    this.tieneElementos=this.medicos.length>0; 
  }
  

}
