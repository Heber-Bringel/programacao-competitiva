// A variável input contém a entrada descrita no exercício
    const fs = require("fs");
    const input = fs.readFileSync(0, "utf8");
    const linhas = input.split('\n');
    
    // Seu código vai aqui
    let base = linhas[0].trim().split(' ').map(Number);
    let altura = linhas[1].trim().split(' ').map(Number);
    console.log(base * altura);