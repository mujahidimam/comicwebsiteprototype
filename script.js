const sd = document.getElementsByClassName("kategorisd")
const smp = document.getElementsByClassName("kategorismp")
const sma = document.getElementsByClassName("kategorisma")
const umum = document.getElementsByClassName("kategoriumum")
const sd1 = document.getElementsByClassName("kategorisd1")
const smp1 = document.getElementsByClassName("kategorismp1")
const sma1 = document.getElementsByClassName("kategorisma1")
const umum1 = document.getElementsByClassName("kategoriumum1")
const hilang = document.getElementsByClassName("hilang")
const lombabox = document.getElementsByClassName("lombabox")


const kategorisd = document.getElementsByClassName("kategorisd10")
const kategorismp = document.getElementsByClassName("kategorismp10")
const kategorisma = document.getElementsByClassName("kategorisma10")
const kategoriumum = document.getElementsByClassName("kategoriumum10")
const pendaftarankolektif = document.getElementsByClassName("pendaftarankolektif")



let box = document.getElementsByClassName("box")

const boxKategori = document.getElementsByClassName("conteiner1")
const buttonindividu = document.getElementsByClassName("daftarindividu")
const buttonkolektif = document.getElementsByClassName("daftarkolektif")
const conteiner3 = document.getElementsByClassName("conteiner3")



function fkategori() {
    boxKategori[0].style.display ="flex";
    console.log("terrun")
}
function fkolektif() {
    pendaftarankolektif[0].style.display = "flex"
}
function fsd() {
    kategorisd[0].style.display = "flex"
    console.log("cliked")
}
function fsmp() {
    kategorismp[0].style.display = "flex"
    console.log("cliked")
}
function fsma() {
    kategorisma[0].style.display = "flex"
    console.log("cliked")
}
function fumum() {
    kategoriumum[0].style.display = "flex"
    console.log("cliked")
}

function fsd1() {
    boxKategori[0].style.display = "none"
    kategorisd[0].style.display = "flex"
    console.log("cliked")
}
function fsmp1() {
    boxKategori[0].style.display = "none"
    kategorismp[0].style.display = "flex"
    console.log("cliked")
}
function fsma1() {
    boxKategori[0].style.display = "none"
    kategorisma[0].style.display = "flex"
    console.log("cliked")
}
function fumum1() {
    boxKategori[0].style.display = "none"
    kategoriumum[0].style.display = "flex"
    console.log("cliked")
}



function fhilang() {
    boxKategori[0].style.display = "none"
    kategorisd[0].style.display = "none"
    kategorismp[0].style.display = "none"
    kategorisma[0].style.display = "none"
    kategoriumum[0].style.display = "none"
    pendaftarankolektif[0].style.display = "none"

    
}

buttonindividu[0].addEventListener("click", fkategori)
buttonkolektif[0].addEventListener("click", fkolektif)
hilang[0].addEventListener("click", fhilang)
hilang[1].addEventListener("click", fhilang)
hilang[2].addEventListener("click", fhilang)
hilang[3].addEventListener("click", fhilang)
hilang[4].addEventListener("click", fhilang)
hilang[5].addEventListener("click", fhilang)





sd[0].addEventListener("click", fsd)
smp[0].addEventListener("click", fsmp)
sma[0].addEventListener("click", fsma)
umum[0].addEventListener("click", fsma)

sd1[0].addEventListener("click", fsd1)
smp1[0].addEventListener("click", fsmp1)
sma1[0].addEventListener("click", fsma1)
umum1[0].addEventListener("click", fumum1)












