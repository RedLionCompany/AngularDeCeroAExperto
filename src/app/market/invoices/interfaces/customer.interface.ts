import { CatalogType } from "./catalog-type.interface";
import { Catalog } from "./catalog.interace";

export interface Customer {
    id?: number;
    name: string;
    lastName: string;
    document:string;
    code: string;
    photo: string;
    establishment: string;
    address: string;
    tipo_documento_catalogo_id:  CatalogType | null;
    phone: string;
  }

  