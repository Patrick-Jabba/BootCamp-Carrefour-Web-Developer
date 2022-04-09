const array = [1, 22, 44, 33, 11, 27, 26, 42];
function filtraPares(numerosPares){
    return array.filter(callBack);
}

function callBack(numerosPares){
    return numerosPares % 2 == 0; 
}
// posso colocar !==0 e pegar só os não pares ou seja IMPARES
console.log(filtraPares(array));

// MESMO METODO COM SINTAXE DIFERENTE
function filtraImpares(array){
    return array.filter(function(numerosImpares){
        return numerosImpares % 2 !== 0;
    });
};

console.log(filtraImpares(array));
