// Lendo a entrada do exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let A = parseInt(input.split("\n")[0])
let M = parseInt(input.split("\n")[1])

let soma = A + M;
// Seu código vai aqui
if (soma <= 50) {
    console.log("S");
} else {
    console.log("N");
}