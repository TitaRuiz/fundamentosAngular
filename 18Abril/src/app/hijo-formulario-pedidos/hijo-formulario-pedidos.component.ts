import { Component, EventEmitter, Output } from '@angular/core';
import { Pedido } from '../_modelo/Pedido';

@Component({
  selector: 'app-hijo-formulario-pedidos',
  templateUrl: './hijo-formulario-pedidos.component.html',
  styleUrls: ['./hijo-formulario-pedidos.component.css']
})
export class HijoFormularioPedidosComponent {
  p: Pedido = new Pedido();
  pedidosHijo: Pedido[] = [];
  tieneElementos: boolean = false;
  @Output()
  eventoHijo : EventEmitter<Pedido[]> = new EventEmitter<Pedido[]>();

  insertarElemento(): void {
    this.pedidosHijo.push(
      new Pedido(this.p.idPedido, this.p.idCliente, this.p.nombreCliente, this.p.totalProductos, this.p.importe));
      this.eventoHijo.emit(this.pedidosHijo);
  }
}
