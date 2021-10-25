import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suma',
})
export class SumaPipe implements PipeTransform {
  transform(value: number | undefined, sumando: number): number | undefined {
    return value && value + sumando;
  }
}
