// function getAdmins(map){
//     let admins = [];
//     for([key, value] of map){
//         if(value === 'Admin'){
//             admins.push(key);
//         }        
//     }
//     return admins;
// }

// const usuarios = new Map();

// usuarios.set('Luiz', 'Admin');
// usuarios.set('Stephany', 'Admin');
// usuarios.set('Jorge', 'User');
// usuarios.set('Natália', 'Admin');


// console.log(getAdmins(usuarios));

function validaArray(arr, tamanho) {
    try {
      if (!arr.length || arr.length !== tamanho) throw new RangeError("O tamanho do array é inválido");
  
      return arr;
    } catch(e) {
      if (e instanceof RangeError) {
        return console.log(e.message);
      } else {
        return e;
      }
    }
  } 
  
  validaArray();