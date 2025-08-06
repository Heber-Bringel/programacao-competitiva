// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");
let numeros = input.trim().split("\n").map(Number);

// Seu código vai aqui
let mediaFinal = ((numeros[0] * 2) + (numeros[1] * 3)) / 5;

if (mediaFinal >= 7) {
    console.log("Aprovado");
} else if (mediaFinal >= 3 && mediaFinal < 7) {
    console.log("Final");
} else {
    console.log("Reprovado");
}