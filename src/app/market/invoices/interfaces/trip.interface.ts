import { Truck } from "./truck.interface";

export interface Trip {
    id: number;
    date_arrive: Date;
    truck: Truck;
    code: string;
    photo: string;
    rol: string; //TODO: una lista de Permisos sobre el menú
  }