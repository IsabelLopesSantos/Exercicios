// 1 - ARRAY

/* //Exercício 1

const arr = [];

console.log(arr.length);

if (arr.length === 0) {console.log("O array está vazio!")}; */


/*//Exercício 2


const arr = [1, 2, 3, 4, 5, 6];

if (arr.length >5) {console.log("Esse array tem mais de 5 elementos!")};
console.log(arr.length); */


/*//Exercícios 3, 4

const frutas = ['laranja', 'banana', 'maçã', 'goiaba', 'melancia', 'pêra', 'morango'];

console.log(frutas.length);

let primeiro = frutas[0];
let meio = frutas[((frutas.length - 1) / 2)];
let ultimo = frutas[frutas.length - 1];

console.log(primeiro, meio, ultimo);*/

/*//Exercício 5 

const mixedDataTypes = [0, 1, 2, 'mamão', 'abacaxi', 12, 'tijolo', 14, 15];
console.log(mixedDataTypes);*/

/*//Exercícios 6, 7, 8, 9, 10

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies);

console.log(itCompanies.length);

let primeiro = itCompanies[0];
let meio = itCompanies[((itCompanies.length - 1) / 2)];
let ultimo = itCompanies[itCompanies.length - 1];

console.log(primeiro, meio, ultimo);

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);*/

/*//Exercício 11

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let arrNew = [];
    
for (let item of itCompanies) {  
  let a = item.match(/o/g);
  if (a!==null && a.length >=2) {arrNew.push(item)};
  
}

console.log(arrNew)*/

/*//Exercício 12

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let Menos3empresas = itCompanies.slice(3);
console.log(Menos3empresas);*/

/*//Exercício 13
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let Menos3ultimasempresas = itCompanies.slice(0, -3);
console.log(Menos3ultimasempresas);*/

/*//Exercício 14
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let EmpresasIntermediarias = itCompanies.slice(1,6);
console.log(EmpresasIntermediarias);*/


/*//Exercício 15
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let EmpresasIntermediarias = itCompanies.splice(0,1);
console.log(EmpresasIntermediarias);*/

/*//Exercício 16

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let EmpresasIntermediarias = itCompanies.splice(1,5);
console.log(EmpresasIntermediarias);*/

/*//Exercício 17
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let EmpresasIntermediarias = itCompanies.splice(6);
console.log(EmpresasIntermediarias);*/

/*//Exercício 18

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let EmpresasIntermediarias = itCompanies.splice(0,7);
console.log(EmpresasIntermediarias);*/

/*//Exercício 19

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]

for(i = 0; i < webTechs.length; i++){
  console.log(webTechs[i])
}*/

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

// 2 - OBJETO

/*//Exercícios 1, 2

const cachorro = { 

};

console.log(cachorro);*/

/*//Exercícios 3, 4
const cachorro = { 
    nome: 'sukita',
    patas: 4,
    cor: 'beje',
    idade: 12,
    latido: 'auau',

};

cachorro.latido = function() {
   return "uau uau"
}

console.log(latido);*/

/*//Exercício 5, 6

console.log(cachorro.nome);

console.log(cachorro.pernas);

console.log(cachorro.cor);

console.log(cachorro.idade);

console.log(cachorro.latido);*/

/* //Exercício 6
const cachorro = { 
    nome: 'sukita',
    patas: 4,
    cor: 'beje',
    idade: '12 anos',
    latido: 'auau',
    raça: 'vira-lata', 
    getDogInfo: 'informações cachorro',
};

cachorro.raca = 'vira-lata'
*/


/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

// 3 - Transformação de Array

//Exercício 1

/* A primeira diferença entre map() e forEach() é o valor de retorno.
O método forEach() retorna o valor undefined e o map() retorna um novo array com os elementos transformados.
Portanto, mesmo que eles façam o mesmo trabalho, seu valor de retorno ainda será diferente.
filter você controla quando será retornado, mas não qual será o valor retornado (sempre retorna o valor original);
Use reduce() quando: é preciso encontrar um valor cumulativo ou concatenado com base em elementos de todo o array.*/

