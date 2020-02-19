import axios from 'axios'

export const cep = axios.create({baseURL: 'https://viacep.com.br/ws/'})

export const handleCep = async (number) =>
{
    return await cep.get(`${number}/json/`)
}