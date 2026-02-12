"use client";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import perguntas from "../perguntas.json";
import { useTema } from "../Context/TemasContext";
export default function Quest() {

    const [perguntaAtual, setPerguntaAtual] = useState(0);
    const [contador, setContador] = useState(15);
    const [respostaSelecionada, setRespostaSelecionada] = useState(null);
    const [mostrarOpcaoCorreta, setMostrarOpcaoCorreta] = useState(false);
    const [desabilitarBotao, setDesabilitarBotao] = useState(false);
    const [numeroDeAcertos, setNumeroDeAcertos] = useState(0);
    const { tema } = useTema();

    const temaSelecionado = perguntas.temas.find((t)=> t.tema === tema) || null;
    
    const botaoProximaPergunta = () => {
        if (perguntaAtual !== temaSelecionado.perguntas.length - 1) {
            return <button className={styles.botaoProximaPergunta} onClick={() => {
                setPerguntaAtual(prev => prev + 1);
                setMostrarOpcaoCorreta(false);
                setDesabilitarBotao(false);
                setRespostaSelecionada(null);
                setContador(15);
            }}>
                Próxima pergunta
            </button>
        }
        else {
            if (typeof window !== "undefined") {
                window.sessionStorage.setItem("acertos", numeroDeAcertos.toString());

            }

            return <Link className={styles.botaoFimDoJogo} href={"/fimDeJogo"}>Fim do jogo</Link>
        }
    }
    const contagemRegressiva = () => {

        useEffect(() => {

            if (contador === 0 || respostaSelecionada !== null) return;
            const tempo = setInterval(() => {
                setContador(prev => prev - 1);
            }, 1000)

            return () => clearInterval(tempo);

        }, [contador, respostaSelecionada]);

    }

    const verificarSeEstarCerto = () => {
        if (respostaSelecionada !== null) { 
            if (respostaSelecionada === temaSelecionado.perguntas[perguntaAtual].respostaSelecionada) {
                return <p className={styles.contador}>Resposta correta !</p>
            }
            else {
                return <p className={styles.contador}>Resposta incorreta !</p>
            }

        }
    }

    const revelarResposta = (opcao) => {     
        if (mostrarOpcaoCorreta && opcao === temaSelecionado.perguntas[perguntaAtual].respostaSelecionada) {
            return styles.certo;
        }
    }
    contagemRegressiva();

    return (
        <div className={` container d-flex flex-column p-0 m-0 align-items-center justify-content-center`}>
            <div className={`${styles.painel}`}>
                <h1 className={`${styles.titulo}`}>Pergunta Nº{temaSelecionado.perguntas[perguntaAtual].id}</h1>
                <p className={`${styles.contador}`}>{contador}</p>
                <div className="container d-flex flex-column p-0 m-0 align-items-center justify-content-center">
                    <h4 className={`${styles.pergunta}`}>{temaSelecionado.perguntas[perguntaAtual].titulo}</h4>
                    {<> 
                        {temaSelecionado.perguntas[perguntaAtual].opcoes.map((opcao) =>

                            <button
                                className={`${styles.botao} ${desabilitarBotao || contador === 0 ? "pe-none" : ""} ${revelarResposta(opcao)}`}
                                key={opcao}
                                value={opcao}
                                onClick={e => {
                                    if (e.target.value === temaSelecionado.perguntas[perguntaAtual].respostaSelecionada) {
                                        setRespostaSelecionada(e.target.value);
                                        e.target.style.background = "#10B981";
                                        setNumeroDeAcertos(prev => prev + 1);
                                    }
                                    else {
                                        setRespostaSelecionada(e.target.value);
                                        e.target.style.background = "#EF4444";
                                        setMostrarOpcaoCorreta(true);
                                    }

                                    setDesabilitarBotao(true);

                                }}
                            >
                                {opcao}
                            </button>
                        )}
                        {verificarSeEstarCerto()}
                        {respostaSelecionada !== null && botaoProximaPergunta()}
                        {contador === 0 &&
                            <div className={styles.painel_proximaPergunta}>
                                <p className={styles.contador}>Tempo esgotado</p>
                                {botaoProximaPergunta()}
                            </div>}
                    </>}


                </div>

            </div>
        </div>

    )
}