// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");
let numeros = input.trim().split(" ").map(Number);

// Seu código vai aqui
let potencia = numeros[0] ** numeros[1]
console.log(potencia.toFixed(4));