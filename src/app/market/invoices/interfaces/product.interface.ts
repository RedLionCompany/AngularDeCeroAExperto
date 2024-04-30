import { Unit } from "./unit.interface";

export interface Product {
    id: number;
    name: string;
    code: string;
    photo: string;
    description: string;
    unit_catalogo: Unit;
    weight: number;
    price: number;
  }