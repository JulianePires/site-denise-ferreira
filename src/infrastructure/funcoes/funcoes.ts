import {RespostaRequisicao, Tema, TemasCores} from '@/data/tipos'
import cores from '@/resources/cores'
import {StatusRequisicao} from 'src/data/enums'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function trataRespostaRequisicao(resposta: any): RespostaRequisicao {
  const respostaFinal = resposta ? resposta : {
    loading: false,
    error: {},
    data: {}
  }
  const {loading, error, data} = respostaFinal

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

export function sleep(delay: number) {
  const start = new Date().getTime()
  while (new Date().getTime() < start + delay);
}

export function abreUrlExternaEmNovaAba(url: string) {
  window.open(url, '_blank')
}

export function trataCoresPorTema(tema: TemasCores): Tema {
  if (tema === 'amarelo') {
    return {
      corPrimaria: cores.amarelo,
      corSecundaria: cores.azulPetroleo,
      corGhost: cores.amareloGhost,
    }
  }

  if (tema === 'azulPetroleo') {
    return {
      corPrimaria: cores.azulPetroleo,
      corSecundaria: cores.amarelo,
      corGhost: cores.azulPetroleoGhost,
    }
  }

  if (tema === 'terra') {
    return {
      corPrimaria: cores.terra,
      corSecundaria: cores.amarelo,
      corGhost: cores.terraGhost,
    }
  }

  return {
    corPrimaria: cores.vinho,
    corSecundaria: cores.branco,
    corGhost: cores.vinhoGhost,
  }
}

export function formataDataParaPadrao(dataISO: string) {
  const meses = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ]
  const data = new Date(dataISO)
  const dataFormatada =
    data.getDate() + '/' + meses[data.getMonth()] + '/' + data.getFullYear()
  return dataFormatada
}
