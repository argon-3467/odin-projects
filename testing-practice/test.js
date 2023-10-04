const capitalize = require('./functions/capitalize.js');

describe('capitalize function', () => {
  test('Works with normal string', () => {
    expect(capitalize('ram')).toBe('Ram');
  });
  test('Works with empty string', () => {
    expect(capitalize('')).toBe('');
  });
});
