/*
function compare(a,b){
    var equal = '';
    var sizeA = '';
    var sizeB = '';

    a===b? equal='equals': equal='not equals';
    a+b > 10? sizeA = 'bigger':sizeA = 'smaller'; 
    a+b < 20? sizeB = 'smaller':sizeB = 'bigger';

    console.log('the numbers',a, 'and', b, 'do',equal, 'the sum are', a+b, 'and is', sizeA, 'than 10', 'and', sizeB, 'than 20')
}

compare(5,6);
*/

function comparaNumeros(num1, num2) {
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
	let primeiraFrase = `Os números ${num1} e ${num2}`;
	let simNao = 'não';

	if (num1 === num2) {
		simNao = '';
	}

	return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparaNumeros(10, 10));
