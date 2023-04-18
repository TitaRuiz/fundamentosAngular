import { Component, Input } from '@angular/core';
import { Producto } from '../_modelo/Producto';

@Component({
  selector: 'app-hijo-lista-productos',
  templateUrl: './hijo-lista-productos.component.html',
  styleUrls: ['./hijo-lista-productos.component.css']
})
export class HijoListaProductosComponent {
  @Input() 
  productosHijo: Producto[] = [];
  @Input()
  tieneElementosH:boolean=false;

}
