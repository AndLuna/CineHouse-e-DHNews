// filtra cada um dos elementos e retorna apenas os elementos que
//atendem a condição descrita (em booleano)
// Da pra usar no cinehouse

let lista = [10, 7, 3, 80,16, 50, 20]
let lista2 = []

lista2 = lista.filter(function (item){


    if(item < 16){
        return true
    }else{
        return false
    }
}
)
console.log("Menores que 16: ", 
lista2)
//------------------------------------------------------------------------------------

// exercicio para retornar apenas os numeros de maioridade no novo array

let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];
let maiores = numeros.filter(function(maioridade){
 return maioridade > 18;
});
console.log("Teste 1 - Maioridades: ", maiores)
//------------------------------------------------------------------------------------

let maiores2 = numeros.filter(function(maioridade){
    return maioridade >=18;
})
console.log("teste2: ", maiores2)

/// exercicio playground 
