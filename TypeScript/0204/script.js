"use strict";
//Types e Interfaces
function preencherDados(...dados) {
    dados.forEach(dados => {
        document.body.innerHTML += `
        <div>
          <h2>${dados.nome}</h2>
          <p>R$ ${dados.preco}</p>
          <p>is pure: ${dados.pure ? 'yes' : 'no'}</p>
        </div>
        `;
    });
}
const isntPure = {
    nome: 'nobody is pure',
    preco: 2000.00,
    pure: false,
};
const pure = {
    nome: 'everybody is pure',
    preco: 20030.00,
    pure: true,
};
const whoIsPure = {
    nome: `i'm not pure`,
    preco: 0,
    pure: false,
};
preencherDados(pure, isntPure, whoIsPure);
