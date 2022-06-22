

let lista = [10, 80,16, 50, 20]
let lista2 = []

lista2 = lista.find(function (item){


    // pode usar item < 16 tambem (sempre retorna o primeiro item encontrado)
//     if(item == 16){
//         return true
//     }
// }
// )

// function arrow + if ternario
lista2 = lista.filter(item => item < 16 ? return true: false )
// porem lembre-se que item < 16 é um valor booleano, por tanto faz desnecessario o ifternario
// lista2 = lista.filter(item => item < 16) tambem funcionaria

console.log(lista2)