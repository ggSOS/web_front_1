const buttonMedicamentos = document.querySelector("#medicamentos");
const remedios = document.querySelector(".remedios");

//variável validação
const campoNome = document.querySelector("#nome");
const campoCidade = document.querySelector("#cidade");
const buttonEnviar = document.querySelector("button");

//criando um elemento p
const pMensagem = document.createElement("p");

function clearform() {
    campoCidade.value = "";
    campoNome.value = "";
}

//função da validação
buttonEnviar.addEventListener("click", function(event) {
   event.preventDefault(); 
    //alert("AHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA")
    console.log(campoNome.value);
    if (campoNome.value === '') {
        pMensagem.textContent = "PREECHE AQUI VAI";
        campoNome.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "error");
        //alert("PREENCHA IMEDIATAMENTE");
        return false;
    }
    if (campoCidade.value === '') {
        pMensagem.textContent = "PREECHE TIO";
        campoCidade.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "error");
        //alert("PREENCHE TIO");
        return false;
    }

    pMensagem.classList.add('d-none');
    clearform();
})


//chamando medicamentos
buttonMedicamentos.addEventListener("click", function() {
    remedios.classList.add("d-block")
});