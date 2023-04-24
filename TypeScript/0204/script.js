"use strict";
// //Types e Interfaces
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/notebook.json');
        const data = yield response.json();
        showProduct(data);
    });
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
      <div>
        <h2>${data.nome}</h2>
        <p>R$ ${data.preco}</p>
        <div>
          <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
        </div>
        <div>
          <h3>Montadora: ${data.empresaMontadora.nome}</h3>
        </div>
      </div>
    `;
}
// type Produto = {
//     nome: string;
//     preco: number;
//     pure: boolean;
// }
// function preencherDados(...dados: Produto[]) {
//     dados.forEach(dados => {
//         document.body.innerHTML += `
//         <div>
//           <h2>${dados.nome}</h2>
//           <p>R$ ${dados.preco}</p>
//           <p>is pure: ${dados.pure ? 'yes' : 'no'}</p>
//         </div>
//         `;
//     })
// }
// const isntPure: Produto = {
//     nome: 'nobody is pure',
//     preco: 2000.00,
//     pure: false,
// }
// const pure: Produto = {
//     nome: 'everybody is pure',
//     preco: 20030.00,
//     pure: true,
// }
// const whoIsPure: Produto = {
//     nome: `i'm not pure`,
//     preco: 0,
//     pure: false,
// }
// preencherDados(pure, isntPure, whoIsPure);
