// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

const linhas = input.split('\n');
const n = parseInt(linhas[0]);
const numeros = linhas[1].trim().split(' ').map(Number);
// Seu código vai aqui
let raizquadrada = 0;
for (let i = 0; i < n; i++) {
    raizquadrada = numeros[i] ** 0.5;
    console.log(raizquadrada.toFixed(4));
}