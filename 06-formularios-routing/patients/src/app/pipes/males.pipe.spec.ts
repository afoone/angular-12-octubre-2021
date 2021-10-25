import { Patient } from '../models/patient';
import { MalesPipe } from './males.pipe';

describe('MalesPipe', () => {
  const pipe = new MalesPipe();

  const mispruebas: Array<Patient> = [
    {
      name: 'Joe Smith',
      sex: 'M',
      age: 54,
      hourlyRate: 40,
      diagnostics: ['malaria'],
    },
    {
      name: 'Susan Smith',
      sex: 'F',
      age: 54,
      hourlyRate: 45,
      diagnostics: ['covid19', 'malaria'],
    },
    {
      name: 'Babou Ceesay',
      sex: 'M',
      age: 27,
      hourlyRate: 20,
      diagnostics: ['malaria'],
    },
    {
      name: 'niña',
      sex: 'F',
      age: 10,
      hourlyRate: 20,
      diagnostics: ['malaria'],
    },
    {
      name: 'niño',
      sex: 'M',
      age: 12,
      hourlyRate: 20,
      diagnostics: ['malaria'],
    },
  ];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filters males', () => {
    expect(pipe.transform(mispruebas, true).length).toBe(3);
  });

  it('filters females', () => {
    expect(pipe.transform(mispruebas, false).length).toBe(2);
  });
});
