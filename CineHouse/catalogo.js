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
