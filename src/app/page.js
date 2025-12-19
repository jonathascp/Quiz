import Link from "next/link";
import styles from "./styles.module.css";
export default function Home() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1 className={`${styles.titulo}`}>Quiz</h1>
      <Link href="/quests" className={`${styles.botao_link} border border-0 rounded-3 p-2`}>
        Ir para as perguntas
      </Link>
    </div>
  )
}
