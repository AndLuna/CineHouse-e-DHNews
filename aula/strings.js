// utilize cd para navegar entre pastas
// .length = retorna a quantidade de total de elementos em uma string
let arrayNome = ['john', 'Andre', "Rafaela"];
console.log('Quantidade de total de elementos: ', arrayNome.length);

// .indexOf( ) util para procurar elementos em arrays, objetos

let saudacao = "Olá! Estamos programando";
console.log('Posição da palavra na String: ', saudacao.indexOf("Estamos"));
// retornou a posição

// .split( ) (MUITO UTIL) divide uma string em varias strings usando o caracter
// que escolhemos como separador.

let nomes = 'john Andre Cloud Rafael';
console.log('divide uma string em varias strings: ', nomes.split(' '));

// .replace( ) = Substitui uma parte da String por outra
let frase = 'Força, amigo!'
console.log(frase.replace ('amigo!', "JS!"))

