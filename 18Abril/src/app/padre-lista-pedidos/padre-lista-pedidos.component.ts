import { Component } from '@angular/core';
import { Pedido } from '../_modelo/Pedido';

@Component({
  selector: 'app-padre-lista-pedidos',
  templateUrl: './padre-lista-pedidos.component.html',
  styleUrls: ['./padre-lista-pedidos.component.css']
})
export class PadreListaPedidosComponent {
  pedidos:Pedido[] = [];
  tieneElementos:boolean = false;
  muestraDatos(pedidos:Pedido[]):void {
    this.pedidos=pedidos;
    this.tieneElementos=pedidos.length>0;
  }

}
