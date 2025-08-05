// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
let numeros = input.trim().split("\n").map(Number);

let dias = 0;
let soma = 0;

for (let i = 1; i < numeros.length; i++) {
    soma += numeros[i];
    dias++;
    if (soma >= 1000000) {
        break;
    }
}

console.log(dias);