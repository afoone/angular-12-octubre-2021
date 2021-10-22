export class Patient {
  constructor(
    // public id: number | undefined,
    public name: string,
    public sex: string | undefined,
    public age: number | undefined,
    public hourlyRate: number | undefined,
    // public birthDate: Date | undefined,
    public diagnostics: Array<string>
  ) {}
}
