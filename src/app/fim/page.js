'use client';
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import perguntas from "../perguntas.json";
import { useEffect, useState } from "react";
export default function fimDeJogo() {

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
                <p className={styles.pontuacao}>Você acerto {pontos} de {perguntas.length}</p>
                <button className={styles.botaoVoltar} onClick={() => router.push("/quests")}>voltar ao jogo</button>
            </div>
        </div>


    )
}