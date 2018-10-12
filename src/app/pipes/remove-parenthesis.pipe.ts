import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeParenthesis'
})
export class RemoveParenthesisPipe implements PipeTransform {

  transform(value: string): string {
    value = value.replace(/\(.*\)/, '');
    return value;
  }

}
