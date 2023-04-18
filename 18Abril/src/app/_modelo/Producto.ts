import { TipoProductos } from "./TipoProducto";

export class Producto {
    idProducto: number = 0;
    nombreProducto: string = '';
    cantidadExistencia: number = 0;
    precio: number = 0;
    tipoProducto: TipoProductos = TipoProductos.Bebida

    constructor(idProducto = 0, nombreProducto = "", cantidadExistencia = 0, precio = 0, tipoProducto = TipoProductos.Bebida) {
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.cantidadExistencia = cantidadExistencia;
        this.precio = precio;
        this.tipoProducto = tipoProducto;
    }

    mostrarInfo(): string {
        return `id ${this.idProducto} nombre ${this.nombreProducto} cantidad en Existencia ${this.cantidadExistencia} 
            precio ${this.precio} tipo de producto ${this.tipoProducto}`
    }
}