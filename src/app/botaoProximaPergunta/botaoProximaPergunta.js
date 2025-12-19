import Link from "next/link";

export default function botaoProximaPergunta(perguntaAtual,perguntas,setPerguntaAtual,setMostrarOpcaoCorreta,setDesabilitarBotao,setRespostaSelecionada,setContador) {
       if(perguntaAtual !== perguntas.length - 1)
       {
         return <button onClick={() => {
            setPerguntaAtual(prev => prev + 1);
            setMostrarOpcaoCorreta(false);
            setDesabilitarBotao(false);
            setRespostaSelecionada(null);
            setContador(15);
        }}>
            Próxima pergunta
        </button>
       }
       else
       {
        // return <button onClick={() => router.push("/fim")}>Final do jogo</button>
        return <Link href={"/fim"}>Final do jogo</Link>
       }
    }