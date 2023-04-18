import { Component, OnInit } from '@angular/core';
import { EstadoCivil } from '../_modelo/EstadoCivil';
import { numeroAcotado } from '../_modelo/NumeroAcotado';


@Component({
  selector: 'app-fundamentosts',
  templateUrl: './fundamentosts.component.html',
  styleUrls: ['./fundamentosts.component.css']
})
export class FundamentostsComponent implements OnInit{
  numero:number=0;
  miArray: number[] = [1, 2, 3, 4, 5];
  selectedEC : EstadoCivil = EstadoCivil.Soltero;
  nAcotado : numeroAcotado = 1;
  opciones: string[] = Object.values(EstadoCivil);
  


  ngOnInit(): void {
    this.ejemploArrays();
    this.ejemploUnionTiposLiterales();
  }
  ejemploUnionTiposLiterales() {
    this.nAcotado = 1;
    console.log(`Numero acotado`)
  }

  ejemploArrays():void{
    let miArrayLocal: number[] = [1, 2, 3, 4, 5];
    console.log(`Mostrar el array ${miArrayLocal}`);
  }
  anadir():void{
    this.miArray.push(this.numero);
    console.log(`Valor del array ${this.miArray}`)

  }
  otrasFunciones():void{
    //indice inicial y numero de elementos a eliminar
    console.log(`Elementos del array ${this.miArray}`)
    this.miArray.splice(0,2);
    console.log(`Elementos restantes del array ${this.miArray}`)
    //cambiar el valor de un elemento
    this.miArray[0] = 7;
    console.log(`Despues de cambiar valor ${this.miArray}`)
    //Para aplicar una función a cada elemento
    this.miArray = this.miArray.map(num => num*3);
    console.log(`Despues de aplicar una función ${this.miArray}`)
    
    
  }

  mostrarValorSeleccionado():void{
    console.log(`Elemento seleccionado ${this.selectedEC}`)
  }


}
