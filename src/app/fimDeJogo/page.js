'use client';
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import perguntas from "../perguntas.json";
import { useEffect, useState } from "react";
import { useTema } from "../Context/TemasContext";


export default function fimDeJogo() {
    const { tema } = useTema();
    
      const temaSelecionado = perguntas.temas.find((t) => t.tema === tema);
      

    const [pontos,setPontos] = useState(0);
    
    useEffect(() => {
        const novosPontos = sessionStorage.getItem("acertos");
        if(novosPontos)
        {
            setPontos(novosPontos);
        }

    }, []);

    useEffect(() => {
        if(pontos)
        {
            sessionStorage.setItem("acertos",pontos);
        }
    },[pontos]);

    const router = useRouter();
    return (
        <div className={`${styles.container} d-flex flex-column justify-content-center align-items-center w-100`}>
            <div className={styles.painel}>
                <h1 className={styles.titulo}>Fim de jogo.</h1>
                <p className={styles.pontuacao}>{!tema ? "Carregando" : temaSelecionado.perguntas.length}.</p>
                <button className={styles.botaoVoltar} onClick={() => {
                    router.push("/tema")
                    setPontos(0);
                } }>Escolher novo tema</button>
            </div>
        </div>


    )
}