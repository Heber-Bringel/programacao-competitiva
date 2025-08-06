// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
let contador = 1;
const numero = parseInt(input);
while (contador <= numero) {
    console.log("NepsAcademy eh Sucesso");
    contador++;
}