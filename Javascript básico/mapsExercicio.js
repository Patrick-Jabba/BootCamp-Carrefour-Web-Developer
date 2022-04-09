// MAP SEM THIS primeiro exemplo
const arr = [1, 2, 3, 4, 5];
const mult = arr.map(function(arr){
    return arr * 2;
});

console.log(arr);
console.log(mult);

// MAP COM THIS segundo exemplo

function mapSemThis(vetor){
    return vetor.map(function(item){
        return item * 2;
    });
       
}

const numeros = [2, 4, 6, 8, 10];
console.log(mapSemThis(numeros));
console.log(numeros);


// MAP COM THIS
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(array, thisArg){
    return array.map(function(item){
       return item * this.value;

    }, thisArg);
}

const nums = [1, 2];

console.log('this -> maçã', mapComThis(nums, maca));

console.log('this -> laranja', mapComThis(nums, laranja));


