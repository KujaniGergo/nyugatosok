/**
 * @type {string[]} //Címsor adatainak típusa
 */
const cimSorTomb = ["Szerző","Mű","Fogalmak"] //címsor adatai

/**
 * @typedef {{szerzo:string,mu:string,fogalmak1:string,fogalmak2?:string}} DataType //A tömb elemeinek típusa
 */

/**
 * @type {DataType[]} //Adat tömb elemeinek típusa
 */
const adatTomb = [ //Adattomb létrehozása

    { 
        szerzo: "Ady Endre", //Szerző adatai
        mu: "Őrizem a szemed", //Mű adatai
        fogalmak1: "Csinszka vers", //Fogalmak 1 adatai
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

jsSecDiv.id = "jssection"; //Id megadása

//Tábla elemeinek összefűzése
document.body.appendChild(jsSecDiv) //Tábla elemeinek Összefűzése
table.appendChild(tableHead); //Tábla elemeinek Összefűzése
table.appendChild(tableBody); //Tábla elemeinek Összefűzése
tableHead.appendChild(cimSor); //Tábla elemeinek Összefűzése
jsSecDiv.appendChild(table) //Tábla elemeinek Összefűzése


/**
 * Függvény a címsor kiírására
 * @param {string[]} cimSorTomb //Adat tömb amit bejárunk a ciklusban
 * @param {HTMLTableRowElement} parent //Amihez fűzzük a cellákat
 * @returns {void} //Amivel visszatér a függvény
 */
function cimSorKiiras(cimSorTomb, parent){//Függvény definiálása
    for(const cimCell of cimSorTomb){ //Adat tömb bejárása
        /**
        * @type {HTMLHeadElement} //Címsor cella típusa
        */
       const th = document.createElement("th") //Címsor cella látrehozása
       parent.appendChild(th) //Cella hozzáfűzése a címsorhoz
       th.innerText = cimCell //Cella feltöltése a Cimsor tömb adatival
    }
}
cimSorKiiras(cimSorTomb,cimSor); //Függvény meghívása


/**
 * Függvény a cellák generálására
 * @param {string} tartalom //Amit inner-textelünk a cellában
 * @param {HTMLTableRowElement} parent //A sor amihez fűzzük a cellát
 * @returns {HTMLTableCellElement} //A cella típusa amit visszaad a függvény
 */
function cellaLetrehozas(tartalom, parent){ //Függvény definiálása
    /**
     * @type {HTMLTableCellElement} //A cella típusa
     */
    const cell = document.createElement("td"); //Cella létrehozása
    parent.appendChild(cell); //Amihez fűzzük a cellát
    cell.innerText = tartalom; //A cella tartalma

    return cell //A kész cella mait kapunk
}


/**
 * Függvény ami kiírja a táblát
 * @param {DataType[]} adatTomb //A tömb amiből kiírjuk az adatokat
 * @param {HTMLTableSectionElement} body //A body amiben generáljuk a cellákat
 * @returns {void} //A függvény visszatérési értéke
 */
function renderTable(adatTomb, body){  //Függvény deklarálása

    body.innerHTML = ""; //A body ürítése hogy ne írja ki az egész függvényt mindig

    for(const a of adatTomb){  //Adat tömb bejárása
        
        /**
         * @type {HTMLTableRowElement} //Sor típusának megadása
         */
        const sor = document.createElement("tr") //Sor létrehozása
        body.appendChild(sor) //Sor a bodyhot fűzése

        /**
         * @type {HTMLTableCellElement}  //Cella típusának megadása
         */
        cellaLetrehozas(a.szerzo, sor)  //Cella generálás függvénnyel

        /** 
         * @type {HTMLTableCellElement} //Cella típusának megadása
         */
        cellaLetrehozas(a.mu, sor) //Cella generálás függvénnyel

        /**
         * @type {HTMLTableCellElement} //Cella típusának megadása
         */
        const cella3 = cellaLetrehozas(a.fogalmak1, sor) //Cella generálás függvénnyel

        if(a.fogalmak2){ //Elágazása hogy fogalmak2 undefine-e, ha nem új cella létrehozása
            /**
             * @type {HTMLTableCellElement} //Cella típusának megadása
             */
            cellaLetrehozas(a.fogalmak2, sor) //Cella generálás függvénnyel
        }
        else{ //Ha mégs utolsó két cella összevonása
            cella3.colSpan = 2 //cellák összevonása
        }
    }
}
renderTable(adatTomb,tableBody); //Függvény hívás



/**
 * Függvény ami egy új sort ad hozzá a táblához
 * @param {DataType} ujSor //Új sor típusa
 * @param {HTMLTableSectionElement} tableBody //A tömb amit bejárunk
 * @returns {void} //Güggvény visszatérési értéke
 */
function ujSorHozzaAd(ujSor, tableBody){ //Függvény definiálása
    /**
     * @type {HTMLTableRowElement} //Sor typusa
     */
    const row = document.createElement("tr"); //Sor létrehozása
    tableBody.appendChild(row); //Sor a bodyhoz fűzése

    /**
     * @type {HTMLTableCellElement} //Cella típus
     */
    cellaLetrehozas(ujSor.szerzo, row); //Cella létrehozása

    /**
     * @type {HTMLTableCellElement} //Cella típus 
     */
    cellaLetrehozas(ujSor.mu, row); //Cella létrehozása

    /**
     * @type {HTMLTableCellElement} //Cella típus
     */
    const cell3 = cellaLetrehozas(ujSor.fogalmak1, row); //Cella létrehozása

    if(ujSor.fogalmak2){ //Megnézzük fogalmak 2 undefined e
     /**
     * @type {HTMLTableCellElement} //Cella típus
     */
    cellaLetrehozas(ujSor.fogalmak2, row); //Cella létrehozása

    }else{ //Ha nem utolsó 2 cella összevonása
    cell3.colSpan = 2; //A cellák összevonása
    }
}



/**
 * Js gomb szimpla
 * @type {HTMLButtonElement} //A gomb típusa
 */
const szimplaJsGomb = document.createElement("button"); //Gomb létrehozása
szimplaJsGomb.innerText = "Szimpla sor"; //Gomb szövegének megadása
jsSecDiv.appendChild(szimplaJsGomb); //Gomb body hoz csatolása

szimplaJsGomb.addEventListener("click", function(){ //Event listener hogy tudjuk mikor kattintanak a gombra
    /**
     * @type {DataType[]} //Új sor adatainak típusa
     */
    const ujSor = { //Új sor adatai
        szerzo: "Test Szerző", //Szerző
        mu: "Teszt Mű", //Mű
        fogalmak1: "Teszt fogalmak 1" //Fogalmak 1
    }
    adatTomb.push(ujSor); //Új sor hozzáadása a teljes tömbhöz
    renderTable(adatTomb, tableBody); //Függvény renderekése
});

/**
 * Js gomb dupla
 * @type {HTMLButtonElement} //A gomb típusa
 */
const duplaJsGomb = document.createElement("button"); //Gomb létrehozása
duplaJsGomb.innerText = "Dupla sor"; //Gomb szövegének megadása
jsSecDiv.appendChild(duplaJsGomb); //Gomb body hoz csatolása

duplaJsGomb.addEventListener("click", function(){ //Event listener hogy tudjuk mikor kattintanak a gombra
    /**
     * @type {DataType[]} //Új sor adatainak típusa
     */
    const ujSor = { //Új sor adatai
        szerzo: "Test Szerző", //Szerző
        mu: "Teszt Mű", //Mű
        fogalmak1: "Teszt fogalmak 1", //Fogalmak 1
        fogalmak2: "Teszt fogalmak 2" //Fogalmak 2
    }
    adatTomb.push(ujSor); //Új sor hozzáadása a teljes tömbhöz
    renderTable(adatTomb, tableBody); //Függvény renderekése
});

/**
 * Html gomb szimpla
 * @type {HTMLButtonElement} //A gomb típusa
 */
const szimplaHtmlGomb = document.getElementById("szimpla");  //Gomb létrehozása
szimplaHtmlGomb.innerText = "Szimpla sor"; //Gomb szövegének megadása
szimplaHtmlGomb.addEventListener("click", function(){ //Event listener hogy tudjuk mikor kattintanak a gombra
    /**
     * @type {DataType[]} //Új sor adatainak típusa
     */
    const ujSor = { //Új sor adatai
        szerzo: "Test Szerző", //Szerző
        mu: "Teszt Mű", //Mű
        fogalmak1: "Teszt fogalmak 1" //Fogalmak 1
    }
    /**
     * @type {HTMLDivElement} //A lekért table body típusa
     */
    const tableBody = document.getElementById("htmlBody")  //Table body lekérése


    ujSorHozzaAd(ujSor, tableBody); //Sor hozzáadás függvény meghívása
});

/**
 * Html gomb dupla
 * @type {HTMLButtonElement} //A gomb típusa
 */
const duplaHtmlGomb = document.getElementById("dupla"); //Gomb létrehozása
duplaHtmlGomb.innerText = "Dupla sor"; //Gomb szövegének megadása
duplaHtmlGomb.addEventListener("click", function(){ //Event listener hogy tudjuk mikor kattintanak a gombra
    /**
     * @type {DataType[]} //Új sor adatainak típusa
     */
    const ujSor = { //Új sor adatai
        szerzo: "Test Szerző", //Szerző
        mu: "Teszt Mű", //Mű
        fogalmak1: "Teszt fogalmak 1", //Fogalmak 1
        fogalmak2: "Teszt fogalmak 2" //Fogalmak 2
    }
    /**
     * @type {HTMLDivElement} //A lekért table body típusa
     */
    const tableBody = document.getElementById("htmlBody")  //Table body lekérése


    ujSorHozzaAd(ujSor, tableBody); //Sor hozzáadás függvény meghívása
});


/**
 * @type {HTMLSelectElement} //Típis megadása
 */
const selectTabla = document.getElementById("tableselector") //Droppdown lekérése
selectTabla.addEventListener("change", function(e){ //Eventlistener

    /**
     * @type {HTMLSelectElement} //Típus megadása
     */
    const target = e.target //Target amit figyelünk

    /**
     * @type {HTMLDivElement} //Típus megadása
     */
    const htmlSec = document.getElementById("htmlsection") //Html szekció

    /**
     * @type {HTMLDivElement} //Típus megadása
     */
    const jsSection = document.getElementById("jssection") //Js szekció

    
    if(target.checked){ //Ha a droppdown html-en van
        jsSection.classList.add("hide") //Js rejtése
        htmlSec.classList.remove("hide") //Html megjelenítése
    }
    else{ //Ha a droppdown js-en van
        jsSection.classList.remove("hide") //Js megjelenítése
        htmlSec.classList.add("hide") //Html rejtése
    }
});
