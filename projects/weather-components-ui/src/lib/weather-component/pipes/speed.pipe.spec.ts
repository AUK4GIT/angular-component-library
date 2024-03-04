import { SpeedPipe } from './speed.pipe';

describe('SpeedPipe', () => {
  let pipe: SpeedPipe;

  beforeEach(() => {
    pipe = new SpeedPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should append Km/h to a number', () => {
    expect(pipe.transform(23)).toBe('23Km/h');
  });

  it('should handle zero', () => {
    expect(pipe.transform(0)).toBe('0Km/h');
  });

  it('should return just Km/h when value is undefined', () => {
    expect(pipe.transform(undefined)).toBe('Km/h');
  });
});
