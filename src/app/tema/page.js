import Botao from "../Components/Botao_tema/BotaoTema.js";
export default function Temas() {
    
    return (
        <div className={`w-100 d-flex flex-column justify-content-center align-items-center`}>
            <h1>Escolha um tema.</h1>
            <div>
                <Botao tema={"Marcos"} descricao={"Marcos"}/>
                <Botao tema={"Mateus"} descricao={"Mateus"}/>
            </div>
        </div>
    )

}