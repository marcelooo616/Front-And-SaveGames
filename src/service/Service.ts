import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://savegames616.herokuapp.com'
})

  export const login = async(url: any,dados: any,setDado: any) => { 
    const resposta = await api.post(url,dados)
    setDado(resposta.data)
  }

  export const cadastroUsuario = async(url: any,dados: any,setDado: any) => { 
    const resposta = await api.post(url,dados)
    setDado(resposta.data)
}