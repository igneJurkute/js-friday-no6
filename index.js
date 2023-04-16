console.log('1 Uzdavinys')

function studyTime (h1, m1, h2, m2){
    return [Math.floor((((h2 * 60) + m2) - ((h1 * 60) + m1)) / 60), (((h2 * 60) + m2) - ((h1 * 60) + m1)) % 60] ;
}

console.log (`Mokynis sprendė: ${studyTime(8, 15, 19, 30)[0]} h ir ${studyTime(8, 15, 19, 30)[1]} min.`);
console.log (`Mokynis sprendė: ${studyTime(12, 3, 20, 10)[0]} h ir ${studyTime(12, 3, 20, 10)[1]} min.`);

console.log('--------------------------------');
console.log('2 Uzdavinys'); 

function  armstrongNum (n1, n2){   //funkcija, kuri suranda visus Armstrongo skaicius nuo n1  iki n2
    let numbers = [];  
    for(let i = n1; i <= n2; i++){
        const digits = String(i).split('').map(Number);
        if(digits.reduce((a, b) => a + (b ** digits.length), 0) === i){
            numbers.push(i);
        }
    }
    return(numbers);
} 
const begin = 100;
const end = 999;
console.log("Arsmtrongo skaičiai: " + armstrongNum(begin, end).join(", "));


console.log('--------------------------------');
console.log('3 Uzdavinys');

function distance(x1, y1, x2, y2){
    return Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2);
}

console.log(distance(0, 0, 1, 0));
console.log(distance(-5, 0, 10, -10));


console.log('--------------------------------');
console.log('4 Uzdavinys');

function evenOdd (n){
    const digits2 = String(Math.abs(n)).split('').map(Number);
    let even = 0;
    let odd = 0;
    digits2.forEach(a => a % 2 === 0? even++ : odd++);
    return [even, odd];
}

console.log('Pateiktame skaičiuje yra ' + evenOdd(63258)[0] + ' lyginiai skaitmenys ir ' + evenOdd(63258)[1] + ' nelyginiai skaitmenys');

console.log('--------------------------------');
console.log('5 Uzdavinys');

function cost (ilgis, plotis){
    return (Math.round(((ilgis * plotis) * (1 + (5/100)))/1.5) * 1.5) * 23
}

console.log(cost(10, 12));

console.log('--------------------------------');
console.log('6 Uzdavinys');

const vidurkiai = [];
for (let i = 1; i <= 30; i++){
    vidurkiai.push(Math.round(Math.random() * 10));
}
console.log(vidurkiai);
console.log(Math.min(...vidurkiai), Math.max(...vidurkiai));

console.log('--------------------------------');
console.log('7 Uzdavinys');

const suma = 15873;
function monetos(suma){
    const m5 = Math.floor(suma / 5);
    const m2 = Math.floor((suma - (m5 * 5)) / 2);
    const m1 = Math.floor((suma - (m5 * 5) - (m2 * 2)));
    return [m5, m2, m1, (m1 + m2 + m5)];
}

console.log(`Norint gauti ${suma} sumą litais, mums reikės ${monetos(suma)[0]} monetų po 5 lt, ${monetos(suma)[1]} monetų po 2 litus ir ${monetos(suma)[2]} monetų po 1 litą. Viso monetų skaičius ${monetos(suma)[3]}.`);