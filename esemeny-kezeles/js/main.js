'use strict';

setTimeout(() => {
    console.log('From timeout');        // ez csak a "főszál" után fut le, aszinkron
}, 0);     // 0 msec múlva lefut

console.log('From root');   // először ez fut le

(function() {
    // megkeresem a szükséges elemeket
    const clock = document.querySelector('.clock');
    const startBtn = document.querySelector('.timer-start');
    const pauseBtn = document.querySelector('.timer-pause');
    const resetBtn = document.querySelector('.timer-reset');

    // az idő megjelenítése
    const showTime = () => {
        let minute = Math.floor(currentTime / 60);
        let second = currentTime % 60;
        minute = minute<10? `0${minute}`: minute;
        second = second<10? `0${second}`: second;
        clock.textContent = `${minute}:${second}`;
    }

    // események beállítása
    let isTiming;
    let currentTime = 0;
    showTime();
    // 3 esemény kezelővel
    // startBtn.addEventListener('click', () => isTiming = true);
    // pauseBtn.addEventListener('click', () => isTiming = false);
    // resetBtn.addEventListener('click', () => {
    //     currentTime = 0
    //     showTime();
    // });    

    // egy esemény kezelővel
    const btnGroup = document.querySelector('.btn-group');
    const handleButtonClick = (ev) => {
        switch (ev.target.className.split('-').pop()) {
            case 'start':
                isTiming = true;
                break;
            case 'pause':
                isTiming = false;
                break;
            case 'reset':
                currentTime = 0
                showTime();
                break;
        }
    };
    btnGroup.addEventListener('click', handleButtonClick);

    // az idő frissítése
    setInterval(() => {
        if(!isTiming)
            return;
        currentTime++;
        showTime();
    }, 1000);

})();