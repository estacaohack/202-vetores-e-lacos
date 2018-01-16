/**
	O seguinte programa conta quantos números pares existem no vetor 'numeros'
*/

let numeros = [10, 2, 7, 45, 23, 91, 11, 9, 8, 64];

let contador = 0;

for(let umNumero of numeros){
	if(umNumero % 2 == 0){
		contador++;
	}
}

console.log(`Existem ${contador} números par.`);
