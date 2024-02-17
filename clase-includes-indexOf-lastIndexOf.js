// .includes() with numbers → Retorna true si el argumento es un elemento del array, de lo contrario, false.

const numbres = [1, 2, 3, 4, 5];

const result1 = numbres.includes(3);
console.log(result1);

const result2 = numbres.includes(8);
console.log(result2);

// indexof() → Retorna el índice de la primera aparición del argumento si este pertenece al array, de lo contrario retorna -1

const fruits = ['apple', 'cherry', 'grape', 'mango'];

const index1 = fruits.indexOf('grape');
console.log(index1);

const index2 = fruits.indexOf('blueberry');
console.log(index2);

// lastIndexOf() → A diferencia de .indexOf(), retorna el índice de la última aparición del elemento, si pertenece al array

const numbersAgain = [2, 4, 6, 8, 10, 6];

const lastIndex1 = numbersAgain.lastIndexOf(6);
console.log(lastIndex1);

const lastIndex2 = numbersAgain.lastIndexOf(3);
console.log(lastIndex2);

/*  

Encontrar Índices de Subcadena

Dado un array de cadenas de texto y una cadena de texto objetivo, escribe una función para 
determinar si la cadena objetivo está presente en el array. 

Si está presente, devuelve el índice de la 
primera ocurrencia y el índice de la última ocurrencia; de lo contrario, devuelve -1.
Curso de JavaScript desde Cero

*/

// Excercise . Findind Substring Indices

const stringArray = ['apple', 'banana', 'orange', 'grape', 'banana', 'kiwi'];
const target = 'banana';

function findStringIndicesInArray(array, target) {
  const result = {
    includesTargetString: false,
    firtsOccurrenceIndex: -1,
    lastOccurrenceIndex: -1,
  };
  array.forEach((element, index) => {
    if (element.includes(target)) {
      result.includesTargetString = true;
      result.firtsOccurrenceIndex = array.indexOf(target);
      result.lastOccurrenceIndex = array.lastIndexOf(target);
    }
  });
  return result;
}

const result = findStringIndicesInArray(stringArray, target);
console.log(result);

/*-------------------------------------------------------------------------------------------------------*/

function determineTargetString(target) {
  if (stringArray.includes(target)) {
    return {
      indexFirstOcurrence: stringArray.indexOf(target),
      indexLastOcurrence: stringArray.lastIndexOf(target),
    };
  } else {
    return `index ${target} not found in to array`;
  }
}
const indexToArray = determineTargetString('banana');
console.log(indexToArray);
