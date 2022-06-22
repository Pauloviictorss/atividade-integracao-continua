const math = require("./math");

describe("Operações aritiméticas", () => {
    test("Soma entre dois números: 4 + 2 - deve retornar 6", () => {
        expect(math.soma(4, 2)).toBe(6);
    });
    
    test("Subtração entre dois números: 4 - 2 - deve retornar 2", () => {
        expect(math.subtracao(4, 2)).toBe(2);
    });
    test("Multiplicação entre dois números: 4 * 2 - deve retornar 8", () => {
        expect(math.multiplicacao(4, 2)).toBe(8);
    });
    test("Divisão entre dois números: 4 / 2 - deve retornar 2", () => {
        expect(math.divisao(4, 2)).toBe(2);
    });
});