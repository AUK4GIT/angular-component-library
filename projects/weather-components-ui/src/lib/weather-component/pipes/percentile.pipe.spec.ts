import { PercentilePipe } from './percentile.pipe';

describe('PercentilePipe', () => {
  let pipe: PercentilePipe;
  beforeEach(() => {
    pipe = new PercentilePipe();
  });
  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should append % to a number', () => {
    expect(pipe.transform(23)).toBe('23%');
  });

  it('should handle zero', () => {
    expect(pipe.transform(0)).toBe('0%');
  });

  it('should return just % when value is undefined', () => {
    expect(pipe.transform(undefined)).toBe('%');
  });
});
