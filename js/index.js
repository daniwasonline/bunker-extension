document.addEventListener("DOMContentLoaded", function (event) {
    startTime()
    prepSearchHandling();
});

const defaultConfig = `{

    "glass": {
        "background": "rgba(43,43,43, 0.25)",
        "backgroundHover": "rgba(47, 43, 48, 0.35)",
        "blur": 30
    },

    "background": {
        "url": "https://cdn.bean.codes/a/cabin.png",
        "snow": {
            "enabled": false,
            "count": 200
        },
        "mist": {
            "enabled": true,
            "opacity": 6
        }
    }
}`;

const baseConfig = `{
    "bookmarks": [
        
    ],

    "glass": {
        "background": "rgba(47, 43, 48, 0.568)",
        "backgroundHover": "rgba(47, 43, 48, 0.568)",
        "blur": 12
    },

    "background": {
        "url": "https://images.wallpapersden.com/image/download/night-mountains-summer-illustration_a2plamaUmZqaraWkpJRsa25trWloaGU.jpg",
        "snow": {
            "enabled": false,
            "count": 200
        },
        "mist": {
            "enabled": false,
            "opacity": 5
        },
        "css": ""
    }
}`;


const configLoad = JSON.parse(localStorage.getItem('saferoom_config') ?? defaultConfig);
// const config = {...JSON.parse(baseConfig), ...configLoad}
const config = Object.assign(JSON.parse(baseConfig), configLoad)
console.log(config);


// -------------------------------------------------------------------------
//  Clockwork
// -------------------------------------------------------------------------

function startTime() {

    var today = new Date();

    let elem = document.getElementById('Clock');
    let elemDate = document.getElementById('Date');

    if (elem) {
        elem.innerHTML =  today.toLocaleTimeString();
    }

    if (elemDate) {
        elemDate.innerHTML = today.toLocaleTimeString();
        elemDate.innerHTML = today.toUTCString().split(' ').slice(0, 4).join(' ')
    }
    
    var t = setTimeout(startTime, 500);
}

// -------------------------------------------------------------------------
//  Google search
// -------------------------------------------------------------------------

const searchElem = document.getElementById('Search_Input'); 

function searchForPhrase(phrase, replace = false) {
    // if(replace) document.getElementById('Search_Input').value = phrase;
    window.location.href = `https://www.google.com/search?q=${phrase}`
}


function prepSearchHandling(e) {
    const searchElem = document.getElementById('Search_Input'); 

    searchElem.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            searchForPhrase(searchElem.value);
        }
    });
}


// -------------------------------------------------------------------------
//  Configuration editor button
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
//  Focus on the search input when pressing anykey if not already focused
// -------------------------------------------------------------------------

let allowKeyboard = false;

document.addEventListener("keydown", (e) => {

    if(allowKeyboard) return;

    if( e.keyCode === 18 ) {
        e.preventDefault();
    } else document.getElementById('Search_Input')?.focus();
}, false);

