'use strict';

// 1. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legkisebb elemét!
function getMinimum(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(getMinimum([1,2,3,4,5,6,7,8,9,10]));

// 2. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legnagyobb elemét!
function getMaximum(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(getMaximum([1,2,3,4,5,6,7,8,9,10]));

// 1. + 2. feladat egy függvénnyel
function getExtremeValue(arr, extreme){
    if(extreme!=='min' && extreme!=='max')
        return;     // invalid parameter
    let extremeValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (extreme==='min' && arr[i] < extremeValue || extreme==='max' && arr[i] > extremeValue) {
            extremeValue = arr[i];
        }
    }
    return extremeValue;
}
console.log(getExtremeValue([1,2,3,4,5,6,7,8,9,10], 'min'));
console.log(getExtremeValue([1,2,3,4,5,6,7,8,9,10], 'max'));
console.log(getExtremeValue([1,2,3,4,5,6,7,8,9,10], 'maxi'));

// 3. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb átlagát!
function getAverage(arr) {
    let sum = 0;
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        sum += arr[i];
    }
    return sum / length;
}
console.log(getAverage([1,2,3,4,5,6,7,8,9,10]));

// 4. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb összegét!
function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(getSum([1,2,3,4,5,6,7,8,9,10]));

// 5. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb páros elemeinek a számát!
function getEvenCount(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0)
            count++;
    }
    return count;
}
console.log(getEvenCount([1,2,3,4,5,6,7,8,9,10]));

// 6. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb második legkisebb elemét!
function getSecondMinimum(arr) {
    let min_1st = arr[0], min_2nd = Infinity;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min_1st) {
            // min_2nd = min_1st;
            // min_1st = arr[i]
            [min_2nd, min_1st] = [min_1st, arr[i]];

        } else if (arr[i] < min_2nd) {
            min_2nd = arr[i];
        }
    }
    return min_2nd;
}
console.log(getSecondMinimum([1,2,3,4,5,6,7,8,9,10]));

// 7. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb harmadik legnagyobb elemét!
function getThirdMaximum(arr) {
    let max_1st = arr[0], max_2nd = -Infinity, max_3rd = -Infinity;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max_1st) {
            [max_3rd, max_2nd, max_1st] = [max_2nd, max_1st, arr[i]];
        } else if (arr[i] > max_2nd) {
            [max_2nd, max_1st] = [max_1st, arr[i]];
        } else if (arr[i] > max_3rd) {
            max_3rd = arr[i];
        }
    }
    return max_3rd;
}
console.log(getThirdMaximum([1,2,3,4,5,6,7,8,9,10]));

/*
 8. Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb 
    (feltételezzük, hogy beágyazott tömböt, objektumot, egyéb iterálható elemet nem tartalmaz) 
    tartalmazza-e a 23-as számot! Használj lineáris keresést!
*/
function searchArray(arr, search) {
    let found = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            found = true;
            break;
        }
    }
    return found ? 'igen' : 'nem';
}
console.log(searchArray([1,2,3,4,5,6,7,8,9,10], 23));

/*
 9. Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, csak egész számokat tartalmazó tömb 
    tartalmazza-e a 23-as számot! Használj logaritmikus keresést! 
    Nézz utána mi az, milyen feltételei vannak, és hogyan valósítható meg!
*/
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function searchArrayLogarithm(arr, search) {
    let found = false, begin = 0, end = arr.length-1;
    do {
        let center = Math.floor((begin + end) / 2);
        if (arr[center] == search) {
            found = true;
            break;
        } else if (arr[center] < search) {
            begin = center + 1;
        } else if (arr[center] > search) {
            end = center - 1;
        }
    } while (begin <= end);
    return found ? 'igen' : 'nem';
}
console.log(searchArrayLogarithm(sortedArray, 23));

/*
 10. Írd ki, hogy egy tetszőleges elemszámú, bármilyen típusú elemeket tartalmazó tömb 
 (feltételezzük, hogy beágyazott tömböt, objektumot nem tartalmaz) hányszor tartalmazza a 23-as számot!
*/
function countArrayElement(arr, elem) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            count++;
        }
    }
    return count;
}
console.log(countArrayElement([1,2,3,23,4,5,6,23,7,8,9,10], 23));

/*
 11. Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével 
 egy tetszőleges elemszámú, csak lebegőpontos számokat tartalmazó tömb elemeit növekvő sorrendbe! 
 Írasd ki a rendezett tömböt!
*/
function bubleSortAsc(arr) {
    let i = arr.length - 1;
    while (i >= 2) {
        let lastExchange = 0;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                // let tmp = arr[j + 1];
                // arr[j + 1] = arr[j];
                // arr[j] = tmp;
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                lastExchange = j;
            }
        }
        i = lastExchange;
    }
    return arr;
}
console.log(bubleSortAsc([1.1, 34.2, 10, 4.99, 233, 12.01, 3.9]));

/*
12. Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével 
egy tetszőleges elemszámú, beágyazott tömb, és objektum kivételével bármilyen típusú elemeket 
tartalmazó tömb elemeit csökkenő sorrendbe! 
A nem szám típusú elemeket rakd a tömb végére az eredeti sorrendbe. 
Írasd ki a rendezett tömböt!
*/
function bubleSortDescSpecial(arr) {
    const isNumber = e => typeof e === 'number';
    let i = arr.length - 1;
    while (i >= 2) {
        let lastExchange = 0;
        for (let j = 0; j < i; j++) {
            if (!isNumber(arr[j]) && isNumber(arr[j + 1]) ||
                isNumber(arr[j]) && isNumber(arr[j + 1]) && arr[j] < arr[j + 1]) {
                arr[j + 1] = [arr[j], arr[j] = arr[j + 1]][0];
                lastExchange = j;
            }
        }
        i = lastExchange;
    }
    return arr;
}
console.log(bubleSortDescSpecial([1.1, 'kk', 34.2, '1', 10, 'bb', 4.99, 233, 12.01, 3.9]));

/*
13. Adott egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb. 
A tömb elemeit rendezzük növekvő sorrendbe. Ezután a felhasználótól kérjünk be egy számot 
(addig kérjünk be értéket, míg valóban egy véges egész számot ad meg). 
A számot szúrjuk be a tömbbe úgy, hogy a tömb továbbra is rendezett maradjon, 
tehát a megfelelő indexű helyre kerüljön be a plusz elem.
Írasd ki a rendezett tömböt!
*/
function insertInteger(arr) {
    bubleSortAsc(arr);
    let value;
    do{
        value = parseInt(prompt('Enter an integer number:'));
    } while ( isNaN(value) );
    for (let i = 0; i < arr.length; i++) {
        if (value < arr[i]){
            arr.splice(i, 0, value);
            break;
        }
    }
    return arr;
}
console.log('insertInteger', insertInteger([1.1, 34.2, 10, 4.99, 233, 12.01, 3.9]));

/*
14. Adott egy tömb, mely azonos darabú egész számot, és szöveget tartalmaz véletlenszerű sorrendben. 
Rendezzük úgy a tömböt, hogy minden szám után egy string következzen! Írasd ki a rendezett tömböt!
*/
function sortNumberString(arr){
    const numbers = [], strings = [];
    for (let i = 0; i < arr.length; i++) {
        if( typeof arr[i] === 'number')
            numbers.push(arr[i]);
        else
            strings.push(arr[i]);
    }
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i], strings[i]);
    }
    return result;
}
console.log('sortNumberString', sortNumberString(['1','2','3','4',1,2,3,4]));

/*
15. Adott egy tetszőleges pozitív egész számokat tartalmazó tömb. 
Válogassuk szét külön egy paros, és paratlan nevezetű tömbbe a páros, és páratlan számokat! 
Írjuk ki a 2 tömböt!
*/
function separateArray(arr){
    const even=[], odd=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2==0){
            even[even.length] = arr[i];
        } else {
            odd[odd.length] = arr[i];
        }
    }
    return {even: even, odd: odd};
}
let result = separateArray([1,2,3,4,5,6,7,8,9,10]);
console.log('separateArray - even', result.even);
console.log('separateArray - odd', result.odd);

/*
16. Adott két azonos elemszámú, csak egész számokat tartalmazó tömb. 
Külön tömbökbe készítsük el a két tömb: metszetét, unióját, különbségét, és descartes szorzatát. 
Írassuk ki az új tömböket!
*/
function setOperation(arr1, arr2, operation){
    // if(operation !== 'segment' && operation !== 'union' && operation !== 'difference' && operation !== 'descartes')
    //     return;
    if(!['segment','union','difference','descartes'].includes(operation))
        return;
    
    let result = [];
    switch (operation) {
        case 'segment':
            for(let i=0; i<arr1.length; i++){
                if(searchArrayLogarithm(arr2, arr1[i]) === 'igen')
                    result.push(arr1[i]);
            }
            break;
        case 'union':
            result = arr1.slice();
            for(let i=0; i<arr2.length; i++){
                if(searchArrayLogarithm(result, arr2[i]) === 'nem')
                    result.push(arr2[i]);
            }
            break;
        case 'difference':
            for(let i=0; i<arr1.length; i++){
                if(searchArrayLogarithm(arr2, arr1[i]) === 'nem')
                    result.push(arr1[i]);
            }
            for(let i=0; i<arr2.length; i++){
                if(searchArrayLogarithm(arr1, arr2[i]) === 'nem')
                    result.push(arr2[i]);
            }
            break;
        case 'descartes':
            for(let i=0; i<arr1.length; i++){
                for(let j=0; j<arr2.length; j++){
                    result.push(arr1[i]*arr2[j]);
                }
            }
            break;
    }
    return result;
}
console.log('metszet', setOperation([1,2,3,4,5,6,7,8,9,10], [5,6,7,8,9,10,11,12,13,14],'segment'));
console.log('unió', setOperation([1,2,3,4,5,6,7,8,9,10], [5,6,7,8,9,10,11,12,13,14],'union'));
console.log('különbség', setOperation([1,2,3,4,5,6,7,8,9,10], [5,6,7,8,9,10,11,12,13,14],'difference'));
console.log('descartes szorzat', setOperation([1,2,3,4,5,6,7,8,9,10], [5,6,7,8,9,10,11,12,13,14],'descartes'));
console.log('ismeretlen művelet', setOperation([1,2,3,4,5,6,7,8,9,10], [5,6,7,8,9,10,11,12,13,14],'1descartes'));

/*
16. Adott két azonos elemszámú, csak egész számokat tartalmazó tömb. 
Külön tömbökbe készítsük el a két tömb: metszetét, unióját, különbségét, és descartes szorzatát. 
Írassuk ki az új tömböket!
Clean Code verzió
*/
function segmentArrays(arr1, arr2){
    const result = [];
    for(let i=0; i<arr1.length; i++){
        if(searchArrayLogarithm(arr2, arr1[i]) === 'igen')
            result.push(arr1[i]);
    }
    return result;
}
function unionArrays(arr1, arr2){
    const result = arr1.slice();
    for(let i=0; i<arr2.length; i++){
        if(searchArrayLogarithm(result, arr2[i]) === 'nem')
        result.push(arr2[i]);
    }
    return result;
}
function differenceArrays(arr1, arr2){
    const result = [];
    for(let i=0; i<arr1.length; i++){
        if(searchArrayLogarithm(arr2, arr1[i]) === 'nem')
        result.push(arr1[i]);
    }
    for(let i=0; i<arr2.length; i++){
        if(searchArrayLogarithm(arr1, arr2[i]) === 'nem')
        result.push(arr2[i]);
    }
    return result;
}
function descartesArrays(arr1, arr2){
    const result = [];
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            result.push(arr1[i]*arr2[j]);
        }
    }
    return result;
}

console.log('metszet', segmentArrays([1,2,3,4,5,6,7,8,9,10], [5,6,7,8,9,10,11,12,13,14]));
console.log('unió', unionArrays([1,2,3,4,5,6,7,8,9,10], [5,6,7,8,9,10,11,12,13,14]));
console.log('különbség', differenceArrays([1,2,3,4,5,6,7,8,9,10], [5,6,7,8,9,10,11,12,13,14]));
console.log('descartes szorzat', descartesArrays([1,2,3,4,5,6,7,8,9,10], [5,6,7,8,9,10,11,12,13,14]));
