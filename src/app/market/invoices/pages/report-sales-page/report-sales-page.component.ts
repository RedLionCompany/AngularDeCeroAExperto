import { Component } from '@angular/core';
import { Sale } from '../../interfaces/sale.interface';

@Component({
  selector: 'app-report-sales-page',
  templateUrl: './report-sales-page.component.html',
  styleUrl: './report-sales-page.component.css'
})
export class ReportSalesPageComponent {



// Método para manejar el evento del hijo
updateSales(newSales: Sale[]): void {
  this.salesList = newSales;
  console.log('Ventas actualizadas desde el hijo:', this.salesList);
}



  salesList: Sale[] = []
    /*{
        "id": 1,
        "number": "369",
        "saleDateTime": new Date(),
        "customer": {
            "id": 1,
            "name": "Aroldo",
            "lastName": "Miliani",
            "document": "10201212",
            "address": "10",
            "establishment": "RapiMercar",
            "tipo_documento_catalogo_id": {
                "id": 8,
                "code": "CC",
                "description": "Cédula",
                "type": {
                    "id": 7,
                    "code": "tipo_documento",
                    "description": "Tipo de Documento",
                    "type": null
                }
            },
            "phone": "1212121212",
            "photo": "",
            code: ""
            
        },
        "totalAmount": 60000.00,
        "listSalesDetails": [
            {
                "id": 1,
                "product": {
                    "id": 1,
                    "code": "rubi",
                    "name": "Papa Rubi",
                    "description": "Papa Rubi",
                    "photo": "https://http2.mlstatic.com/D_NQ_NP_2X_887502-MLM72004916017_092023-F.webp",
                    "unit_catalogo": {
                        "id": 4,
                        "code": "bulto",
                        "description": "Bulto"                   
                    },
                    "reorderLevel": 100.0,
                    "dimensions": "20X80",
                    "weight": 50.00,
                    "price": 60000.00
                },
                "quantity": 1.000,
                "pricePerUnit": 60000.00,
                "totalPrice": 60000.00
            },
            {
              "id": 1,
              "product": {
                  "id": 1,
                  "code": "rubi",
                  "name": "Papa Rubi",
                  "description": "Papa Rubi",
                  "photo": "https://http2.mlstatic.com/D_NQ_NP_2X_887502-MLM72004916017_092023-F.webp",
                  "unit_catalogo": {
                      "id": 4,
                      "code": "bulto",
                      "description": "Bulto"                   
                  },
                  "reorderLevel": 100.0,
                  "dimensions": "20X80",
                  "weight": 50.00,
                  "price": 60000.00
              },
              "quantity": 1.000,
              "pricePerUnit": 60000.00,
              "totalPrice": 60000.00
          },
          {
              "id": 1,
              "product": {
                  "id": 1,
                  "code": "rubi",
                  "name": "Papa Rubi",
                  "description": "Papa Rubi",
                  "photo": "https://http2.mlstatic.com/D_NQ_NP_2X_887502-MLM72004916017_092023-F.webp",
                  "unit_catalogo": {
                      "id": 4,
                      "code": "bulto",
                      "description": "Bulto"                   
                  },
                  "reorderLevel": 100.0,
                  "dimensions": "20X80",
                  "weight": 50.00,
                  "price": 60000.00
              },
              "quantity": 1.000,
              "pricePerUnit": 60000.00,
              "totalPrice": 60000.00
          },
          {
              "id": 1,
              "product": {
                  "id": 1,
                  "code": "rubi",
                  "name": "Papa Rubi",
                  "description": "Papa Rubi",
                  "photo": "https://http2.mlstatic.com/D_NQ_NP_2X_887502-MLM72004916017_092023-F.webp",
                  "unit_catalogo": {
                      "id": 4,
                      "code": "bulto",
                      "description": "Bulto"                   
                  },
                  "reorderLevel": 100.0,
                  "dimensions": "20X80",
                  "weight": 50.00,
                  "price": 60000.00
              },
              "quantity": 1.000,
              "pricePerUnit": 60000.00,
              "totalPrice": 60000.00
          },
          {
              "id": 1,
              "product": {
                  "id": 1,
                  "code": "rubi",
                  "name": "Papa Rubi",
                  "description": "Papa Rubi",
                  "photo": "https://http2.mlstatic.com/D_NQ_NP_2X_887502-MLM72004916017_092023-F.webp",
                  "unit_catalogo": {
                      "id": 4,
                      "code": "bulto",
                      "description": "Bulto"                   
                  },
                  "reorderLevel": 100.0,
                  "dimensions": "20X80",
                  "weight": 50.00,
                  "price": 60000.00
              },
              "quantity": 1.000,
              "pricePerUnit": 60000.00,
              "totalPrice": 60000.00
          },
          {
              "id": 1,
              "product": {
                  "id": 1,
                  "code": "rubi",
                  "name": "Papa Rubi",
                  "description": "Papa Rubi",
                  "photo": "https://http2.mlstatic.com/D_NQ_NP_2X_887502-MLM72004916017_092023-F.webp",
                  "unit_catalogo": {
                      "id": 4,
                      "code": "bulto",
                      "description": "Bulto"                   
                  },
                  "reorderLevel": 100.0,
                  "dimensions": "20X80",
                  "weight": 50.00,
                  "price": 60000.00
              },
              "quantity": 1.000,
              "pricePerUnit": 60000.00,
              "totalPrice": 60000.00
          }
        ]
    },


  {
      "id": 1,
      "number": "369",
      "saleDateTime": new Date(),
      "customer": {
          "id": 1,
          "name": "Aroldo",
          "lastName": "Miliani",
          "document": "10201212",
          "address": "10",
          "establishment": "RapiMercar",
          "tipo_documento_catalogo_id": {
              "id": 8,
              "code": "CC",
              "description": "Cédula",
              "type": {
                  "id": 7,
                  "code": "tipo_documento",
                  "description": "Tipo de Documento",
                  "type": null
              }
          },
          "phone": "1212121212",
          "photo": "",
          code: ""
          
      },
      "totalAmount": 60000.00,
      "listSalesDetails": [
          {
              "id": 1,
              "product": {
                  "id": 1,
                  "code": "rubi",
                  "name": "Papa Rubi",
                  "description": "Papa Rubi",
                  "photo": "https://http2.mlstatic.com/D_NQ_NP_2X_887502-MLM72004916017_092023-F.webp",
                  "unit_catalogo": {
                      "id": 4,
                      "code": "bulto",
                      "description": "Bulto"                   
                  },
                  "reorderLevel": 100.0,
                  "dimensions": "20X80",
                  "weight": 50.00,
                  "price": 60000.00
              },
              "quantity": 1.000,
              "pricePerUnit": 60000.00,
              "totalPrice": 60000.00
          }
      ]
  },
    {
        "id": 1,
        "number": "369",
        "saleDateTime": new Date(),
        "customer": {
            "id": 1,
            "name": "Aroldo",
            "lastName": "Miliani",
            "document": "10201212",
            "address": "10",
            "establishment": "RapiMercar",
            "tipo_documento_catalogo_id": {
                "id": 8,
                "code": "CC",
                "description": "Cédula",
                "type": {
                    "id": 7,
                    "code": "tipo_documento",
                    "description": "Tipo de Documento",
                    "type": null
                }
            },
            "phone": "1212121212",
            "photo": "",
            code: ""
            
        },
        "totalAmount": 60000.00,
        "listSalesDetails": [
            {
                "id": 1,
                "product": {
                    "id": 1,
                    "code": "rubi",
                    "name": "Papa Rubi",
                    "description": "Papa Rubi",
                    "photo": "https://http2.mlstatic.com/D_NQ_NP_2X_887502-MLM72004916017_092023-F.webp",
                    "unit_catalogo": {
                        "id": 4,
                        "code": "bulto",
                        "description": "Bulto"                   
                    },
                    "reorderLevel": 100.0,
                    "dimensions": "20X80",
                    "weight": 50.00,
                    "price": 60000.00
                },
                "quantity": 1.000,
                "pricePerUnit": 60000.00,
                "totalPrice": 60000.00
            }
        ]
    }

  ,
  {
    "id": 1,
    "number": "369",
    "saleDateTime": new Date(),
    "customer": {
        "id": 1,
        "name": "Aroldo",
        "lastName": "Miliani",
        "document": "10201212",
        "address": "10",
        "establishment": "RapiMercar",
        "tipo_documento_catalogo_id": {
            "id": 8,
            "code": "CC",
            "description": "Cédula",
            "type": {
                "id": 7,
                "code": "tipo_documento",
                "description": "Tipo de Documento",
                "type": null
            }
        },
        "phone": "1212121212",
        "photo": "",
        code: ""
        
    },
    "totalAmount": 60000.00,
    "listSalesDetails": [
        {
            "id": 1,
            "product": {
                "id": 1,
                "code": "rubi",
                "name": "Papa Rubi",
                "description": "Papa Rubi",
                "photo": "https://http2.mlstatic.com/D_NQ_NP_2X_887502-MLM72004916017_092023-F.webp",
                "unit_catalogo": {
                    "id": 4,
                    "code": "bulto",
                    "description": "Bulto"                   
                },
                "reorderLevel": 100.0,
                "dimensions": "20X80",
                "weight": 50.00,
                "price": 60000.00
            },
            "quantity": 1.000,
            "pricePerUnit": 60000.00,
            "totalPrice": 60000.00
        }
    ]
},


{
  "id": 1,
  "number": "369",
  "saleDateTime": new Date(),
  "customer": {
      "id": 1,
      "name": "Aroldo",
      "lastName": "Miliani",
      "document": "10201212",
      "address": "10",
      "establishment": "RapiMercar",
      "tipo_documento_catalogo_id": {
          "id": 8,
          "code": "CC",
          "description": "Cédula",
          "type": {
              "id": 7,
              "code": "tipo_documento",
              "description": "Tipo de Documento",
              "type": null
          }
      },
      "phone": "1212121212",
      "photo": "",
      code: ""
      
  },
  "totalAmount": 60000.00,
  "listSalesDetails": [
      {
          "id": 1,
          "product": {
              "id": 1,
              "code": "rubi",
              "name": "Papa Rubi",
              "description": "Papa Rubi",
              "photo": "https://http2.mlstatic.com/D_NQ_NP_2X_887502-MLM72004916017_092023-F.webp",
              "unit_catalogo": {
                  "id": 4,
                  "code": "bulto",
                  "description": "Bulto"                   
              },
              "reorderLevel": 100.0,
              "dimensions": "20X80",
              "weight": 50.00,
              "price": 60000.00
          },
          "quantity": 1.000,
          "pricePerUnit": 60000.00,
          "totalPrice": 60000.00
      }
  ]
},
{
    "id": 1,
    "number": "369",
    "saleDateTime": new Date(),
    "customer": {
        "id": 1,
        "name": "Aroldo",
        "lastName": "Miliani",
        "document": "10201212",
        "address": "10",
        "establishment": "RapiMercar",
        "tipo_documento_catalogo_id": {
            "id": 8,
            "code": "CC",
            "description": "Cédula",
            "type": {
                "id": 7,
                "code": "tipo_documento",
                "description": "Tipo de Documento",
                "type": null
            }
        },
        "phone": "1212121212",
        "photo": "",
        code: ""
        
    },
    "totalAmount": 60000.00,
    "listSalesDetails": [
        {
            "id": 1,
            "product": {
                "id": 1,
                "code": "rubi",
                "name": "Papa Rubi",
                "description": "Papa Rubi",
                "photo": "https://http2.mlstatic.com/D_NQ_NP_2X_887502-MLM72004916017_092023-F.webp",
                "unit_catalogo": {
                    "id": 4,
                    "code": "bulto",
                    "description": "Bulto"                   
                },
                "reorderLevel": 100.0,
                "dimensions": "20X80",
                "weight": 50.00,
                "price": 60000.00
            },
            "quantity": 1.000,
            "pricePerUnit": 60000.00,
            "totalPrice": 60000.00
        }
    ]
},
{
  "id": 1,
  "number": "369",
  "saleDateTime": new Date(),
  "customer": {
      "id": 1,
      "name": "Aroldo",
      "lastName": "Miliani",
      "document": "10201212",
      "address": "10",
      "establishment": "RapiMercar",
      "tipo_documento_catalogo_id": {
          "id": 8,
          "code": "CC",
          "description": "Cédula",
          "type": {
              "id": 7,
              "code": "tipo_documento",
              "description": "Tipo de Documento",
              "type": null
          }
      },
      "phone": "1212121212",
      "photo": "",
      code: ""
      
  },
  "totalAmount": 60000.00,
  "listSalesDetails": [
      {
          "id": 1,
          "product": {
              "id": 1,
              "code": "rubi",
              "name": "Papa Rubi",
              "description": "Papa Rubi",
              "photo": "https://http2.mlstatic.com/D_NQ_NP_2X_887502-MLM72004916017_092023-F.webp",
              "unit_catalogo": {
                  "id": 4,
                  "code": "bulto",
                  "description": "Bulto"                   
              },
              "reorderLevel": 100.0,
              "dimensions": "20X80",
              "weight": 50.00,
              "price": 60000.00
          },
          "quantity": 1.000,
          "pricePerUnit": 60000.00,
          "totalPrice": 60000.00
      }
  ]
},


{
"id": 1,
"number": "369",
"saleDateTime": new Date(),
"customer": {
    "id": 1,
    "name": "Aroldo",
    "lastName": "Miliani",
    "document": "10201212",
    "address": "10",
    "establishment": "RapiMercar",
    "tipo_documento_catalogo_id": {
        "id": 8,
        "code": "CC",
        "description": "Cédula",
        "type": {
            "id": 7,
            "code": "tipo_documento",
            "description": "Tipo de Documento",
            "type": null
        }
    },
    "phone": "1212121212",
    "photo": "",
    code: ""
    
},
"totalAmount": 60000.00,
"listSalesDetails": [
    {
        "id": 1,
        "product": {
            "id": 1,
            "code": "rubi",
            "name": "Papa Rubi",
            "description": "Papa Rubi",
            "photo": "https://http2.mlstatic.com/D_NQ_NP_2X_887502-MLM72004916017_092023-F.webp",
            "unit_catalogo": {
                "id": 4,
                "code": "bulto",
                "description": "Bulto"                   
            },
            "reorderLevel": 100.0,
            "dimensions": "20X80",
            "weight": 50.00,
            "price": 60000.00
        },
        "quantity": 1.000,
        "pricePerUnit": 60000.00,
        "totalPrice": 60000.00
    }
]
},
{
  "id": 1,
  "number": "369",
  "saleDateTime": new Date(),
  "customer": {
      "id": 1,
      "name": "Aroldo",
      "lastName": "Miliani",
      "document": "10201212",
      "address": "10",
      "establishment": "RapiMercar",
      "tipo_documento_catalogo_id": {
          "id": 8,
          "code": "CC",
          "description": "Cédula",
          "type": {
              "id": 7,
              "code": "tipo_documento",
              "description": "Tipo de Documento",
              "type": null
          }
      },
      "phone": "1212121212",
      "photo": "",
      code: ""
      
  },
  "totalAmount": 60000.00,
  "listSalesDetails": [
      {
          "id": 1,
          "product": {
              "id": 1,
              "code": "rubi",
              "name": "Papa Rubi",
              "description": "Papa Rubi",
              "photo": "https://http2.mlstatic.com/D_NQ_NP_2X_887502-MLM72004916017_092023-F.webp",
              "unit_catalogo": {
                  "id": 4,
                  "code": "bulto",
                  "description": "Bulto"                   
              },
              "reorderLevel": 100.0,
              "dimensions": "20X80",
              "weight": 50.00,
              "price": 60000.00
          },
          "quantity": 1.000,
          "pricePerUnit": 60000.00,
          "totalPrice": 60000.00
      }
  ]
},

{
"id": 1,
"number": "369",
"saleDateTime": new Date(),
"customer": {
    "id": 1,
    "name": "Aroldo",
    "lastName": "Miliani",
    "document": "10201212",
    "address": "10",
    "establishment": "RapiMercar",
    "tipo_documento_catalogo_id": {
        "id": 8,
        "code": "CC",
        "description": "Cédula",
        "type": {
            "id": 7,
            "code": "tipo_documento",
            "description": "Tipo de Documento",
            "type": null
        }
    },
    "phone": "1212121212",
    "photo": "",
    code: ""
    
},
"totalAmount": 60000.00,
"listSalesDetails": [
    {
        "id": 1,
        "product": {
            "id": 1,
            "code": "rubi",
            "name": "Papa Rubi",
            "description": "Papa Rubi",
            "photo": "https://http2.mlstatic.com/D_NQ_NP_2X_887502-MLM72004916017_092023-F.webp",
            "unit_catalogo": {
                "id": 4,
                "code": "bulto",
                "description": "Bulto"                   
            },
            "reorderLevel": 100.0,
            "dimensions": "20X80",
            "weight": 50.00,
            "price": 60000.00
        },
        "quantity": 1.000,
        "pricePerUnit": 60000.00,
        "totalPrice": 60000.00
    }
]
},

{
"id": 1,
"number": "369",
"saleDateTime": new Date(),
"customer": {
    "id": 1,
    "name": "Aroldo",
    "lastName": "Miliani",
    "document": "10201212",
    "address": "10",
    "establishment": "RapiMercar",
    "tipo_documento_catalogo_id": {
        "id": 8,
        "code": "CC",
        "description": "Cédula",
        "type": {
            "id": 7,
            "code": "tipo_documento",
            "description": "Tipo de Documento",
            "type": null
        }
    },
    "phone": "1212121212",
    "photo": "",
    code: ""
    
},
"totalAmount": 60000.00,
"listSalesDetails": [
    {
        "id": 1,
        "product": {
            "id": 1,
            "code": "rubi",
            "name": "Papa Rubi",
            "description": "Papa Rubi",
            "photo": "https://http2.mlstatic.com/D_NQ_NP_2X_887502-MLM72004916017_092023-F.webp",
            "unit_catalogo": {
                "id": 4,
                "code": "bulto",
                "description": "Bulto"                   
            },
            "reorderLevel": 100.0,
            "dimensions": "20X80",
            "weight": 50.00,
            "price": 60000.00
        },
        "quantity": 1.000,
        "pricePerUnit": 60000.00,
        "totalPrice": 60000.00
    }
]
},


{
"id": 1,
"number": "369",
"saleDateTime": new Date(),
"customer": {
  "id": 1,
  "name": "Aroldo",
  "lastName": "Miliani",
  "document": "10201212",
  "address": "10",
  "establishment": "RapiMercar",
  "tipo_documento_catalogo_id": {
      "id": 8,
      "code": "CC",
      "description": "Cédula",
      "type": {
          "id": 7,
          "code": "tipo_documento",
          "description": "Tipo de Documento",
          "type": null
      }
  },
  "phone": "1212121212",
  "photo": "",
  code: ""
  
},
"totalAmount": 60000.00,
"listSalesDetails": [
  {
      "id": 1,
      "product": {
          "id": 1,
          "code": "rubi",
          "name": "Papa Rubi",
          "description": "Papa Rubi",
          "photo": "https://http2.mlstatic.com/D_NQ_NP_2X_887502-MLM72004916017_092023-F.webp",
          "unit_catalogo": {
              "id": 4,
              "code": "bulto",
              "description": "Bulto"                   
          },
          "reorderLevel": 100.0,
          "dimensions": "20X80",
          "weight": 50.00,
          "price": 60000.00
      },
      "quantity": 1.000,
      "pricePerUnit": 60000.00,
      "totalPrice": 60000.00
  }
]
},
{
"id": 1,
"number": "369",
"saleDateTime": new Date(),
"customer": {
    "id": 1,
    "name": "Aroldo",
    "lastName": "Miliani",
    "document": "10201212",
    "address": "10",
    "establishment": "RapiMercar",
    "tipo_documento_catalogo_id": {
        "id": 8,
        "code": "CC",
        "description": "Cédula",
        "type": {
            "id": 7,
            "code": "tipo_documento",
            "description": "Tipo de Documento",
            "type": null
        }
    },
    "phone": "1212121212",
    "photo": "",
    code: ""
    
},
"totalAmount": 60000.00,
"listSalesDetails": [
    {
        "id": 1,
        "product": {
            "id": 1,
            "code": "rubi",
            "name": "Papa Rubi",
            "description": "Papa Rubi",
            "photo": "https://http2.mlstatic.com/D_NQ_NP_2X_887502-MLM72004916017_092023-F.webp",
            "unit_catalogo": {
                "id": 4,
                "code": "bulto",
                "description": "Bulto"                   
            },
            "reorderLevel": 100.0,
            "dimensions": "20X80",
            "weight": 50.00,
            "price": 60000.00
        },
        "quantity": 1.000,
        "pricePerUnit": 60000.00,
        "totalPrice": 60000.00
    }
]
},
{
"id": 1,
"number": "369",
"saleDateTime": new Date(),
"customer": {
    "id": 1,
    "name": "Aroldo",
    "lastName": "Miliani",
    "document": "10201212",
    "address": "10",
    "establishment": "RapiMercar",
    "tipo_documento_catalogo_id": {
        "id": 8,
        "code": "CC",
        "description": "Cédula",
        "type": {
            "id": 7,
            "code": "tipo_documento",
            "description": "Tipo de Documento",
            "type": null
        }
    },
    "phone": "1212121212",
    "photo": "",
    code: ""
    
},
"totalAmount": 60000.00,
"listSalesDetails": [
    {
        "id": 1,
        "product": {
            "id": 1,
            "code": "rubi",
            "name": "Papa Rubi",
            "description": "Papa Rubi",
            "photo": "https://http2.mlstatic.com/D_NQ_NP_2X_887502-MLM72004916017_092023-F.webp",
            "unit_catalogo": {
                "id": 4,
                "code": "bulto",
                "description": "Bulto"                   
            },
            "reorderLevel": 100.0,
            "dimensions": "20X80",
            "weight": 50.00,
            "price": 60000.00
        },
        "quantity": 1.000,
        "pricePerUnit": 60000.00,
        "totalPrice": 60000.00
    }
]
},


{
"id": 1,
"number": "369",
"saleDateTime": new Date(),
"customer": {
  "id": 1,
  "name": "Aroldo",
  "lastName": "Miliani",
  "document": "10201212",
  "address": "10",
  "establishment": "RapiMercar",
  "tipo_documento_catalogo_id": {
      "id": 8,
      "code": "CC",
      "description": "Cédula",
      "type": {
          "id": 7,
          "code": "tipo_documento",
          "description": "Tipo de Documento",
          "type": null
      }
  },
  "phone": "1212121212",
  "photo": "",
  code: ""
  
},
"totalAmount": 60000.00,
"listSalesDetails": [
  {
      "id": 1,
      "product": {
          "id": 1,
          "code": "rubi",
          "name": "Papa Rubi",
          "description": "Papa Rubi",
          "photo": "https://http2.mlstatic.com/D_NQ_NP_2X_887502-MLM72004916017_092023-F.webp",
          "unit_catalogo": {
              "id": 4,
              "code": "bulto",
              "description": "Bulto"                   
          },
          "reorderLevel": 100.0,
          "dimensions": "20X80",
          "weight": 50.00,
          "price": 60000.00
      },
      "quantity": 1.000,
      "pricePerUnit": 60000.00,
      "totalPrice": 60000.00
  }
]
},
{
"id": 1,
"number": "369",
"saleDateTime": new Date(),
"customer": {
    "id": 1,
    "name": "Aroldo",
    "lastName": "Miliani",
    "document": "10201212",
    "address": "10",
    "establishment": "RapiMercar",
    "tipo_documento_catalogo_id": {
        "id": 8,
        "code": "CC",
        "description": "Cédula",
        "type": {
            "id": 7,
            "code": "tipo_documento",
            "description": "Tipo de Documento",
            "type": null
        }
    },
    "phone": "1212121212",
    "photo": "",
    code: ""
    
},
"totalAmount": 60000.00,
"listSalesDetails": [
    {
        "id": 1,
        "product": {
            "id": 1,
            "code": "rubi",
            "name": "Papa Rubi",
            "description": "Papa Rubi",
            "photo": "https://http2.mlstatic.com/D_NQ_NP_2X_887502-MLM72004916017_092023-F.webp",
            "unit_catalogo": {
                "id": 4,
                "code": "bulto",
                "description": "Bulto"                   
            },
            "reorderLevel": 100.0,
            "dimensions": "20X80",
            "weight": 50.00,
            "price": 60000.00
        },
        "quantity": 1.000,
        "pricePerUnit": 60000.00,
        "totalPrice": 60000.00
    }
  ]
}
  ]
  */




}
