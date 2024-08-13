// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`

export default function Home() {
  return (
      <div>
          <h1>LOJA DE CALÇADOS</h1>
      </div>
  );
}
import { useState } from "react";

export default function App(){
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
}


  return (
    <div className="Produtos">
    {listadeProdutos.map((produtos)=>
    <div key={produtos.id}>
      <p>{produtos.item}</p>
      <p>{produtos.preco}</p>
    </div>
  
  )}
    </div>
   
  );
