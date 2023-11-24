const button = document.querySelector("button");
const nota = document.querySelector("#nota");

const pMensagem = document.createElement("p");

function clearForm() {
    nota.value = "";
}

button.addEventListener("click", () => {
    event.preventDefault();

    const notaValue = nota.value;

    if(notaValue.trim() === "") {
        pMensagem.textContent = "Campo obrigatório";
        nota.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "error");
        return;
    } else {
        clearForm();
    }

    if (notaValue >= 6) {
        alert("passou filhote");
    }
    else {
        alert("AHAHAHAHAHAHAHAHAHAHAHAHAHAH");
    }

    pMensagem.classList.add("d-none");
});