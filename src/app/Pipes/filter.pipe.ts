import { Pipe, PipeTransform } from '@angular/core';
import { productType } from '../Interface/productType';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: string): any {
    if(searchTerm === undefined){
      return value;
    }
      return value.filter((search:productType) => {
        return search.Name.toLowerCase().indexOf(searchTerm?.toLowerCase()) > -1
      })
    
  
  }

}
