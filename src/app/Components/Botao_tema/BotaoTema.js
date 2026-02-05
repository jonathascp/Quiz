"use client";
import Link from "next/link";
import { useTema } from "../../Context/TemasContext"
import styles from "./styles.module.css";
export default function Botao({ tema, descricao }) {
    const { setTema } = useTema();

    return (
        <button
            className={styles.botao}
            onClick={() => {
                const valor = tema;
                setTema(valor);
            }}>
            <Link href="/quests">{descricao}</Link>
        </button>
    )
}