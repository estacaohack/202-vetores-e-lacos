/**
	O seguinte programa imprime o maior número presente no vetor 'numeros'
*/
let numeros = [10, 2, 7, 45, 23, 91, 11, 9];
let maiorNumero = 0;

for(let umNumero of numeros){
	if (umNumero > maiorNumero) {
		maiorNumero = umNumero;
	}
}

console.log(`O maior número é ${maiorNumero}`);
