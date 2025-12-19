
const useSessionStorage = (valor) => {
    if (typeof window !== "undefined") {
        const salvarValor = () => window.sessionStorage.setItem("acertos", valor);
        const pegarValor = () => window.sessionStorage.getItem("acertos");

        return [salvarValor, pegarValor];

    }

}
export default useSessionStorage