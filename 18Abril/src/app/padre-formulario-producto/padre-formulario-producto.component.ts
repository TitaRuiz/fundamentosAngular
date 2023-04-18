import { Component } from '@angular/core';
import { Producto } from '../_modelo/Producto';
import { TipoProductos } from '../_modelo/TipoProducto';

@Component({
  selector: 'app-padre-formulario-producto',
  templateUrl: './padre-formulario-producto.component.html',
  styleUrls: ['./padre-formulario-producto.component.css']
})
export class PadreFormularioProductoComponent {
  p: Producto = new Producto();
  tipos=Object.values(TipoProductos);
  productos:Producto[] =[];
  tieneElementos:boolean = false;


  agregarElemento(): void {
    this.productos.push(new Producto(this.p.idProducto, this.p.nombreProducto, this.p.cantidadExistencia, this.p.precio,this.p.tipoProducto));
    this.tieneElementos=this.productos.length>0;
  }
}
