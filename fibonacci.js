// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");
const numero = parseInt(input);
// Seu código vai aqui
let a = 0;
let b = 1;
let soma = a + b;

for (let i = 1; i < numero; i++) {
    a = b;
    b = soma;
    soma = a + b;
}
console.log(soma);