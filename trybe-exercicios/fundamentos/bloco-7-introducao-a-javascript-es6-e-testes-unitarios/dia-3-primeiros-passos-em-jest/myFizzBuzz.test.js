const myFizzBuzz = require('./myFizzBuzz.js');

describe('num divisivél por 3 e 5 retorna fizzbuzz', () => {
  it('num divisivél por 3 e 5 retorna fizzbuzz',() => {
    expect(myFizzBuzz(30)).toBe('fizzbuzz');
  });
  it('num divisivél por 3 retorna fizz',() => {
    expect(myFizzBuzz(3)).toBe('fizz');
  })
  it('num divisivél 5 retorna buzz',() => {
    expect(myFizzBuzz(5)).toBe('buzz');
  })
  it('num não divisivél por 3 e 5 retorna false',() => {
    expect(myFizzBuzz(11)).toBe(11);
  })
  it('num não for numero retorna false',() => {
    expect(myFizzBuzz('30')).toBe(false);
  })
});