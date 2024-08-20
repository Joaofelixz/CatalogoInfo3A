// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaProdutos`
// dentro desse `<div>`.

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