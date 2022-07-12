let catalogo = [{
    codigo: 1,
    titulo: "Senhor dos Aneis",
    duração: 2.30,
    personagens: [" Aragorn", "Gollum", "Gandalf", "Legolas", "Frodo Baggins"] ,
    anoDeLancamento: 2001,
    emCartaz: false
 
}, {
codigo: 2,
titulo: "Top Gun: Maverick",
duracao: 1.30,
personagens: [" Tom Cruise", "Tom Kazanski", "Penny Benjamin"],
anoDeLancamento: 2022,
emCartaz: true
}


]

// ADICIONAR FILME 
function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz){
    const novoFilme = {
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
console.log(catalogo)

//buscando um objeto utilizando forEach (talvez funcione) 
// https://www.delftstack.com/pt/howto/javascript/javascript-find-object-in-array/
//print name of the people who work at amazon
//arrayofObjects.forEach(object =>{
//    if(object.company === "Amazon"){
//        console.log("Amazon Employee:", object.name);
//    }
//});

catalogo.forEach(object =>{
    if(object.codigo === 3){
        console.log("Nome do Filme: ", object.titulo);
    }
 });

 //alterarStatusEmCartaz
function alterarStatusEmCartaz(codigo){
    if(catalogo[codigo - 1].emCartaz){
        catalogo[codigo - 1].emCartaz = false
    }else{
        catalogo[codigo - 1].emCartaz = true
    } }
    console.log(catalogo[0]);
alterarStatusEmCartaz(1)
console.log(catalogo[0]);

