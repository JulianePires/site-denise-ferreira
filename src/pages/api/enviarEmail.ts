import {abreUrlExternaEmNovaAba} from '@/infrastructure/funcoes'
import type {NextApiRequest, NextApiResponse} from 'next'

interface CorpoRequisicao {
  nome: string
  email: string
  cidade: string
  organizacao?: string
  conteudoMensagem: string
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {nome, cidade, organizacao, conteudoMensagem} =
    req.body as CorpoRequisicao

  const templateCorpoEmail = `Olá, Denise! Tudo bem? \n\nMe chamo ${nome}, resido na cidade de ${cidade}.${
    organizacao && '\n\nTrabalho na empresa ' + organizacao + '.'
  } \n\n ${conteudoMensagem}`

  res.status(200).send(templateCorpoEmail)
}
