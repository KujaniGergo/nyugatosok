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

//Tábla elemeinek összefűzése
document.body.appendChild(jsSecDiv) //Tábla elemeinek Összefűzése
table.appendChild(tableHead); //Tábla elemeinek Összefűzése
table.appendChild(tableBody); //Tábla elemeinek Összefűzése
tableHead.appendChild(cimSor); //Tábla elemeinek Összefűzése
jsSecDiv.appendChild(table); //Tábla elemeinek Összefűzése

cimSorKiiras(cimSorTomb,cimSor); //Függvény meghívása
renderTable(adatTomb,tableBody); //Függvény meghívása
checkBoxFrissit(checkBox) //Függvény meghívása
checkBox.addEventListener("change", checkBoxValtozas) //Függvény meghívása



//Form generálás
/**
 * @type {HTMLFormElement} //Típus megadása
 */
const jsForm = document.createElement("form") //Űrlap elem létrehozása
jsForm.id = "jsform" //Űrlap id beállítása
jsSecDiv.appendChild(jsForm) //Űrlap hozzáadása a jshez
 
/**
 * @type {HTMLDivElement} //Típus megadása
 */
const szerzoDiv = document.createElement("div") //Szerző létrehozása
jsForm.appendChild(szerzoDiv) //hozzáadása az űrlaphoz

/**
 * @type {HTMLLabelElement} //Típus megadása
 */
const szerzoCimke = document.createElement("label") //Label létrehozása
szerzoCimke.htmlFor = "elso" //abel összekötése az inputtal
szerzoCimke.innerText = "Szerző" //Label szövegének megadása
szerzoDiv.appendChild(szerzoCimke) //Label hozzáadása a div hez
szerzoDiv.appendChild(document.createElement("br")) //Sortörés

/**
 * @type {HTMLInputElement} //Típus megadása
 */
const szerzoInput = document.createElement("input") //Input létrehozása
szerzoInput.id = "elso" //Input id megadása
szerzoInput.name = "szerzo" //Input name megadása
szerzoDiv.appendChild(szerzoInput) //Input hozzáadása divhez

/**
 * @type {HTMLDivElement} //Típus megadása
 */
const szerzoError = document.createElement("div") //Hibaüzenet
szerzoError.classList.add("error") //Error class
szerzoDiv.appendChild(szerzoError) //Error div hez fűzés
szerzoDiv.appendChild(document.createElement("br")) //Sortörés


/**
 * @type {HTMLDivElement} //Típus megadása
 */
const muDiv = document.createElement("div") //Mű létrehozása
jsForm.appendChild(muDiv) //hozzáadása az űrlaphoz

/**
 * @type {HTMLLabelElement} //Típus megadása
 */
const muCimke = document.createElement("label") //Label létrehozása
muCimke.htmlFor = "masodik" //Label összekötése az inputtal
muCimke.innerText = "Mű" //Label szövegének megadása
muDiv.appendChild(muCimke) //Label hozzáadása a div hez
muDiv.appendChild(document.createElement("br")) //Sortörés

/**
 * @type {HTMLInputElement} //Típus megadása
 */
const muInput = document.createElement("input") //Input létrehozása
muInput.id = "masodik" //Input id megadása
muInput.name = "mu" //Input name megadása
muDiv.appendChild(muInput) //Input hozzáadása divhez

/**
 * @type {HTMLDivElement} //Típus megadása
 */
const muError = document.createElement("div") //Hibaüzenet
muError.classList.add("error") //Error class
muDiv.appendChild(muError) //Error div hez fűzés
muDiv.appendChild(document.createElement("br")) //Sortörés


/**
 * @type {HTMLDivElement} //Típus megadása
 */
const fogalomEgyDiv = document.createElement("div") //Fogalom1 létrehozása
jsForm.appendChild(fogalomEgyDiv) //hozzáadása az űrlaphoz

/**
 * @type {HTMLLabelElement} //Típus megadása
 */
const fogalomEgyCimke = document.createElement("label") //Label létrehozása
fogalomEgyCimke.htmlFor = "harmadik" //Label összekötése az inputtal
fogalomEgyCimke.innerText = "Fogalom1" //Label szövegének megadása
fogalomEgyDiv.appendChild(fogalomEgyCimke) //Label hozzáadása a div hez
fogalomEgyDiv.appendChild(document.createElement("br")) //Sortörés

/**
 * @type {HTMLInputElement} //Típus megadása
 */
const fogalomEgyinput = document.createElement("input") //Input létrehozása
fogalomEgyinput.id = "harmadik" //Input id megadása
fogalomEgyinput.name = "fogalom1" //Input name megadása
fogalomEgyDiv.appendChild(fogalomEgyinput) //Input hozzáadása divhez

/**
 * @type {HTMLDivElement} //Típus megadása
 */
const fogalomEgyError = document.createElement("div") //Hibaüzenet
fogalomEgyError.classList.add("error") //Error class
fogalomEgyDiv.appendChild(fogalomEgyError) //Error divhez fűzés
fogalomEgyDiv.appendChild(document.createElement("br")) //Sortörés


/**
 * @type {HTMLDivElement} //Típus megadása
 */
const fogalomKettoDiv = document.createElement("div") //Fogalom2 létrehozása
jsForm.appendChild(fogalomKettoDiv) //hozzáadása az űrlaphoz

/**
 * @type {HTMLLabelElement} //Típus megadása
 */
const fogalomKettoCimke = document.createElement("label") //Label létrehozása
fogalomKettoCimke.htmlFor = "negyedik" //Label összekötése az inputtal
fogalomKettoCimke.innerText = "Fogalom2" //Label szövegének megadása
fogalomKettoDiv.appendChild(fogalomKettoCimke) //Label hozzáadása a div hez
fogalomKettoDiv.appendChild(document.createElement("br")) //Sortörés

/**
 * @type {HTMLInputElement} //Típus megadása 
 */
const fogalomKettoInput = document.createElement("input") //Input létrehozása
fogalomKettoInput.id = "negyedik" //Input id megadása
fogalomKettoInput.name = "fogalom2" //Input name megadása
fogalomKettoDiv.appendChild(fogalomKettoInput) //Input hozzáadása div hez

/**
 * @type {HTMLDivElement} //Típus megadása
 */
const fogalomKettoError = document.createElement("div") //Hibaüzenet
fogalomKettoError.classList.add("error") //Error class
fogalomKettoDiv.appendChild(fogalomKettoError) //Error div hez fűzés
fogalomKettoDiv.appendChild(document.createElement("br")) //Sortörés


/**
 * @type {HTMLButtonElement} //Típus megadása
 */
const formGomb = document.createElement("button") //Gomb létrehozása
formGomb.innerText = "Hozzáadás" //Gomb szövegének megadása
jsForm.appendChild(formGomb) //Gomb hozzáadása az űrlaphoz

