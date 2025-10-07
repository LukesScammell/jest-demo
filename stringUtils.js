function capitalise(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = capitalise;

// stringUtils.test.js
const capitalise = require('./stringUtils');

describe('capitalise()', () => {
  test('capitalises the first letter', () => {
    expect(capitalise('hello')).toBe('Hello');
  });

  test('returns empty string when input is empty', () => {
    expect(capitalise('')).toBe('');
  });

  test('leaves already capitalised string unchanged', () => {
    expect(capitalise('Hello')).toBe('Hello');
  });
});