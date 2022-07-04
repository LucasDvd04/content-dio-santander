function soma(a,b/*parametros*/){
    console.log(a+b);//imprime no console
    return a+b;//retorna a soma
}

soma(2,2);//executando a função

function parOuImpar(array){
    for(let i = 0; i < array.length;){
        if(array[i] % 2 == 0){
            console.log(array[i] , " é par");
            i += 1;
        }
        else{
            console.log(array[i] , " é impar");
            i += 1;
        }
    }
}
let numeros = [1,2,3,4,5,6];

parOuImpar(numeros);

