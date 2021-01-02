'use strict';

// ez a Storage modul 3. feladatának a megoldása

/*
Adott egy json file, ami valójában egy tömb, lastName, firstName propertyket tartalmazó objektumokkal.
Írj egy függvényt, ami indít egy ajax kérést, ami elkéri a json tartalmát, 
és a firstName, lastName párosokat egymás alá beleírja egy div-en belüli p-tagekbe, 
és létrehoz egy users nevű bejegyzés a localStorage-be, ahol a json tartalmát letárolja.
Módosítsd a függvényt úgy, hogy amennyiben a localStorage-ba van users bejegyzés, 
úgy onnan olvassa ki az adatokat, ha nincs csak akkor küldjön ajax kérést.
*/
// json server indítás: json-server ./users.json -w
const userHandle = {
    delay: 5000,
    repeatMax: 10,
    repeatNum: 1,
    getList(resolveFunc){
        return new Promise((res, rej) => {
            res = resolveFunc? resolveFunc: res;    // a this.getList().then az eredeti promise-ra iratkozott fel
            fetch('../storage_tasks/users1.json')
                .then(response => response.json())
                .then( json => res(json.users))
                .catch(err => {
                    if(this.repeatNum < this.repeatMax){
                        const to = setTimeout(() => {
                            clearTimeout(to);
                            this.getList(res);      // ezért az eredeti promise resolve fv-ét kell használni
                            this.repeatNum++;
                        }, this.delay);
                        return;
                    }
                    this.repeatNum = 1;
                    alert('Az alkalmazás offline');
                    if(localStorage.users){
                        res( Promise.resolve(JSON.parse(localStorage.users)));
                    } else {
                        alert('A helyi tároló is üres');
                        res( Promise.resolve([]));
                    }
                });
        });
    },
    showList(parent, delay, repeatMax){
        this.delay = delay;
        this.repeatMax = repeatMax;
        parent = document.querySelector(parent);
        this.getList().then(
            list => {
                this.generateList(parent, list);
                localStorage.setItem('users', JSON.stringify(list));
            },
            err => console.error(err)
        );
    },
    generateList(parent, list){
        list.forEach(item => {
            const p = document.createElement('p');
            p.classList.add('user-row');
            p.textContent = `${item.firstName} ${item.lastName}`;
            parent.appendChild(p);
        });
    }
};

 export {
    userHandle
}

//userHandle.showList('.container');
