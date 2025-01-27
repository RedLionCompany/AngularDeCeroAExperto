import { Unit } from "./unit.interface";

export interface Product {
    id: number;
    code: string;
    name: string;
    description: string;
    photo: string;
    unit_catalogo: Unit;
    reorderLevel: number;
    dimensions: string;
    weight: number;
    price: number;
  }