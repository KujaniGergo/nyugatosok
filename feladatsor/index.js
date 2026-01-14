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
 * @type {HTMLFormElement} //A from típusa
 */
const jsForm = document.createElement("form") //Form létrehozása
jsForm.id = "jsform" //Form id megadása
jsSecDiv.appendChild(jsForm)  //Form a div hez fűzése
 formGeneralas("Szerző","elso","szerzo",jsForm) //Függvény meghívása a megfelelő paraméterekkel
formGeneralas("Mű","masodik","mu",jsForm)  //Függvény meghívása a megfelelő paraméterekkel
formGeneralas("Fogalom1","harmadik","fogalom1",jsForm)  //Függvény meghívása a megfelelő paraméterekkel
formGeneralas("Fogalom2","negyedik","fogalom2", jsForm)   //Függvény meghívása a megfelelő paraméterekkel