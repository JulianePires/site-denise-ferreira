import {gql} from '@apollo/client'
import {cliente} from '@infrastructure/cliente'
import {trataRespostaRequisicao} from '@infrastructure/funcoes'

const BUSCA_ASSET_QUERY = gql`
  query BuscaAsset($id: ID!) {
    asset(where: {id: $id}) {
      id
      createdBy {
        entryId: id
        name
        picture
      }
      updatedBy {
        entryId: id
        name
        picture
        kind
        isActive
      }
      createdAt
      id
      updatedAt
      fileName
      width
      height
      url
    }
  }
`

export async function buscaAsset(id: string) {
  const resposta = await cliente
    .query({
      query: BUSCA_ASSET_QUERY,
      variables: {id},
    })
    .catch((err) => 'Ocorreu um erro')

  const respostaTratada = trataRespostaRequisicao(resposta)

  return respostaTratada
}
