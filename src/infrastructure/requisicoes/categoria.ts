import {gql} from '@apollo/client'
import {cliente} from '@infrastructure/cliente'
import {trataRespostaRequisicao} from '@infrastructure/funcoes'

export const BUSCA_CATEGORIAS_QUERY = gql`
  query BuscaCategorias {
    categories(orderBy: name_ASC) {
      id
      name
      slug
    }
  }
`

export async function buscaCategorias() {
  const resposta = await cliente.query({
    query: BUSCA_CATEGORIAS_QUERY,
  })

  const respostaTratada = trataRespostaRequisicao(resposta)

  return respostaTratada
}
