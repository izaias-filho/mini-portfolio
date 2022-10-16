//pegar os elementos que representam as abas no HTML

const abas = document.querySelectorAll(".aba"); 

abas.forEach(aba => {

//identificar o clique no elemento aba

    aba.addEventListener("click", function(){

    if (aba.classList.contains("selecionado")) {
        return;   
    } 

    selecionarAba(aba)
    mostrarInformacaoDaAba(aba)

    });
    

});

function selecionarAba(aba){
//quando o usuário clicar, desmarcar a primeira aba selecionada

const abaSelecionada = document.querySelector(".aba.selecionado");
abaSelecionada.classList.remove("selecionado")

//marcar a aba clicada como selecionada

aba.classList.add("selecionado")    

}

function mostrarInformacaoDaAba(aba){
//esconder o conteúdo selecionado anteriormente

const informacaoSelecionada = document.querySelector(".informacao.selecionado");    
informacaoSelecionada.classList.remove("selecionado")

//mostrar o conteúdo da atual aba selecionada
const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
informacaoASerMostrada.classList.add("selecionado")

}