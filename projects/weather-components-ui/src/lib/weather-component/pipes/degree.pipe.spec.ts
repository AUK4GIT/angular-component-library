import { DegreePipe } from './degree.pipe';

describe('DegreePipe', () => {
  let pipe: DegreePipe;

  beforeAll(() => {
    pipe = new DegreePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should append ºC to a number', () => {
    expect(pipe.transform(23)).toBe('23ºC');
  });

  it('should handle zero', () => {
    expect(pipe.transform(0)).toBe('0ºC');
  });

  it('should return just ºC when value is undefined', () => {
    expect(pipe.transform(undefined)).toBe('ºC');
  });
});
