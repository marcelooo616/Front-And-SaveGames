interface UsuarioLogin{
    nome: string;
    usuario: string;
    senha: string;
    token?: string | null;
}
export default UsuarioLogin;