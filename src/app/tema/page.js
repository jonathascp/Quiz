import Botao from "../Components/Botao_tema/BotaoTema.js";
import styles from "./styles.module.css";
export default function Temas() {
    
    return (
        <div className={`w-100 d-flex flex-column justify-content-center align-items-center`}>
            <h1 className={styles.titulo}>Escolha um tema.</h1>
            <div className={`${styles.themeGrid} d-flex flex-column justify-content-center align-items-center gap-3`}>
                <Botao tema={"Marcos"} descricao={"Marcos"}/>
                <Botao tema={"Mateus"} descricao={"Mateus"}/>
            </div>
        </div>
    )

}