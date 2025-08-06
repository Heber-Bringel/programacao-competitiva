// Lendo a entrada do exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let A = parseInt(input.split("\n")[0])
let B = parseInt(input.split("\n")[1])

// Seu código vai aqui
let media = Math.trunc((A + B) / 2);
console.log(media);