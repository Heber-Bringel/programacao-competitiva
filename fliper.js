// Lendo a entrada do exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let P = parseInt(input.split(" ")[0])
let R = parseInt(input.split(" ")[1])

// Seu código vai aqui
if (P == 0) {
    console.log("C");
}
if (P == 1 && R == 1) {
    console.log("A");
}
if (P == 1 && R == 0) {
    console.log("B");
}