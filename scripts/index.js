"use strict";
// type Blusa = {
//   id: number; 
//   marca: string; 
//   modelo: string; 
//   preco: number; 
//   tamanho: 'P'|'M'|'G'; 
//   cores: string[]; 
//   ategoria: "blusa"| "bermuda" | "intima"; 
//   quantidade:2;
// };
const blusas = [
    { id: 1, marca: "lacosta", modelo: "Blusa do Naruto", preco: 3.5, imagem: " ./img/camiseta-anime-naruto-shippuden-mod-04-estampa-total-naruto-shippuden.jpg" },
    { id: 2, marca: "naike", modelo: "Blusa do One Piece", preco: 7.0, imagem: "./img/onepice.webp" },
    { id: 311, marca: "ardidas", modelo: "Blusa do Death Note", preco: 12.5, imagem: "./img/camiseta-anime-death-note-raglan-animes.jpg" },
    { id: 4, marca: "lacosta", modelo: "Blusa do Jujutsu Kaizen", preco: 1.99, imagem: "./img/jujutsu.jfif" },
    { id: 5, marca: "naike", modelo: "Blusa do Kimetsu no Yaiba", preco: 1.99, imagem: "./img/camiseta-anime-kimetsu-no-yaiba-ou-demon-slayer-muzan.jpg" },
    { id: 6, marca: "ardidas", modelo: "Blusa do Boruto", preco: 1.99, imagem: "./img/boruto.jfif" },
    { id: 21, marca: "lacosta", modelo: "Blusa do Hunter X Hunter", preco: 1.99, imagem: "./img/001-camiseta-hunter-x-hunter.jpg" },
    { id: 123, marca: "naike", modelo: "Blusa do Dr. Stone", preco: 1.99, imagem: "./img/drstone.jpg" },
];
const rootElement = document.querySelector("#root");
const searchButtonElement = document.querySelector("#search-button");
const searchInputElement = document.querySelector("#input-pesquisar");
const searchTypeElement = document.querySelector("#filter-type-select");
function render(itens) {
    if (rootElement) {
        rootElement.innerHTML = "";
        itens.forEach((item) => {
            rootElement.innerHTML += `
        <div class='container-itens'>
        <div class='item-wrapper'>
        <img src='${item.imagem}' alt='${item.modelo}'>
        <div class='info-itens'>
        <h3>${item.modelo} - ${item.marca}</h3>
        <h3> R$ ${item.preco}</h3>
        </div>
        </div>
        </div>
        `;
        });
    }
}
function search(event) {
    const searchInputValue = searchInputElement.value;
    const filterTypeValue = searchTypeElement.value;
    //elemento como chave de keyof Omit<Blusa, "id"|"preco">; ou as "modelo" | "marca";
    const newBlusas = blusas.filter((blusa) => blusa[filterTypeValue].includes(searchInputValue));
    render(newBlusas);
}
function eventListenerHandle() {
    searchButtonElement === null || searchButtonElement === void 0 ? void 0 : searchButtonElement.addEventListener("click", search);
}
render(blusas);
eventListenerHandle();
