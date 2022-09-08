import Genero from './Genero';

interface Produto {
    id: number;
    nome: string;
    sobre: string;
    plataforma: number;
    valor: number;
    lancamento: string;
    foro: string;
    Genero?: Genero | null;
}

export default Produto;