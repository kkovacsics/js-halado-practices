'use strict';

const getFetchData = (url) => {
    return fetch(url)
        .then(response => {
            if(response.status>399){// 400-tól már hibák jönnek (404 - Not found), de nem jelennek meg a catch-ben
                throw new Error('Request error');// ezért kell külön hibát dobnunk
            }
            response.json();
        })
        .catch( err => Promise.resolve([]));// promise-t adunk vissza, mert a getFetchData meghívásakor azt várunk
}

getFetchData('https://raw.githubusercontent.com/jokecamp/FootballData/EP(...).json')
    .then(data => {
        console.log(data);  
    });


// aszinkron változat
const getFetchData = async (url) => {
    let data = [];
    try{
        const response = await fetch(url);
        if(response.status>399){
            throw new Error('Request error');
        }
        data = await response(json);
    } catch(err) {
        console.error(err);
    } finally {
        return data;
    }
}

