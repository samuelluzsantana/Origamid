// //Types e Interfaces

interface Empresa {
    nome: string;
    fundacao: number;
    pais: string;
  }
  
  interface Product {
    nome: string;
    preco: number;
    descricao: string;
    garantia: string;
    seguroAcidentes: boolean;
    empresaFabricante: Empresa;
    empresaMontadora: Empresa;
  }
  
  async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
  }
  
  fetchProduct();
  
  function showProduct(data: Product) {
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

