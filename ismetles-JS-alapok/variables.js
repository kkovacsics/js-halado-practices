'use strict';

// define variables
var name = 'Satya';
const name2 = 'Piri';
let name3 = 'Béci';

// redefine variables
var name = 'Józsi';     // ez egy új változó, nem az előző felülírása

// a let + const -nál nem is lehet redefiniálni
// const name2 = 'reference error lesz';

name = 'Kálmi';     // új értéket adunk neki

// ha a változónak nem fog soha változni az értéke, akkor mindig const - ot kell használni

// variable types
// primitivek
// string
const userName ='John Doe';
// number
const userAge = 33;
// boolean
const UserAdmin = true;
// null
let IDontKnow = null;     // ha a létrehozáskor még nem tudom, hogy mi legyen az értéke
// undefined
let itIsUndefined;
console.log(itIsUndefined);
// bigint
const bigNumber = 333n;
const bigNumber2 = BigInt(9874565461321321212313);
console.log(bigNumber2);
// Symbol
const sym1 = Symbol();      // mindig egyedi
const user = {};
user[sym1] = 'Joe';         // egyedi azonosító, a for..in ciklus nem járja be
console.log(user);          // {Symbol(): "Joe"}


// Collections
// array
const array1 = [1,2,3];
console.log(array1[2]);     // 3
array1[0] = 5;
array1.push(4);         // a végére teszünk egy 4-est
array1.unshift(0);      // az elejére a 0-át
array1.pop();           // az utolsó elemet eltávolítja
array1.shift();         // az első elemet távolítja el, utána átszámozza az egész tömböt, emiatt erőforrás igényes
// ez a 4 metódus módosítja a tömböt

// object
console.log(typeof array1);     // object   (még az array is object)

const user1 = {
    name: 'Kiss Márk',
    age: 44,
    address: 'Bp. XXI. Kiss tér 22',
    email: 'kiss@gmail.com',
    salary: 4000,
};
console.log(user1.address);     // Bp. XXI. Kiss tér 22
user1.salary = 5000;
console.log(user1);
user1.department = 'account';
console.log(user1);
console.log(user1.department.length);
user1.hello = function(){
    return `Hello ${this.name}`;
}
console.log(user1.hello());

user1.address = user1.address.replace('Bp. XXI.', 'Kecskemét'); // mert a string inmutable, stringet nem lehet módosítani
console.log(user1.address);

function foo() { console.log(String(this)); };
foo();

var numbers=[2,5,7];
console.log(
numbers.filter(function(num){return num===7})[0],
numbers.filter(function(num){return num===5}),
numbers.filter(function(num){return num%5==0}),
numbers.filter(function(num){return num%5==0})[0]
);

for (let index = 0; index < 3; index++) {
    setTimeout(() => {
        console.log(index);
    }, 500);
}

const numbers_ = [1,2,3];
const clearArray = arr => {
    console.log(arr===numbers_);    // true
    arr.splice(0);
    console.log(arr===numbers_);    // false
};
clearArray(numbers_);
console.log(numbers_);