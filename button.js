let img1  = document.getElementById("img1")
let img2  = document.getElementById("img2")
let img3  = document.getElementById("img3")
let clear44  = document.getElementById("clear2")

let body = document.querySelector("body")
let dark = document.getElementById("dark")
let ligth = document.getElementById("ligth")

function darkmode() {
    body.style.backgroundColor = "black"
    dark.style.display = "none"
    ligth.style.display = "block"


}

function ligthmode() {
    body.style.backgroundColor = "white"
    dark.style.display = "block"
    ligth.style.display = "none"


}


function showimg1() {
    img1.style.display = "block"
    img2.style.display = "none"
    img3.style.display = "none"

}

function clearmode() {
    img1.style.display = "none"
    img2.style.display = "none"
    img3.style.display = "none"
    clear44.style.display = "block"

}

function showimg2() {
    img1.style.display = "none"
    img2.style.display = "block"
    img3.style.display = "none"

}

function showimg3() {
    img1.style.display = "none"
    img2.style.display = "none"
    img3.style.display = "block"
    

}

