
  export interface CatalogType {
    id: number;
    code: string;
    description: string;
    type: CatalogType | null; // Esto permite representar el tipo anidado o `null`
  }