let word = "";

function verPalindromo(word){
    if(!word) {
        console.log("Valor invalido")
}
    else{
        let palindromo = word.split("");
        let contrario = word.split("").reverse();

        console.log(contrario);
        console.log(palindromo);

        palindromo === contrario? console.log(`${word} é palindromo`):console.log(`${word} não é palindromo`)
    }   
        
}

word = 'egua'
verPalindromo(word);