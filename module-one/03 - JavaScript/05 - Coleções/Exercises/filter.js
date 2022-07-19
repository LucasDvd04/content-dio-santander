const arrayNumbers = [1,23,55,67,30,2,4];

function filtraPar(arr){
    return arr.filter(callback);
}

function callback(item){
    return item%2 === 0;
}

console.log(filtraPar(arrayNumbers));