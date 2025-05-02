console.log("hello CSS!");

let joint = document.querySelector(".joint")
let body = document.querySelector("body")
let hoofd = document.querySelector(".hoofd")
let lijf = document.querySelector(".lijf")

let geelknop = document.querySelector("#geel")
let roodknop = document.querySelector("#rood")
let groenknop = document.querySelector("#groen")
let blauwknop = document.querySelector("#blauw")
let plant = document.querySelector(".plant")
let wietpot = document.querySelector(".wietpot")


joint.addEventListener("click", trip)
function trip() {
    body.classList.toggle("bunny")
}


hoofd.addEventListener("click", rotate)
function rotate() {
    hoofd.classList.toggle("rotation")
}


geelknop.addEventListener("click", kleurgeel)
function kleurgeel() {
    lijf.classList.add("geel")
    lijf.classList.remove("rood")
    lijf.classList.remove("groen")
    lijf.classList.remove("blauw")
}


roodknop.addEventListener("click", kleurrood)
function kleurrood() {
    lijf.classList.remove("geel")
    lijf.classList.add("rood")
    lijf.classList.remove("groen")
    lijf.classList.remove("blauw")
}

groenknop.addEventListener("click", kleurgroen)
function kleurgroen() {
    lijf.classList.remove("geel")
    lijf.classList.remove("rood")
    lijf.classList.add("groen")
    lijf.classList.remove("blauw")
}


blauwknop.addEventListener("click", kleurblauw)
function kleurblauw() {
    lijf.classList.remove("geel")
    lijf.classList.remove("rood")
    lijf.classList.remove("groen")
    lijf.classList.add("blauw")
}

// wietpot.addEventListener("click", growing)
// function growing() {
//     wietpot.classList.toggle("plant")
// }

// wietpot.addEventListener("click", growing)
// function growing() {
//     lijf.classList.add("plant-visable")
//     lijf.classList.remove("plant")
// }


wietpot.addEventListener("click", growing)
function growing() {
    plant.classList.toggle("plant-visable")
}


