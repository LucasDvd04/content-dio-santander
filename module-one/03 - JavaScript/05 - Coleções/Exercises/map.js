//map com this
const maca = {
    value: 2,
}
const laranja = {
    value: 3,
}

const nums = [1,2];

function mapComThis(arrayExemplo, thisArg){
    return arrayExemplo.map(function(item){
        return item * this.value;
    },thisArg);
}

console.log('this ----> maçã',mapComThis(nums, maca));

console.log('this ----> laranja',mapComThis(nums, laranja));
//fim do map com this

//sem this

const numbers = [2,4,6,8,10]

function mapSemThis(arrayExe){
    return arrayExe.map(function(item){
        return item*2;
    });
}

console.log('this is are a map without this\n',mapSemThis(numbers));
//fim sem this