'use client';
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

export default function fimDeJogo() {

    const router = useRouter();
    return (
        <div className={`${styles.container} d-flex flex-column justify-content-center align-items-center w-100`}>
            <div className={styles.painel}>
                <h1 className={styles.titulo}>Fim de jogo.</h1>
                <button className={styles.botaoVoltar} onClick={() => router.push("/quests")}>voltar ao jogo</button>
            </div>
        </div>


    )
}