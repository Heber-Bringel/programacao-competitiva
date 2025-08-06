// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");
const linhas = input.split('\n');

// Pegando os valores das linhas
const numeroDeQuestoes = parseInt(linhas[0]);
const gabaritoDoVestibular = linhas[1].trim().split('');
const gabaritoDoALuno = linhas[2].trim().split('');

let questoesCertas = 0;
// Percorrer as listas e comparar as questões
for (let i = 0; i < numeroDeQuestoes; i++) {
    if (gabaritoDoALuno[i] === gabaritoDoVestibular[i]) {
        questoesCertas++; 
    }
}

console.log(questoesCertas);