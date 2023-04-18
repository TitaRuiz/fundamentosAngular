export class Pedido{
    idPedido:number=0;
    idCliente:number=0;
    nombreCliente:string="";
    totalProductos:number=0;
    importe:number=0;

    constructor(idPedido=0, idCliente=0, nombreCliente="", totalProductos=0, importe=0){
        this.idPedido=idPedido;
        this.idCliente=idCliente;
        this.nombreCliente=nombreCliente;
        this.totalProductos=totalProductos;
        this.importe=importe;
    }

}