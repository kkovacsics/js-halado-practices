'use strict';

/*
Módosítsd a Storage nevű modul 3. feladatát úgy, hogy amennyiben a kérés során bármilyen hiba van, 
szintén a localStorage-ból olvassa ki az adatokat a program!
Ilyenkor jeleníts meg egy üzenetet, hogy az alkalmazás offline!
Amennyiben a localStorage is üres, jelents meg egy szabadon választott hibaüzenetet, 
és alapértelmezetten 5 másodpercenként ismételd meg újra a kérést összes 10 alaklommal! 
Ez a két érték paraméterként megadható legyen! 
Ha a 10-ből bármelyik alakalommal sikeres a kérés, akkor aszerint járj el (kiíratás, tárolás, stb.).
*/

import {userHandle} from "./storage_task.js"

userHandle.showList('.container', 3000, 6);