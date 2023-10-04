const capitalize = require('./functions/capitalize.js');
const reverse = require('./functions/reverse.js');

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
