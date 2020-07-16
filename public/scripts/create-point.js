function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        /*.then ((res) => { return res.json() }) */
        .then(res => res.json())
        .then(states => {
            for (const state of states) {
                ufSelect.innerHTML += `<option value= "${state.id}">${state.nome} </option> `
            }


        })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city")
    const stateInput = document.querySelector("input[name=state")
    const ufValue = event.target.value
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    citySelect.innerHTML = "<options>Selecione a Cidade</options>"
    citySelect.disabled = true

    fetch(url)
        .then(res => res.json())
        .then(cities => {
            for (const city of cities) {
                citySelect.innerHTML += `<option value= "${city.nome}">${city.nome} </option> `
            }

            citySelect.disabled = false

        })
}

document
    .querySelector("select[name=uf]")
    //".addEventListener: ouve os eventos(um clique, movimento do mouse, uma seleção, etc.."
    .addEventListener("change", getCities)


//ITENS DE COLETA / PEGAR TODOS OS LI's
const itemstoCollect = document.querySelectorAll(".items-grid li")

for (const items of itemstoCollect) { //estrutura de repetição
    items.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items")
let selectedItems = []

function handleSelectedItem(event) {
    // adicionar ou remover uma classe com o JavaScript
    const itemLi = event.target
    itemLi.classList.toggle("selected") //toggle = add ou remove class 
    const itemId = itemLi.dataset.id
        //verificar se existem itens selecionados. Se sim,
        // pegar os itens selecionados.

    const alreadySelected = selectedItems.findIndex(item => { //findIndex = procura os index dentro dos arrays 
        const itemFound = item == itemId //fará isso retornar true ou false
        return itemFound
    })

    //Se já estiver selecionado, ao clicar novamente retira a seleção.
    if (alreadySelected >= 0) {
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId //false
            return itemIsDifferent
        })
        selectedItems = filteredItems
    } else {
        //Se não estiver selecionado, ao clicar, seleciona-se.
        selectedItems.push(itemId)
    }
    //Atualizar os campos escondidos com os itens selecionados.
    collectedItems.value = selectedItems
}