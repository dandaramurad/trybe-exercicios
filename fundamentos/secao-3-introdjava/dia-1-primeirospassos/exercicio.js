/* let numberA = 87;
let numberB = 8;
let numberC = 9;

if (numberA > numberB && numberA > numberC) {
    console.log('A é o maior');
}
else if (numberB > numberA && numberB > numberC) {
    console.log('B é o maior');
}
else if (numberC > numberA && numberC > numberB) {
    console.log('C é o maior');
} */

/* let numberTest = -3;

if (numberTest > 0) {
    console.log('positive');
}
else if (numberTest < 0) {
    console.log('negative');
}
else {
    console.log('zero');
} */

/* let angle1 = 45;
let angle2 = 45;
let angle3 = 90;
let sumOfAngles = angle1 + angle2 + angle3;

if (sumOfAngles === 180) {
    console.log('true');
}
else if (sumOfAngles !== 180) {
    if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
        console.log('ângulo inválido');
    }
    else {
        console.log('false');
    }
} */

/* let chessPiece = 'Rainha';

switch (chessPiece.toLowerCase()) {
    case 'bispo':
        console.log('diagonais');
    break;
    case 'rei':
        console.log('uma casa em qualquer direção');
    break;
    case 'rainha':
        console.log('diagonal, horizontal e vertical');
    break;
    case 'peão':
        console.log('uma casa pra frente');
    break;
    case 'cavalo':
        console.log('em formato de L');
    break;
    case 'torre':
        console.log('horizontal e vertical');
    break;
    default:
        console.log('peça inválida');
} */

/* let numbA = 12;
let numbB = 4;
let numbC = 3;

if (numbA % 2 === 0 || numbB % 2 === 0 || numbC % 2 === 0) {
    console.log('true');
}
else {
    console.log('false');
} */


/* let number1 = 12;
let number2 = 0;
let number3 = 0;
let isEven = false;

if (number1 % 2 > 0 || number2 % 2 > 0 || number3 % 2 > 0) {
    isEven = true;
}
console.log(isEven); */


/* let priceValue =10;
let saleValue =15;

if (priceValue >= 0 && saleValue >= 0) {
    let totalCost = priceValue * 1.2;
    let totalProfit = (totalCost - saleValue) * 1000
    console.log('O lucro da venda de 1000 unidades é ' + totalProfit);
}
else {
    console.log('Os valores não podem ser negativos');
} */



let aliquotINSS;
let aliquotIR;
let grossSalary = 1000;

if (grossSalary <= 1556.94) {
    aliquotINSS = grossSalary * 0.08;
}
else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
    aliquotINSS = grossSalary * 0.09;
}
else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
    aliquotINSS = grossSalary * 0.11;
}
else {
    aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
    aliquotIR = 0;
}
else if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
    aliquotIR = baseSalary * 0.075 - 142.8;
}
else if (baseSalary >= 2826.66 && baseSalary <= 3751.05) {
    aliquotIR = baseSalary * 0.15 - 354.8;
}
else if (baseSalary >= 3751.06 && baseSalary <= 4.664,68) {
    aliquotIR = baseSalary * 0.225 - 636.13;
}
else {
    aliquotIR = baseSalary * 0.275 - 869.36;
}

let finalSalary = baseSalary - aliquotIR;

console.log('Salário: ' + finalSalary);