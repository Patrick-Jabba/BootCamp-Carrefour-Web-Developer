const array = [1, 2, 3, 4, 5];
// 0 + 1 + 2 + 3 + 4 + 5
const valorInicial = 0;
const somaComValorInicial = array.reduce(
    (valorAnterior, valorAtual) => valorAnterior + valorAtual, valorInicial
    );
console.log(somaComValorInicial);
// expected output: 15

function somaNumeros(arr){
    return arr.reduce(function (prev, current){
        console.log({prev});
        console.log({current});

        return prev + current;
    }, 0); //previous ou valor anterior tb é chamado de acumulador.
};

const arr = [1, 2];

console.log(somaNumeros(arr));

const lista = [
    {
        name: 'sabao em po',
        preco: 30
    },
    {
        name: 'cereal', 
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(valuePrev, valueCurrent, index){
       console.log('rodada ', index + 1);
        console.log({valuePrev});
        console.log({valueCurrent});
        
        return valuePrev - valueCurrent.preco;
        }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));