



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
};



/**
 * //Checkbx állapoát ellenőrzi
 * @param {Event} e //Az esemény
 * @returns {void} //Amivel visszatér
 */
function checkBoxValtozas(e){ //Eventlistener függvény
    /**
     * @type {HTMLInputElement} //Típus megadása
     */
    const target = e.target //Target változó
    checkBoxFrissit(target) //Csheck box függvény mehgívás
}



/**
 * Függvény ami a checkbox állapotát ellenőrzi
 * @param {HTMLInputElement} input //A droppdown típusa
 * @returns {void} //Amivel visszatér a függvény
 */
function checkBoxFrissit(input){ //A függvény definiálása
    /**
     * @type {HTMLDivElement} //Típus megadása
     */
    const htmlSec = document.getElementById("htmlsection") //Html szekció

    /**
     * @type {HTMLDivElement} //Típus megadása
     */
    const jsSection = document.getElementById("jssection") //Js szekció

    
    if(input.checked){ //Ha a droppdown html-en van
        jsSection.classList.add("hide") //Js rejtése
        htmlSec.classList.remove("hide") //Html megjelenítése
    }
    else{ //Ha a droppdown js-en van
        jsSection.classList.remove("hide") //Js megjelenítése
        htmlSec.classList.add("hide") //Html rejtése
    }
}

