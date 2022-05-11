const sum = require('./sum');

describe('função soma', () => {
  it('retorna 9 se sum(4,5)', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('retorna 0 se sum(0,0)', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('erro quando parâmetros são 4 e "5"', () => {
    expect(() => {sum()}).toThrow();
  });
  it('retorne a menssagem "parameters must be number" quando parâmetros são 4 e "5"', () => {
    expect(() => {sum()}).toThrow(new Error('parameters must be numbers'));
  });
});
