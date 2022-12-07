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
      categories {
        id
        name
        slug
      }
      createdBy {
        entryId: id
        name
        picture
      }
      slug
      image
      access
      createdAt
      publishedAt
    }
  }
`

export const BUSCA_POSTS_DESTAQUE_QUERY = gql`
  query BuscaPostsDestaque {
    posts(orderBy: access_DESC, first: 5) {
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
      categories {
        id
        name
        slug
      }
      createdBy {
        entryId: id
        name
        picture
      }
      slug
      image
      access
      createdAt
      publishedAt
    }
  }
`

export const BUSCA_POSTS_CATEGORIA_QUERY = gql`
  query BuscaPostsPorCategoria($id: ID!) {
    posts(orderBy: publishedAt_DESC, where: {categories_every: {id: $id}}) {
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
      categories {
        id
        name
        slug
      }
      createdBy {
        entryId: id
        name
        picture
      }
      slug
      image
      access
      createdAt
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

export async function buscaPostsDestaque() {
  const resposta = await cliente.query({
    query: BUSCA_POSTS_DESTAQUE_QUERY,
  })

  const respostaTratada = trataRespostaRequisicao(resposta)

  return respostaTratada
}

export async function buscaPostsPorCategoria(idCategoria: string) {
  const resposta = await cliente.query({
    query: BUSCA_POSTS_DESTAQUE_QUERY,
    variables: {id: idCategoria},
  })

  const respostaTratada = trataRespostaRequisicao(resposta)

  return respostaTratada
}
