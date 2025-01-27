export interface TipoCatalogo {
    id: number;
    codigo: string;
    descripcion: string;
    tipo_catalogo?: TipoCatalogo;
  }
  
  export interface Vehiculo {
    id: number;
    placa: string;
    nombre: string;
    color: string;
    marca: string;
    tipo_catalogo?: TipoCatalogo;
  }
  
  export interface Viaje {
    id: number;
    fecha: string;
    vehiculos: Vehiculo[];
  }
  
  export interface Customer {
    id: number;
  }
  
  export interface TravelData {
    dateCreate: string;
    number: string;
    viaje: Viaje;
    customer: Customer;
  }
  