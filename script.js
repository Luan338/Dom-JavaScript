const [input1, input2] = document.querySelectorAll("input");
const imagem = document.querySelector("img");
const btn = document.querySelector("button");


function habilitar(){
    if(input1.value && input2.value.length >= 8){
        imagem.classList.add("ativo");
        btn.removeAttribute("disabled");
    }else{
        imagem.classList.remove("ativo");
        btn.setAttribute("disabled", "disabled");
    }
}

input1.addEventListener("input", habilitar);
input2.addEventListener("input", habilitar);


// BÔNUS

function handleKeyboard(event){
    if(event.key === "a"){
        document.body.classList.toggle("cordefundo")
    }
}

window.addEventListener('keydown', handleKeyboard);