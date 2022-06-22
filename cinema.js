
// IMPORTANDO OS ITENS DO JSON PARA O MEU CODIGO
let catalogo = require ('./database/catalogo.json');
// console.log(catalogo)
//ADICIONAR FILME 
function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz){
    const novoFilme = {
    codigo:codigo,
    titulo: titulo,
    duracao: duracao,
    atores: atores,
    anoDeLancamento: anoDeLancamento,
    emCartaz: emCartaz,
    }
    catalogo.filmes.push(novoFilme)
}
adicionarFilme(3, "Pantera Negra", 3, "Chadwick Boseman", 2020, true)
// console.log("Adicionar Filme: ", catalogo)

//pesquisar filme
function cat (codigo){
var catal = catalogo.filmes.forEach(object =>{
    if(object.codigo === codigo){
 //     console.log("Nome do filme: " + object.titulo);
    }
 
});
}
cat(1)

//alterarStatusEmCartaz
// function alterarStatusEmCartaz(codigo){
//     if(catalogo.filmes[codigo - 1].emCartaz){
//         catalogo.filmes[codigo - 1].emCartaz = false
//     }else{
//         catalogo.filmes[codigo - 1].emCartaz = true
//     }}
   
   
//     console.log(catalogo.filmes[0]);
// alterarStatusEmCartaz(1)
// console.log(catalogo.filmes[0]);



//console.log(catalogo.filmes)


// listarTodosOsFilmes
// for (inicio; condição; modificador){}
function listarTodosOsFilmes (){
    for(let i = 0; i < catalogo.filmes.length; i++){ 
     
        console.log(catalogo.filmes[i].titulo);
        }
    }
    listarTodosOsFilmes()
//  listarFilmesEmCartaz - criar
function listarFilmesEmCartaz (){
    for(let i = 0; i < catalogo.filmes.length; i++){ 
     const filme = catalogo.filmes[i]
     if (filme.emCartaz === true){
        console.log(catalogo.filmes[i])
     }
        }
    }
    listarFilmesEmCartaz()