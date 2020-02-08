import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let address = value.split(" ");
    let arg1 = args[0];
    if(arg1 == 'zipcode') {
      return address[0];
    } else if(arg1 == 'house_number') {
      return address[1];
    } else {
      return value;
    }
  }

}
