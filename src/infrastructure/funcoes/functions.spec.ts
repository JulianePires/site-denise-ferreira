import {StatusRequisicao} from '@/data/enums'
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

  it('DEVE retornar resposta padrão quando resposta nula for passada por parâmetro', ()=>{
    const respostaPadrao = {
      dados: {},
      status: StatusRequisicao.SUCESSO,
      erro: ''
    }

    const respostaTratada = trataRespostaRequisicao()

    expect(respostaTratada).toStrictEqual(respostaPadrao)
  })
})
