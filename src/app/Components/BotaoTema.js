"use client";
import Link from "next/link";
import { useTema } from "../Context/TemasContext"

export default function Botao({tema,descricao})
{
const {setTema} = useTema();

    return (
        
        <button onClick={e => setTema(e.target.value)} value={tema}>
           <Link href="/quests">{descricao}</Link>
        </button>
    )
}