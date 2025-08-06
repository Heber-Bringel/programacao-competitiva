// Lendo a entrada do exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let A = parseFloat(input.split(" ")[0])
let B = parseFloat(input.split(" ")[1])

// Seu código vai aqui
let media = (A + B) / 2;

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 4 && media < 7) {
    console.log("Recuperacao");
} else {
    console.log("Reprovado");
}