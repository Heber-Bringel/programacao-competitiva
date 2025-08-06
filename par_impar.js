// Lendo a entrada do exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let B = parseInt(input.split("\n")[0])
let C = parseInt(input.split("\n")[1])

// Seu código vai aqui
let soma = B + C;

if (soma % 2 === 0) {
    console.log("Bino");
} else {
    console.log("Cino");
}