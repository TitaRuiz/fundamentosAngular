import { Component } from '@angular/core';
import { Medico } from '../_modelo/Medico';

@Component({
  selector: 'app-padre-medico',
  templateUrl: './padre-medico.component.html',
  styleUrls: ['./padre-medico.component.css']
})
export class PadreMedicoComponent {
  medico:Medico = new Medico();

  

}
