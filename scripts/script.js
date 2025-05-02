console.log("hello CSS!");

let joint = document.querySelector(".joint")
let body = document.querySelector("body")
let hoofd = document.querySelector(".hoofd")
let lijf = document.querySelector(".lijf")

let geelknop = document.querySelector("#geel")
let roodknop = document.querySelector("#rood")
let groenknop = document.querySelector("#groen")
let blauwknop = document.querySelector("#blauw")
let witknop = document.querySelector("#naked")

let censored = document.querySelector(".censored")

let plant = document.querySelector(".plant")
let wietpot = document.querySelector(".wietpot")

let h1Element = document.querySelector("h1")
let titel = document.querySelector(".letters")


// bewegende achtergrond
joint.addEventListener("click", trip)
function trip() {
    body.classList.toggle("bunny")
}



// animerend hoofd 
hoofd.addEventListener("click", rotate)
function rotate() {
    hoofd.classList.toggle("rotation")
}


// kleur van de kleding aanpassen 
geelknop.addEventListener("click", kleurgeel)
function kleurgeel() {
    lijf.classList.add("geel")
    lijf.classList.remove("rood")
    lijf.classList.remove("groen")
    lijf.classList.remove("blauw")
    lijf.classList.remove("naked")
    censored.classList.remove("censored-visable")
}

roodknop.addEventListener("click", kleurrood)
function kleurrood() {
    lijf.classList.remove("geel")
    lijf.classList.add("rood")
    lijf.classList.remove("groen")
    lijf.classList.remove("blauw")
    lijf.classList.remove("naked")
    censored.classList.remove("censored-visable")
}

groenknop.addEventListener("click", kleurgroen)
function kleurgroen() {
    lijf.classList.remove("geel")
    lijf.classList.remove("rood")
    lijf.classList.add("groen")
    lijf.classList.remove("blauw")
    lijf.classList.remove("naked")
    censored.classList.remove("censored-visable")
}

blauwknop.addEventListener("click", kleurblauw)
function kleurblauw() {
    lijf.classList.remove("geel")
    lijf.classList.remove("rood")
    lijf.classList.remove("groen")
    lijf.classList.add("blauw")
    lijf.classList.remove("naked")
    censored.classList.remove("censored-visable")
}

witknop.addEventListener("click", naakt)
function naakt() {
    lijf.classList.remove("geel")
    lijf.classList.remove("rood")
    lijf.classList.remove("groen")
    lijf.classList.remove("blauw")
    lijf.classList.add("naked")
    censored.classList.add("censored-visable")

}


// wietplant zichtbaar maken
wietpot.addEventListener("click", growing)
function growing() {
    plant.classList.toggle("plant-visable")
}



// titel veranderen
titel.addEventListener("click", groet)
function groet() {
    h1Element.textContent = "High Bunny"
}

/* Van docent */
// snel toetsen
document.addEventListener("keydown", controleerToetsen)

function controleerToetsen(event) {
    //    snel toets voor activeren van de achtergrond
    if (event.key == 's') {
        console.log("toets s ingedrukt")
        trip()

        //    snel toets voor activeren van de wietplant
    } else if (event.key == 'p') {
        console.log("toets p ingedrukt")
        growing()
    }
}


/* Van docent */
// random kleuren generator voor de kleding
let kleurenlijst = [kleurgeel, kleurrood, kleurgroen, kleurblauw, naakt]
let randomKnop = document.querySelector("#shuffle")
let laatstekleur = 0

function randomkleur() {
    randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber != laatstekleur) {
        laatstekleur = randomNumber
        kleurenlijst[randomNumber]
    } else {
        randomkleur()
    }

    kleurenlijst[randomNumber]()
    laatstekleur = randomNumber
}

randomKnop.addEventListener("click", randomkleur)