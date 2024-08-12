// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaProdutos`
// dentro desse `<div>`.

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
