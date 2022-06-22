// // funções anonimas e mais bonitas
// // se quiser nomear devemos atribui-las como valor de uma variavel qlqer
// //---------------------------------------------------------------------------------
// let somar = (A, B) => A + B 
// console.log(somar(2,1));
// //---------------------------------------------------------------------------------
// let soma = numero => console.log("Recebi o numero "+numero)
// soma (10);

// //---------------------------------------------------------------------------------
// let dobro = num => num * 2
// console.log(dobro(2));
// //---------------------------------------------------------------------------------
// let par = numero => {
//     if (numero % 2 === 0){
//         return true;
//     } return false;
// }
// console.log(par(4));
// //---------------------------------------------------------------------------------

// function cincoNumeros() {
//     return [1,2,3,4,5];
// }
// let cincoNumeros = () => [1,2,3,4,5];

// let multiplicarPorDois = () => 123 * 2;

// let mostrarNome = () => "Meu nome é Ryan Dahl"


// revisao 16/06

function somar(x,y){
    return x + y
}
console.log(somar(2,3))
// pode ser escrito da seguinte maneira
const somarAr = (x,y) => x+y
console.log(somarAr(2,2))

