const capitalize = require('./functions/capitalize.js');
const reverse = require('./functions/reverse.js');
const calculator = require('./functions/calculator.js');
const caesar = require('./functions/caesar.js');

describe('capitalize function', () => {
  test('Works with normal string', () => {
    expect(capitalize('ram')).toBe('Ram');
  });
  test('Works with empty string', () => {
    expect(capitalize('')).toBe('');
  });
});

describe('reverse string function', () => {
  test('Reverses Normal string', () => {
    expect(reverse('ramsita')).toBe('atismar');
    expect(reverse('123')).toBe('321');
  });
  test('Reverses Empty string', () => {
    expect(reverse('')).toBe('');
  });
});

describe('calculator object', () => {
  test('add', () => {
    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.add(2e1, 1e2)).toBe(120);
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });
  test('subtract', () => {
    expect(calculator.subtract(2, 2)).toBe(0);
    expect(calculator.subtract(2e1, 1e2)).toBe(-8e1);
    expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
  });
  describe('divide', () => {
    test('Error on divide by 0', () => {
      expect(() => {
        calculator.divide(1, 0);
      }).toThrow("Can't divide by zero");
    });
    test('Not a Number', () => {
      expect(calculator.divide(Infinity, Infinity)).toBe(NaN);
    });
    test('Other type of division', () => {
      expect(calculator.divide(12, 4.5)).toBeCloseTo(12 / 4.5);
    });
  });
  test('multiply', () => {
    expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02);
  });
});

describe('caesar cipher function', () => {
  test('Normal ciphering', () => {
    expect(caesar('ram', 3)).toBe('udp');
  });
  test('wrapping after z', () => {
    expect(caesar('yza', 10)).toBe('ijk');
  });
  test('keeping the same Case', () => {
    expect(caesar('AbCdEf', 300)).toBe('OpQrSt');
  });
  test('Puncutations remain same', () => {
    expect(caesar('King: Hey, you defend the east wall !!!', 300)).toBe(
      'Ywbu: Vsm, mci rstsbr hvs sogh kozz !!!'
    );
  });
});
