export class Paciente{
    nombre:string;
    apellido:string;
    dni:string;
    telefono:string;
    direccion:string;
    email:string;

    constructor(nombre="",apellido="",dni="",telefono="",direccion="",email=""){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.telefono = telefono;
        this.direccion = direccion;
        this.email = email;       
    }

    
}