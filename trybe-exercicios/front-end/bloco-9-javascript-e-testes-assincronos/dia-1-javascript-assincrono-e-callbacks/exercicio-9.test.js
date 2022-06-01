// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercicio-8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedError = new Error('Não temos esse pokémon para você :(');
    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);

    function callback(err, result) {
      expect(err).toEqual(expectedError);
      done();
    }
  });
  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
    
    function callback(err, result) {
      expect(result).toBe(expectedString);
      done();
    }
  });
});
