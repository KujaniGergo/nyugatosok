/**
 * @type {string[]} //Címsor adatainak típusa
 */
const cimSorTomb = ["Szerző","Mű","Fogalmak"] //címsor adatai




/**
 * @type {DataType[]} //Adat tömb elemeinek típusa
 */
const adatTomb = [ //Adattomb létrehozása

    { 
        szerzo: "Ady Endre", //Szerző adatai
        mu: "Őrizem a szemed", //Mű adatai
        fogalmak1: "Csinszka-vers", //Fogalmak 1 adatai
        fogalmak2: "hitvesi költészet", //Fogalmak 2 adatai
    },
    { 
        szerzo: "Babits Mihály", //Szerző adatai
        mu: "In Horatium", //Mű adatai
        fogalmak1: "Óda" //Fogalmak 1 adatai
    },
    { 
        szerzo: "Kosztolányi Dezső", //Szerző adatai
        mu: "A szegény kisgyermek panaszai", //Mű adatai
        fogalmak1: "versciklus", //Fogalmak 1 adatai
        fogalmak2: "freudizmus", //Fogalmak 2 adatai
    },
    { 
        szerzo: "Kosztolányi Dezső", //Szerző adatai
        mu: "Édes Anna", //Mű adatai
        fogalmak1: "regény",  //Fogalmak 1 adatai
    },
    {
        szerzo: "Móricz Zsigmond", //Szerző adatai
        mu: "Tragédia", //Mű adatai
        fogalmak1: "novella", //Fogalmak 1 adatai
        fogalmak2: "dzsentri", //Fogalmak 2 adatai
    }
]




/**
 * @type {HTMLDivElement} //Js ssection div
 */
const jsSecDiv = document.createElement("div"); //divet keszitek
/**
 * @type {HTMLTableElement} //Table típusa
 */
const table = document.createElement("table") //Tábla létrehozása
/**
 * @type {HTMLTableSectionElement}  //Thead típus
 */
const tableHead = document.createElement("thead"); //Címsor létrehozása
/**
 * @type {HTMLTableSectionElement} //Tbody Típusa
 */
const tableBody = document.createElement("tbody"); //Tábla törzs létrehozása
/**
 * @type {HTMLTableRowElement} //Sor típusa
 */
const cimSor = document.createElement("tr"); //Sor létrehozása
/**
 * @type {HTMLElement} //Checkbox típusa
 */
const checkBox = document.getElementById("tableselector") //Checkbox lekérése

jsSecDiv.id = "jssection"; //Id megadása
tableBody.id = "tb"; //Id megadása

//Tábla elemeinek összefűzése
document.body.appendChild(jsSecDiv) //Tábla elemeinek Összefűzése
table.appendChild(tableHead); //Tábla elemeinek Összefűzése
table.appendChild(tableBody); //Tábla elemeinek Összefűzése
tableHead.appendChild(cimSor); //Tábla elemeinek Összefűzése
jsSecDiv.appendChild(table); //Tábla elemeinek Összefűzése

cimSorKiiras(cimSorTomb,cimSor); //Függvény meghívása
tablaKiiras(adatTomb,tableBody); //Függvény meghívása
checkBoxFrissit(checkBox) //Függvény meghívása
checkBox.addEventListener("change", checkBoxValtozas) //Függvény meghívása
formAdatFeltoltes(jsSecDiv); //Függvény meghívása


//Js Eseménykezelő
/**
 * @type {HTMLFormElement} //Típus megadása
 */
jsSecDiv.addEventListener("submit", function(e){ //Event listener
    e.preventDefault() //Hogy nem fusson alapból
    /**
     * @type {HTMLFormElement}  //Típus megadása
     */
    const target = e.target //Target
    /**
     * @type {HTMLInputElement}  //Típus megadása
     */
    const inputSzerzo = target.querySelector("#elso") //Mezők léterhozása
    /**
     * @type {HTMLInputElement}  //Típus megadása
     */
    const inputMu = target.querySelector("#masodik") //Mezők léterhozása
    /**
     * @type {HTMLInputElement}  //Típus megadása
     */
    const inputFogalomElso = target.querySelector("#harmadik") //Mezők léterhozása
    /**
     * @type {HTMLInputElement}  //Típus megadása
     */
    const inputFogalomMasodik = target.querySelector("#negyedik") //Mezők léterhozása

    /**
     * @type {NodeList} //Error ostály listálya
     */
    const errorDivList = target.querySelectorAll(".error") //Error div list létrehozása
    for(const errorDiv of errorDivList){ //Lista bejárása
        errorDiv.innerText = "" //Szöveg törlése
    }

    if(osszMezoValidalas(inputSzerzo, inputMu, inputFogalomElso, target)){ //Mezők validálása függvénnyel

    /**
     * @type {string}  //Típus megadása
     */
    const szerzoErtek = inputSzerzo.value //Value megadása
    /**
     * @type {string}  //Típus megadása
     */
    const muErtek = inputMu.value //Value megadása
    /**
     * @type {string}  //Típus megadása
     */
    const fogalomElsoErtek = inputFogalomElso.value //Value megadása
    /**
     * @type {string}  //Típus megadása
     */
    const fogalomMasodikErtek = inputFogalomMasodik.value //Value megadása
    /**
     * @type {string[]}  //Típus megadása
     */
    const ujObjektum = {} //Új objektum deklarálás

    ujObjektum.szerzo = szerzoErtek //Az objeltum elemei
    ujObjektum.mu = muErtek //Az objeltum elemei
    ujObjektum.fogalmak1 = fogalomElsoErtek //Az objeltum elemei
    ujObjektum.fogalmak2 = fogalomMasodikErtek //Az objeltum elemei
    adatTomb.push(ujObjektum) //Az objeltum elemei

    /**
     * @type {HTMLTableSectionElement}  //Típus megadása
     */
    const tBody = document.getElementById("tb") //Tbody lekérése
    ujSorHozzaAd(ujObjektum, tBody) //Új sor hozzáadása

    // Űrlap mezők törlése
    inputSzerzo.value = "" //Értékeke törlése
    inputMu.value = "" //Értékeke törlése
    inputFogalomElso.value = "" //Értékeke törlése
    inputFogalomMasodik.value = "" //Értékeke törlése
    }
})

//Html eseménykezelő
/**
 * @type {HTMLFormElement} //Típus megadása
 */
const htmlsection = document.getElementById("htmlform") //Html section lekérése
htmlsection.addEventListener("submit", function(e){ //Event listener
    e.preventDefault() //Hogy nem fusson alapból
    /**
     * @type {HTMLFormElement}  //Típus megadása
     */
    const target = e.target //Target
    /**
     * @type {HTMLInputElement}  //Típus megadása
     */
    const inputSzerzo = target.querySelector("#elso") //Mezők léterhozása
    /**
     * @type {HTMLInputElement}  //Típus megadása
     */
    const inputMu = target.querySelector("#masodik") //Mezők léterhozása
    /**
     * @type {HTMLInputElement}  //Típus megadása
     */
    const inputFogalomElso = target.querySelector("#harmadik") //Mezők léterhozása
    /**
     * @type {HTMLInputElement}  //Típus megadása
     */
    const inputFogalomMasodik = target.querySelector("#negyedik") //Mezők léterhozása



    if(osszMezoValidalas(inputSzerzo, inputMu, inputFogalomElso, target)){ //Mezők validálása függvénnyel

    /**
     * @type {string}  //Típus megadása
     */
    const szerzoErtek = inputSzerzo.value //Value megadása
    /**
     * @type {string}  //Típus megadása
     */
    const muErtek = inputMu.value //Value megadása
    /**
     * @type {string}  //Típus megadása
     */
    const fogalomElsoErtek = inputFogalomElso.value //Value megadása
    /**
     * @type {string}  //Típus megadása
     */
    const fogalomMasodikErtek = inputFogalomMasodik.value //Value megadása
    /**
     * @type {string[]}  //Típus megadása
     */
    const ujObjektum = {} //Új objektum deklarálás

    ujObjektum.szerzo = szerzoErtek //Az objeltum elemei
    ujObjektum.mu = muErtek //Az objeltum elemei
    ujObjektum.fogalmak1 = fogalomElsoErtek //Az objeltum elemei
    ujObjektum.fogalmak2 = fogalomMasodikErtek //Az objeltum elemei
    adatTomb.push(ujObjektum) //Az objeltum elemei

    /**
     * @type {HTMLTableSectionElement}  //Típus megadása
     */
    const tBody = document.getElementById("htmlBody") //Tbody lekérése
    ujSorHozzaAd(ujObjektum, tBody) //Új sor hozzáadása

    // Űrlap mezők törlése
    inputSzerzo.value = "" //Értékeke törlése
    inputMu.value = "" //Értékeke törlése
    inputFogalomElso.value = "" //Értékeke törlése
    inputFogalomMasodik.value = "" //Értékeke törlése
    }
})