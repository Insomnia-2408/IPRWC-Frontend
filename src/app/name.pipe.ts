import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let names = value.split(" ");
    let arg1 = args[0];
    if(arg1 == 'firstname') {
      return names[0];
    } else if(arg1 == 'lastname') {
      return names[1];
    } else {
      return value;
    }
  }

}
