// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");
let numeros = input.trim().split(/\s+/).map(Number);

// Seu código vai aqui
let a = 0;
let b = 0;

for (let i = 1; i < numeros.length; i++) {
    if (numeros [i] === 1) {
        a = 1 - a;
    } else if (numeros[i] === 2) {
        a = 1 - a;
        b = 1 - b;
    }
}
console.log(a);
console.log(b);