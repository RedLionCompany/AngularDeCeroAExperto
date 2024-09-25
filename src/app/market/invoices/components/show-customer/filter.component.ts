import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
  })
  export class Filter implements PipeTransform {
    transform(items: any[], filterText: string, propName: string): any[] {
      if (!items) {
        return [];
      }
      if (!filterText) {
        return items;
      }
      filterText = filterText.toLowerCase();
      return items.filter(item => {
        if (!propName) {
          return item.toLowerCase().includes(filterText);
        } else {
          return item[propName].toLowerCase().includes(filterText);
        }
      });
    }
  }