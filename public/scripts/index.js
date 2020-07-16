const buttonSearch = document.querySelector("#page-home main a") // botão pesquisar coleta de dados
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a") //botão fechar

// A estrutura modal está com display: none; sendo assim, preciso retirar a class que está junto da div para sair essa modificação e aparecer a tela para mim. Sendo assim: 


//Quando eu clicar no botão "Pesquisar coleta de dados", ele remove a class hide da div, me apresentando a page do index,
buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})

//Quando eu clicar no botão "Fechar", ele add a class hide da div, me apresentando a estrutura modal"
close.addEventListener("click", () => {
    modal.classList.add("hide")
})