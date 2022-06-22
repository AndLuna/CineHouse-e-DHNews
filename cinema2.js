const fs = require("fs")

// let catalogo = [{
//         codigo: 1,
//         titulo: "Senhor dos Aneis",
//         duração: 2.30,
//         personagens: [" Aragorn", "Gollum", "Gandalf", "Legolas", "Frodo Baggins"] ,
//         anoDeLancamento: 2001,
//         emCartaz: false
     
// }, {
//     codigo: 2,
//     titulo: "Top Gun - Maverick",
//     duracao: 1.30,
//     personagens: [" Tom Cruise", "Tom Kazanski", "Penny Benjamin"],
//     anoDeLancamento: 2022,
//     emCartaz: true
//  }


// ]

// adicionar um filme 



function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz){
    let catalogo = JSON.parse(fs.readFileSync('./database/catalogo.json', 'utf8')) 
    console.log(catalogo)
    let novoFilme = {
    codigo:codigo,
    titulo: titulo,
    duracao: duracao,
    atores: atores,
    anoDeLancamento: anoDeLancamento,
    emCartaz: emCartaz,
    }
    catalogo.push(novoFilme)
    
}
adicionarFilme(3, "Pantera Negra", 3, "Chadwick Boseman", 2020, true)



//buscando um objeto utilizando forEach (talvez funcione) (FUNCIONOUUUU!!)

function cat (codigo){
    let catalogo = JSON.parse(fs.readFileSync('./database/catalogo.json', 'utf8')) // usando a biblioteca FS para ler o arquivo json
var catal = catalogo.forEach(object =>{
    if(object.codigo === codigo){
      console.log("Nome do filme: " + object.titulo);
    }
 
});
}
cat(1)
//alterarStatusEmCartaz
function alterarStatusEmCartaz(codigo){
    if(catalogo[codigo - 1].emCartaz){
        catalogo[codigo - 1].emCartaz = false
    }else{
        catalogo[codigo - 1].emCartaz = true
    } console.log(catalogo[0]);}
    console.log(catalogo[0]);
alterarStatusEmCartaz(1)
console.log(catalogo[0]);

var catalogo = require("./catalogo.json")
var catalogoString = JSON.stringify(catalogo)