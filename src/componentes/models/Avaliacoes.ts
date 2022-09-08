import Produto from "./Produto";
import Usuario from "./Usuario";

interface Avaliacoes{
    id: number;
    avaliacao: string;
    nota: string;
    Usuario?: Usuario | null; 
    Produto?: Produto | null;


}
export default Avaliacoes;