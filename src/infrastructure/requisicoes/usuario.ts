import {gql} from '@apollo/client'
import {cliente} from '@infrastructure/cliente'
import {trataRespostaRequisicao} from '@infrastructure/funcoes'

export const BUSCA_USUARIOS_QUERY = gql`
  query BuscaUsuarios {
    users(orderBy: name_ASC) {
      id
      name
      picture
      createdAt
    }
  }
`

export async function buscaUsuarios() {
  const resposta = await cliente.query({
    query: BUSCA_USUARIOS_QUERY,
  })

  const respostaTratada = trataRespostaRequisicao(resposta)

  return respostaTratada
}
