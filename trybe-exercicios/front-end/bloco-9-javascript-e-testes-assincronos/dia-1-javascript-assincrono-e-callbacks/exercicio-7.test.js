const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

describe('Testes da função uppercase',() => {
  it('uppercase "a" retona "A"', (done) => {
    uppercase('a', (str) => {
      try {
        expect(str).toBe('A');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
