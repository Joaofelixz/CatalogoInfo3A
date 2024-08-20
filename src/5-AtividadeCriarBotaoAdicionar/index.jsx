// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(produto)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.

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
              <button onClick={()=>adicionarItemPedidos(produto)}>Selecionar</button>
            </div>
        )
        }
    </div>
);
}