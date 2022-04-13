// A entrada consiste de uma única linha que contém dois inteiros H e P (1 ≤ H, P ≤ 1000) indicando respectivamente o número total de coxinhas consumidas e o número total de participantes na competição.

let line = (10, 90)

let H = parseInt(line[0]);
let P = parseInt(line[1]);

let media = (H/P).toFixed(2);

console.log(" " + media);
