// passa por cada elemento do array (somando-os) e visa reduzir o array a minima expressao possivel .

let numeros = [ 5, 5, 10, 20]
let resultado = numeros.reduce(function(acumulador, umNumero){
    return acumulador + umNumero;
})

console.log(resultado);