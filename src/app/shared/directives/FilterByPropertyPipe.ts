import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProps'
})
export class FilterByPropertyPipe implements PipeTransform {

  transform(items: any[], searchText: any, fieldName: string): any[] {
    // return empty array if array is falsy
    if (!items) { return []; }

    // return the original array if search text is empty
    if (!searchText) { return items; }

    // convert the searchText to lower case
    //searchText = searchText.toLowerCase();

    // retrun the filtered array
    return items.filter(item => {
      if (item && item[fieldName]) {
        return item[fieldName]==searchText;
      }
      return false;
    });
   }
}
