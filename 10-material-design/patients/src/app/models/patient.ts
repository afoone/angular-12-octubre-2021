export interface Patient {
  name: string;
  sex?: string;
  age?: number;
  hourlyRate?: number;
  diagnostics: Array<string>;
  birthDate?: Date;
  id?: number;
}
