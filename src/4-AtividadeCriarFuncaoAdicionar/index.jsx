// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`

import { useState } from "react";

export default function Home(){
    const [listadeProdutos, setlistadeProdutos] = useState([
        {
            id:1,

            item:"tenis",

            preco:"R$ 105,99"
        },
        {
            id:2,

            item:"tenis",

            preco:"R$ 100,99"
        },
        {
            id:3,

            item:"tenis",

            preco:"R$ 100,99"
        },
    ])

 const [listaPedidos, setlistaPedidos] = useState([]);
   
    const adicionarItemPedidos = (objeto) => {
      setlistaPedidos([...listaPedidos, objeto])
    }

return (
    <div>
        <h1>Loja de Calçados</h1>
        {
          listaProdutos.map((produto)=>
            <div key={produto.id}>
              <p>{produto.item}</p>
              <p>{produto.preco}</p>
            </div>
        )
        }
    </div>
);
}
