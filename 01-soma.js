/**
	O seguinte programa soma todos os números presentes no vetor 'numeros'
*/

let numeros = [10, 20, 1, 6, 7, 13, 45];

let total = 0;

for(let umNumero of numeros){
	total = total + umNumero;
	console.log(total);
}

console.log(`O total é ${total}`);
