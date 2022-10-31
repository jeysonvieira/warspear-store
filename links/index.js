
const botao = document.getElementById("btnADC")

const lipvp = document.getElementById("lipvp").addEventListener("click", remove)

const lipve = document.getElementById("lipve").addEventListener("click", remove)

const divmsg = document.getElementById("divmsg")


function remove(){
    botao.classList.remove("d-none")
    divmsg.classList.add("d-none")

}