//  Incluindo o módulo fs para trabalhar com os arqivos do computador.
const fs = require('fs');

//  Criando
const criar = (nomeDoArquivo) => {
    fs.writeFile(`${nomeDoArquivo}.txt`, 'CRIAÇÃO: OK !!', err => {
    if (err) return err;
        console.log("CRIADO COM SUCESSO!!");
    });
};

//  Lendo e Atualizando
const ler = (nomeDoArquivo) => {
    fs.readFile(`${nomeDoArquivo}.txt`, err => {
    if (err) return err;
        console.log("LIDO COM SUCESSO!!");
    });
};

const atualizar = (nomeDoArquivo) => {
    fs.appendFile(`${nomeDoArquivo}.txt`, '\n\nLEITURA: OK !!\n\nATUALIZAÇÃO: OK !!', 
    err => {
        err ? err : console.log("ATUALIZADO COM SUCESSO!!");
    });
};

//  Renomeando
const renomear = (nomeDoArquivo, novoNome) => {
    fs.rename(`${nomeDoArquivo}.txt`, `${novoNome}.txt`, err => {
        err ? err : console.log("RENOMEADO COM SUCESSO!!");
    });
};

//  Deletando
const deletendo = (nomeDoArquivo) => {
    fs.unlink(`${nomeDoArquivo}.txt`, err => {
        err ? err : console.log("REMOVIDO COM SUCESSO!!");
    });
}

criar('Arquivo');
atualizar('Arquivo');
ler('Arquivo');
renomear('Arquivo', 'NovoNome');
// deletendo('NovoNome');