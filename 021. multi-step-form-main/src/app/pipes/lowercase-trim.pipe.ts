import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowercaseTrim',
  standalone: true
})
export class LowercaseTrimPipe implements PipeTransform {

  transform(value: string): string {
    return value.toLocaleLowerCase().slice(0, -2);
  }
}
