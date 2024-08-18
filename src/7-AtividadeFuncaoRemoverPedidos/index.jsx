// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

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
}
 const [listaPedidos, setlistaPedidos] = useState([]);
   
    const adicionarItemPedidos = (objeto) => {
      setlistaPedidos([...listaPedidos, objeto])
    }

    const removerPedido = (id) => {
        let remover = false;
        let listaaux = listaPedidos.filter((produto)=>{
            if (remover == false) {
                if (produto.id !== id){
                    return produto
                }else{
                    remover = true;
                    return null
                }
            }else{
                return produto
            }
        });
        setlistaPedidos(listaaux);
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
        {
            listaPedidos.map((produto)=>
            <div key={produto.id}>
                <p>{produto.item}</p>
                <p>{produto.preco}</p>
            </div>
            )
        }
    </div>
);