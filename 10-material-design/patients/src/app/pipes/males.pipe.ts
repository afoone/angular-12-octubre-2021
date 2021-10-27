import { Pipe, PipeTransform } from '@angular/core';
import { Patient } from '../models/patient';

@Pipe({
  name: 'males',
})
export class MalesPipe implements PipeTransform {
  transform(value: Array<Patient>, sex: boolean): Array<Patient> {
    return value.filter((i) => (sex ? i.sex === 'M' : i.sex === 'F'));
  }
}
