import {StatusRequisicao} from '@data/enums'
import {trataRespostaRequisicao} from './funcoes'

describe('Função trataRespostaRequisicao', () => {
  it('DEVE retornar status "carregando" quando resposta tiver status loading verdadeiro', () => {
    const respostaMock = {
      data: [],
      loading: true,
      error: {
        message: '',
      },
    }

    const respostaTratada = trataRespostaRequisicao(respostaMock)

    expect(respostaTratada.status).toBe(StatusRequisicao.CARREGANDO)
  })
})
