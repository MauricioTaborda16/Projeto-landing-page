var sdireita = window.document.getElementById("sdireita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var sesquerda = window.document.getElementById("sesquerda")

function RolarParaDireita() { 
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    sdireita.style ="display:none"
    sesquerda.style ="display:flex"
    

}
function RolarParaEsquerda() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    sdireita.style ="display:flex"
    sesquerda.style ="display:none"
    
}
