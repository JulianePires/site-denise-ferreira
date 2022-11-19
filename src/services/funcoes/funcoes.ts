import {RespostaRequisicao} from '@data/tipos'
import {StatusRequisicao} from 'src/data/enums'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function trataRespostaRequisicao(resposta: any): RespostaRequisicao {
  const {loading, error, data} = resposta

  if (loading) {
    return {
      dados: [],
      status: StatusRequisicao.CARREGANDO,
      erro: '',
    }
  }

  if (error) {
    return {
      dados: [],
      status: StatusRequisicao.ERRO,
      erro: error.message,
    }
  }

  return {
    dados: data,
    status: StatusRequisicao.SUCESSO,
    erro: '',
  }
}
