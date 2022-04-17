// //TODO: Complete os espaços em branco com uma possível solução para o problema.
// var participantes = gets();
// var criancas;
// var array = [];
// for(                   ){
//   criancas = gets().split(' ');
//   array.push(          );
// }

// const meninos = array.filter(                                'M').length;
// const meninas = array.filter(                                 'F').length;
// print(`${meninos} carrinhos\n${meninas} bonecas`);


// //TODO: Complete os espaços em branco com uma possível solução para o problema.
// var participantes = gets();
// var criancas;
// var array = [];
// for(let i = 0; i<= participantes; i++){
//   criancas = gets().split(' ');
//   array.push(        );
// }

// const meninos = array.filter(                                'M').length;
// const meninas = array.filter(                                 'F').length;
// print(`${meninos} carrinhos\n${meninas} bonecas`);


let kids = gets();
let girls = 0;
let boys = 0;

for (let i = 0; i < kids; i++) {
  let nameGender = gets().split(" ");
  let name = nameGender[0];
  let gender = nameGender[1];

  if (gender === 'F') {
    girls++
  } 

  if (gender === 'M') {
    boys++
  }
}

console.log(boys + " carrinhos")
console.log(girls + " bonecas")


//TODO: Complete os espaços em branco com uma solução possível para o problema.
let line = gets();
let matricula;

for(                  ){
  line = gets();
  line = line.split(" ")
  if(parseFloat(       )>=     ){
    matricula = line[  ]
  }
}

if(      )
 print(            )
else
  print("Minimum note not reached")