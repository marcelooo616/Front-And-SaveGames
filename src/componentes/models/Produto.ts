import Categoria from './Genero';

interface Produto {
    id: number;
    nome: string;
    sobre: string;
    plataforma: number;
    valor: number;
    lancamento: string;
    foro: string;
    Categoria?: Categoria | null;
}

export default Produto;