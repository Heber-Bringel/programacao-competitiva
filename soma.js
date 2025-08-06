// Lendo a entrada do exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let X = parseInt(input.split("\n")[0])
let Y = parseInt(input.split("\n")[1])

// Seu código vai aqui
console.log(X + Y);