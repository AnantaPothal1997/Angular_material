import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    const a = args[0];
    const b = args[1];
    return a+b;
  }

}
