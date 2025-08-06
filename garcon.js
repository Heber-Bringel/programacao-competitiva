// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");
const linhas = input.split('\n');
// Seu código vai aqui
const n = parseInt(linhas[0]);
let acumulador = 0;
for (let i = 1; i <= n; i++) {
    const [latas, copos] = linhas[i].trim().split(' ').map(Number);
    if (latas > copos) {
        acumulador = acumulador + copos; 
    }
}
console.log(acumulador);