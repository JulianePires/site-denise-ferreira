import axios from 'axios'
import {FormularioContatoTipo} from '../../data/tipos'

export const enviarEmail = async (dadosEmail: FormularioContatoTipo) => {
  return axios({
    method: 'post',
    url: '/api/enviarEmail',
    data: dadosEmail,
  })
}
