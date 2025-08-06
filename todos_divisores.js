// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
let numero = parseInt(input);
let contador = 1;
let listaDeDivisores = [];

while (contador <= numero) {
    if (numero % contador === 0) {
        listaDeDivisores.push(contador);
    }
    contador++;
}
console.log(listaDeDivisores.join(" "));