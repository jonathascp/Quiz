"use client";
import { useTema } from "../Context/TemasContext"

export default function Botao({tema,descricao})
{
const {setTema} = useTema();

    return (
        <button onClick={e => setTema(e.target.value)} value={tema}>
            {descricao}
        </button>
    )
}