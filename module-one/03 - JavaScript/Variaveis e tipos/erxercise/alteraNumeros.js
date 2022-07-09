var entradaOne = [1, 3, 4, 6, 80, 33, 23, 90];
var entradaTwo = [];

function alterNumber(arrayEntry){
    let entryEnd = [];
    !arrayEntry.length? entryEnd.push(-1,):
    arrayEntry.forEach(element => {
        element % 2 === 0 && element != 0?
        entryEnd.push(element*0):
        entryEnd.push(element);
    });

    console.log(entryEnd);
}
console.log("Entrada 01: ")
alterNumber(entradaOne);
console.log("Entrada 02: ")
alterNumber(entradaTwo);