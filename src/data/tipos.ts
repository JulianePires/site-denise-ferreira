import {StatusRequisicao} from './enums'

export type ChaveValor<T> = {
  [key: string]: T
}

export type RespostaRequisicao = {
  status: StatusRequisicao
  erro?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dados: any
}

export type Usuario = {
  id: string
  name: string
  email: string
  password: string
}

export type Post = {
  id: string
  title: string
  subtitle: string
  author: string
  content: {
    id: string
    heading: string
    body: {
      text: string
    }
  }
  slug: string
  image: {
    url: string
    height: number
  }
  categories: Categoria[]
  createdAt: string
  publishedAt: string
  access: number
  createdBy: {
    entryId: string
    name: string
    picture: string
  }
}

export type Categoria = {
  id: string
  name: string
  slug: string
}

export type OpcaoMenu = {
  nome: string
  caminho: string
}

export type Imagem = {
  src: string
  alt: string
}

export type Caminho = {
  params: ChaveValor<string>
}

export type TemasCores =
  | 'vinho'
  | 'terra'
  | 'amarelo'
  | 'azulPetroleo'
  | 'laranja'
  | 'azulRoyal'

export type Tema = {
  corPrimaria: string
  corSecundaria: string
  corGhost: string
}

export type Asset = {
  id: string
  updatedBy: {
    name: string
    picture: string
  }
  createdAt: string
  updatedAt: string
  fileName: string
  width: number
  height: number
  url: string
}

export type DirecoesTipo = 'horizontal' | 'vertical'

export type TamanhosTextoTipo = 'PP' | 'P' | 'M' | 'G' | 'GG' | 'XG'

export type ContainerTipo = {
  id?: string
  largura?: string
  corFundo?: string
  imagemFundo?: string
  padding?: string
  altura?: string
  justificar?: AlinhamentoTipo
  gap?: string
}

export type PublicacaoEscritoraTipo = 'livro' | 'iniciativa'

export type ElementoCarrosselTipo = {
  imagem: string
  descricao: string
  linkExterno?: string
  tipo?: PublicacaoEscritoraTipo
}

export type AlinhamentoTipo =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type FormularioContatoTipo = {
  nome: string
  email: string
  cidade: string
  organizacao: string
  conteudoMensagem: string
}
