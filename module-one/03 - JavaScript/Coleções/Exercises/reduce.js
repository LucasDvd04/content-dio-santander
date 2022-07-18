//exercicio 01
const arr = [1,2];

function soma(arr){
    return arr.reduce(callback,0);
}

function callback(prev, current){
    console.log({prev});
    console.log({current});
    return prev + current;
}

console.log(soma(arr));
// fim exercicio 01

// exercicio 02
const lista = [
    {
        name: 'sabao',
        price: 30,
    },
    {
        name: 'cereal',
        price: 12,
    },
    {
        name: 'toalha',
        price: 30,
    },
];

const saldoDisp = 100;

function calcSaldo(saldoDisp, lista){
    return lista.reduce(function(prev, current,index){
        console.log('rodada',index+1);
        console.log(prev);
        console.log(current);
        return prev - current.price;
    },saldoDisp);
}


console.log(calcSaldo(saldoDisp,lista));