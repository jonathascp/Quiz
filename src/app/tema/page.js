import Botao from "../Components/BotaoTema";

export default function Temas() {
    return (
        <div className={`w-100 d-flex flex-column justify-content-center align-items-center`}>
            <h1>Escolha um tema.</h1>
            <div>
                <Botao descricao={"Mateus"} tema={"mateus"}/>
            </div>
        </div>
    )

}