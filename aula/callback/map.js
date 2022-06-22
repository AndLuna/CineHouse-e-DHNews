// similar ao forEach, porem o map me retorna um array novo com a mesma quantidade de elementos
let lista = [10, 80, 50, 20]
let lista2 = []

lista2 = lista.map(numeros => numeros > 21)
console.log("Numeros da lista maiores que 21", lista2)

//------------------------------------------------------------------------------------

let listaNumeros = [2, 4, 6, 8]
let listaNumeros2 = []

listaNumeros2 = listaNumeros.map(callback => callback *4)
console.log("multiplicando por 4", listaNumeros2,
 " - Observe que nao utilizei 'function' aqui como utilizaria nos outros metodos.")

 //------------------------------------------------------------------------------------

//utilizei a mesma lista do que ta acima
let listaNumero3 = []

listaNumero3 = listaNumeros.map(function(valor, index){
    return valor * 3
})
 console.log("Montando com a função classica e utilizando da listaNumeros anterior: ",listaNumero3)

 