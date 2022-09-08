import Avaliacoes from "./Avaliacoes";

interface Usuario{
     id: number;
     nome: string;
     usuario: string;
     foto: string;
     senha:string;
     Avaliacoes?: Avaliacoes | null;
}
export default Usuario;