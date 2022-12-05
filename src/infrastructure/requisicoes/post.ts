import {gql} from '@apollo/client'
import {cliente} from '@infrastructure/cliente'
import {trataRespostaRequisicao} from '@infrastructure/funcoes'

export const BUSCA_POSTS_QUERY = gql`
  query BuscaPosts {
    posts(orderBy: publishedAt_ASC) {
      id
      title
      subtitle
      author
      content {
        ... on Content {
          id
          heading
          body {
            text
          }
        }
      }
      slug
      image
      publishedAt
    }
  }
`

export async function buscaPosts() {
  const resposta = await cliente.query({
    query: BUSCA_POSTS_QUERY,
  })

  const respostaTratada = trataRespostaRequisicao(resposta)

  return respostaTratada
}
