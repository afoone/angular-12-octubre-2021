import { SumaPipe } from './suma.pipe';

describe('SumaPipe', () => {
  let pipe: SumaPipe;

  beforeEach(() => {
    pipe = new SumaPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('suma positivos', () => {
    expect(pipe.transform(5, 6)).toBe(11);
  });

  it('suma negativos', () => {
    expect(pipe.transform(2, -2)).toBe(0);
  });
});
