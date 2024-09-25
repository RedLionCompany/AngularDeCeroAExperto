import { Catalog } from "./catalog.interace";

export interface Truck {
    id: number;
    plate: string;
    name: string;
    color: string;
    brand: string;
    type: Catalog;
  }