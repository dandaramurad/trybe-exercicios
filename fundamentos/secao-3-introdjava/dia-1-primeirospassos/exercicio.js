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

let chessPiece = 'Rainha';

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
}