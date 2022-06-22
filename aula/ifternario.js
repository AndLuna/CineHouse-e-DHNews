//if ternario forma mais simples de escrever o if else
// Estrutura: Condição? Primeira expressão : segunda expressão (else)

4 > 10 ? console.log('O 4 é maior') : console.log('O 10 é maior');
idade = 23
idade >= 18? console.log("Maior de idade ") : console.log("Menor de idade")

//switch analisa varias possibilidades

let age = 5;
switch (age){
    case 10:
        console.log ("Tem 10 anos");
        break;
    case 5:
        console.log("Tem 5 anos");
        break;
}

// var x = true
// if (x){
//     case true:
//     console.log("É verdadeiro!");
//     break;
//     case false:
//     console.log("É falso!");
//     break;
// }



// como utilizar um switch dentro da função 
let dia = 'segunda-feira'
function fimDeSemana(dia){
    switch(dia){
        case 'sexta-feira':
            console.log('Bom fim de semana!');
            break;
        case 'segunda-feira':
            console.log('Boa semana!')
            break;

        default: 
        console.log('Bom dia!')
    }
}


