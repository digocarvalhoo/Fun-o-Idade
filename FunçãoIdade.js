

let nome = 'Diogo'
let idade = 23

function escreverNome(nome) {
    console.log('O meu nome é: ' + nome);
}

function verificarIdade(idade) {
    if (idade < 18) {
        return 'menor de idade';
    } else {
        return 'maior de idade';
    }
}

function nomeComIdade(nome, idade) {
    let idadeMensagem = verificarIdade(idade)
    console.log('O nome é ' + nome + ' e ele é ' + idadeMensagem + ' com a idade de: ' + idade + ' anos!');
}

nomeComIdade(nome, idade);
