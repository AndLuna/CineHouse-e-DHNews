let pessoa = {
    nome: "Vinicius",
    idade: 21,
    altura: 1.70
}

//convertendo JS em texto JSON
let json = JSON.stringify(pessoa)
//console.log("Em json: ", json)


// convertendo texto JSON em JS
let objetoDeNovo = JSON.parse(json)

//console.log("Em objeto js: ", objetoDeNovo)

let listaCompras = ["pão", "presunto", "queijo"]
let json2 = JSON.stringify(listaCompras)
//console.log("Lista Compras em Json: ", json2)

let catalogo = [{
    codigo: 1,
    titulo: "Senhor dos Aneis",
    duração: 2.30,
    personagens: [" Aragorn", "Gollum", "Gandalf", "Legolas", "Frodo Baggins"] ,
    anoDeLancamento: 2001,
    emCartaz: false
 
}, {
codigo: 2,
titulo: "Top Gun - Maverick",
duracao: 1.30,
personagens: [" Tom Cruise", "Tom Kazanski", "Penny Benjamin"],
anoDeLancamento: 2022,
emCartaz: true
}

]
let json3 = JSON.stringify(catalogo)
console.log(json3)