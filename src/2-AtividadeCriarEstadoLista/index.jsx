// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

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
    </div>
);
}

