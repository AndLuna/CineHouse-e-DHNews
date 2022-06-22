// callback é uma função que se passa como parametro para outra função
//------------------------------------------------------------------------------------



// const somar = (numeroA, numeroB) => numeroA + numeroB;
// const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

// console.log(calculadora(10, 20, somar))
//------------------------------------------------------------------------------------

// function nomeCompleto (nome, sobrenome){
//     return nome + " " + sobrenome
// }
// function saudar (nome, sobrenome, callback){
//     return "Olá " + callback(nome, sobrenome)+ "!";
// };
// console.log(saudar("Andre", "Luna", nomeCompleto));

// // tente fazer com arrow functions

// var nomeCompleto = (nome, sobrenome) => nome + " " + sobrenome
// var saudar = (nome, sobrenome, callback) => "Olá "+ callback(nome, sobrenome)+ "!"
// console.log(saudar("André", "Luna", nomeCompleto))
// //------------------------------------------------------------------------------------

// exercicio - 01 Playground
// function dobro (n1){
//     return n1*2
// };
// function triplo (n2){
//     return n2*3
// };
// function aplicar (n1, valor){
//     return valor(n1)
// }
// console.log(aplicar(5,dobro))
//------------------------------------------------------------------------------------
//exercicio - 02 playground

const somar = (a,b) => a+b;
const subtrair = (a,b) => a-b;
const multiplicar = (a,b) => a*b;
const dividir = (a,b) => a/b 

function calculadora (a, b, callback){
    return callback(a,b)
};
a = 2;
b = 3;
callback = somar
console.log(calculadora(a,b,callback))

