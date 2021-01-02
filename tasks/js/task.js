/* 1. feladat
Hozz létre egy html fájlt benne 3 gombbal! A gombok szövegei az alábbiak legyenek: Első, Második, Harmadik. 
Mindegyik gombnak add meg a button class-t!
Készíts egy JavaScript fájlt, és linkeld be a html oldaladba! 
Írj egy függvény kifejezést arrow function segítségével. 
A függvény neve handleClick legyen A függvény a meghívása után mindegyik gombhoz hozzáad egy eseményfigyelőt, 
amely kattintásra kiírja a gomb szövegét a konzolra. 
A függvényen belül ciklust használj, tehát ne manuálisan egyesével add a gombokhoz az eseményfigyelőt!
 */
const handleClick = () => {
    const buttons = document.querySelectorAll('button');
    for(let i=0; i<buttons.length; i++)
        buttons[i].addEventListener('click', function(){
            console.log(this.textContent);
        });
};
handleClick();

/* 2. feladat
Hozz létre két függvény kifejezést arrow functionnel! A függvények neve summation és subtraction. 
Mindegyik függvény két paramétert kap, ezek neve a és b. 
Amennyiben bármelyik paraméter hiányozna a függvény meghívásakor, úgy az alapértelemezett érték a 0 legyen.
A summation visszatér a két szám összegével, a subtraction visszatér a két szám különbségével.
 */
const summation = (a=0, b=0) => a+b;
const subtraction  = (a=0, b=0) => a-b;

/* 3. feladat
Hozz létre egy függvény kifejezést arrow functionnel! A függvény neve personDataLog legyen. 
A függvény paraméterként egy objektumot vár, ami egy firstname, lastname, és age tulajdonságokkal rendelkezik. 
Amennyiben bármelyik tulajdonság hiányozna úgy rendre a következő alapértelemezett értékeket vegyék fel: 
- firstname: John - lastname: Doe - age: 33

A függvény kiírja az adott illető adatai a konzolra az adott formátumban:
My name is firstname, lastname. I'm age years old.
A firstname, lastname és age helyére a paraméterként kapott objektum tulajdonságok értékét kell behelyettesíteni.
 */
const personDataLog = ({firstname='John', lastname='Doe', age=33}={}) => {
    console.log(`My name is ${firstname}, ${lastname}. I\'m ${age} years old.`);
}