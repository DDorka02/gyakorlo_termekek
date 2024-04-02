import { GYUMOLCSOK } from "./adatok.js";

const vasarolt = [];

// 1. feladat
function letrehozTablazat(tomb) {
    let txt = "<table>"
    for (let index = 0; index < tomb.length; index++) {
        txt += "<tr>"
        txt += "<td>"+GYUMOLCSOK[index].nev+"</td>"
        txt += "<td>"+GYUMOLCSOK[index].tomeg+"</td>"
        txt += "<td>"+GYUMOLCSOK[index].ar+"</td>"
        txt += "</tr>"  
    }
    txt += "</table>"
    console.log(txt)

    return txt

}
const ELEM = document.querySelector("#feladat_1")
ELEM.innerHTML += letrehozTablazat(GYUMOLCSOK)

// 2. feladat
function osszesit(tomb) {
    var osszeg = 0;
    for (let i = 0; i< tomb.length; i++)
        osszeg += tomb[i].tomeg
    return osszeg
    }

const ELEM2= document.getElementById("feladat_2")
ELEM2.innerHTML = `<p>A gyümölcsök súlya összesen: ${osszesit(GYUMOLCSOK)}g</p>`;
    


// 3. feladat
function vasarol(tomb) {
    var osszeg = 0;
    for (let i = 0; i< tomb.length; i++)
        osszeg += tomb[i].ar
    return osszeg
}
   
document.getElementById("feladat_3").innerHTML = `<p>A gyümölcsök ára összesen: ${vasarol(GYUMOLCSOK)}Ft</p>`;


const TRELEM =document.querySelectorAll("tr")
for (let index = 0; index < TRELEM.length; index++) {
    TRELEM[index].addEventListener("click",function(){
        GYUMOLCSOK[index].nev
        vasarolt.push(GYUMOLCSOK[index].nev)
    })

}


// 4. feladat
function torolEsemeny() {
    /*const ELEM4 =document.getElementById("feladat_4")
    ELEM4.innerHTML=`<button>`
    "</button>"
    ELEM4.addEventListener("click",function()){
        ELEM4.classList.add("hide")
}*/

}
