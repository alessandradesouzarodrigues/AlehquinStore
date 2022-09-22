"use strict";
const blusas = [
    { id: 1, marca: "lacosta", modelo: "blusa do naruto", preco: 3.5 },
    { id: 2, marca: "lacosta", modelo: "blusa do one piece", preco: 7.0 },
    { id: 311, marca: "lacosta", modelo: "blusa do tokyo ghoul", preco: 12.5 },
    { id: 4, marca: "lacosta", modelo: "blusa do jujutsu no kaizen", preco: 1.99 },
    { id: 5, marca: "lacosta", modelo: "blusa do kimetsu no yaiba", preco: 1.99 },
    { id: 6, marca: "lacosta", modelo: "blusa do boruto", preco: 1.99 },
    { id: 21, marca: "lacosta", modelo: "blusa do cavalo de fogo", preco: 1.99 },
    { id: 123, marca: "lacosta", modelo: "blusa do cavalo de fogo azul", preco: 1.99 },
];
const rootElement = document.querySelector("#root");
const searchButtonElement = document.querySelector("search-button");
const searchInputElement = document.querySelector("input-pesquisar");
const searchTypeElement = document.querySelector("filter-type-select");
function render(itens) {
    if (rootElement) {
        itens.forEach((item) => {
            rootElement.innerHTML += `
        <div class='item-wrapper'>
        <h2>${item.modelo}</h2>
        <h3>${item.marca}</h3>
        <h4>${item.preco}</h4>
        </div>
        `;
        });
    }
}
function search(event) {
    const searchInputValue = searchInputElement.value;
    const filterTypeValue = searchTypeElement.value;
    const newBlusas = blusas.filter((blusa) => blusa[filterTypeValue].includes(searchInputElement));
    render(newBlusas);
}
function eventListenerHandle() {
    searchButtonElement === null || searchButtonElement === void 0 ? void 0 : searchButtonElement.addEventListener("click", search);
}
render(blusas);
eventListenerHandle();
