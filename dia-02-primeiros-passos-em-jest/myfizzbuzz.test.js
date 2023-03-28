const myFizzBuzz = require('./myfizzbuzz.js');

describe('Exercício 2', () => {
    it('Executa a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
});