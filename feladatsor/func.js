/**
 * @typedef {{szerzo:string,mu:string,fogalmak1:string,fogalmak2?:string}} DataType //A tömb elemeinek típusa
 */



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
function tablaKiiras(adatTomb, body){  //Függvény deklarálása

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

    if(newRow.work2 || newRow.concept2){  //Megnézzük fogalmak 2 undefined e
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



/**
 * Függvény a form generálására
 * @param {string} cimkeSzoveg //A label szövege
 * @param {string} id //Ad id
 * @param {string} nev //A neve
 * @param {HTMLFormElement} form //A form
 * @returns {void} //Amivel visszatér a függvény
 */
function formGeneralas(cimkeSzoveg, id, nev, form){ //Függvény deklarálás

    /**
     * @type {HTMLDivElement} //Típus megadása
     */
    const formDiv = document.createElement("div") //A from div létrehozása
    form.appendChild(formDiv) //A formhoz hozzáfűzzük

    /**
     * @type {HTMLLabelElement} //Típus megadása
     */
    const label = document.createElement("label") //Lable létrehozása
    label.htmlFor = id //Id megadása
    label.innerText = cimkeSzoveg //Inner textelés a szöveggel
    formDiv.appendChild(label) //Label hozzáfűzése a formdiv hez

     /**
     * @type {HTMLInputElement} //Típus megadása
     */
    const input = document.createElement("input") //Input mező létrehozása
    input.id = id //Id megadása
    input.nev = nev //Név megadása
    formDiv.appendChild(input) //Form divhez fűzése

    /**
     * @type {HTMLDivElement} //Típus megadása
     */
    const error = document.createElement("div") //Error létrehozása
    error.classList.add("error") //Class megadása
    formDiv.appendChild(error) //Form div hez fűzés
}



/**
 * Fuggveny ami egy formot hoz létre
 * @param {HTMLDivElement} section //Form szekció
 * @returns {HTMLFormElement} //Html element a visszaadodd form
 */
function formAdatFeltoltes(section){ //Függvény definiálás
    /**
     * @type {HTMLFormElement} //A from típusa
     */
    const jsForm = document.createElement("form") //Form létrehozása
    jsForm.id = "jsform" //Form id megadása
    section.appendChild(jsForm)  //Form a div hez fűzése


    /**
     * @type {{cimke:string,id:string,nev:string}[]} //A mezők típusa
     */
    const formMezok = [ //A mezők tömb
        { 
            cimke: "Szerző", //Cimke Adat
            id: "elso", //Id Adat
            nev: "szerzo" //Név Adat
        },
        { 
            cimke: "Mű", //Cimke Adat
            id: "masodik", //Id Adat
            nev: "mu" //Név Adat
        },
        { 
            cimke: "Fogalom1", //Cimke Adat
            id: "harmadik", //Id Adat
            nev: "fogalom1" //Név Adat
        },
        { 
            cimke: "Fogalom2", //Cimke Adat
            id: "negyedik", //Id Adat
            nev: "fogalom2" //Név Adat
        }
    ]

    for(const mezo of formMezok){formGeneralas(mezo.cimke, mezo.id, mezo.nev, jsForm)} //A from geneálása a tömb adataiból
    /**
     * @type {HTMLButtonElement} //Gomb típusa
     */
    const formGomb = document.createElement("button") //Gomb létrehozása
    formGomb.innerText = "Hozzáad" //Gomsz szövegének megadása
    jsForm.appendChild(formGomb) //Gomb formhoz fűzése
    return jsForm //Kész form
}



/**
 * Függvény a form mezőinek vizsgálatára
 * @param {HTMLInputElement} bemenet //Input mező típusa
 * @param {string} error //Az error üzenet
 * @returns {boolean} //Visszatérési érték
 */
function mezokVizsgalata(bemenet, error){ //Függvény deklarálás

    /**
     * @type {boolean} //Típus megadása
     */
    let valid = true //Valid alapból igaz
    if(bemenet.value == ""){ //Ha az input üres
        /**
         * @type {HTMLDivElement} //Típus megadása
         */
        const inputParent = bemenet.parentElement //InpuParent létrehozása

        /**
         * @type {HTMLDivElement} //Típus megadása
         */
        const errorDiv = inputParent.querySelector(".error") //Error div lekérése
        errorDiv.innerText = error //Feltöltése szöveggel
        valid = false //Valid hamisra állítása
    }
    return valid //Vissztér ezzel a függvény
};



/**
 * Validálja az inputokat és ha invalid hibaüzenetet ad
 * @param {HTMLInputElement} inputSzerzo //Szerző input típus
 * @param {HTMLInputElement} inputMuElso //Mű input típus
 * @param {HTMLInputElement} inputFogalomElso //Fogalom 1 input típus
 * @param {HTMLFormElement} form //A form típusa
 * @returns {boolean} //Bool visszatérési érték
 */
function osszMezoValidalas(inputSzerzo, inputMuElso, inputFogalomElso, form){  //Func deklarálása és paraméterek megadása
    
    /**
     * @type {boolean} //Típus megadása
     */
    let valid = true //Igaz érték adása a valid nak

    
    /**
     * @type {NodeList} //Típus megadása
     */
    const errorDivList = form.querySelectorAll(".error") //Error class lekérése
    for(const errorDiv of errorDivList){ //Error div lista bejárása
        errorDiv.innerText = "" //Error ürítése
    }

    if(!mezokVizsgalata(inputSzerzo, "Szerző kitöltése kötelező")){ valid = false} //Függvény meghívása és paraméterek megadása

    if(!mezokVizsgalata(inputMuElso, "Mű kitöltése kötelező")){valid = false} //Függvény meghívása és paraméterek megadása

    if(!mezokVizsgalata(inputFogalomElso, "Fogalom1 kitöltése kötelező")){valid = false} //Függvény meghívása és paraméterek megadása

    return valid //Visszatér a valid bool értékével
}