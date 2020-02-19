import axios from 'axios'

export const handleCep = axios.create({baseURL: 'https://viacep.com.br/ws/'})