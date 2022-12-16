import {gql} from '@apollo/client'
import {cliente} from '@infrastructure/cliente'
import {trataRespostaRequisicao} from '@infrastructure/funcoes'

export const BUSCA_POSTS_QUERY = gql`
  query BuscaPosts {
    posts(orderBy: publishedAt_ASC) {
      id
      slug
      titulo
      subtitulo
      imagem
      conteudo {
        ... on Content {
          body {
            text
          }
        }
      }
      categorias {
        id
        nome
        slug
      }
      autor {
        id
        nome
        email
        foto
        username
      }
      createdAt
      access
    }
  }
`

export const BUSCA_POSTS_DESTAQUE_QUERY = gql`
  query BuscaPostsDestaque {
    posts(orderBy: access_DESC, first: 5) {
      id
      slug
      titulo
      subtitulo
      imagem
      conteudo {
        ... on Content {
          body {
            text
          }
        }
      }
      categorias {
        id
        nome
        slug
      }
      autor {
        id
        nome
        email
        foto
        username
      }
      createdAt
      access
    }
  }
`

export const BUSCA_POSTS_CATEGORIA_QUERY = gql`
  query BuscaPostsPorCategoria($id: ID!) {
    posts(orderBy: publishedAt_DESC, where: {categorias_every: {id: $id}}) {
      id
      slug
      titulo
      subtitulo
      imagem
      conteudo {
        ... on Content {
          body {
            text
          }
        }
      }
      categorias {
        id
        nome
        slug
      }
      autor {
        id
        nome
        email
        foto
        username
      }
      createdAt
      access
    }
  }
`

export const BUSCA_POSTS_FILTRO_QUERY = gql`
  query BuscaPostsComFiltro($titulo: String = "") {
    posts(where: {titulo_contains: $titulo}) {
      createdAt
      id
      imagem
      slug
      subtitulo
      titulo
      categorias {
        id
        nome
        slug
      }
      autor {
        id
        nome
        email
        foto
        username
      }
      conteudo {
        ... on Content {
          body {
            text
          }
        }
      }
      access
    }
  }
`

export const BUSCA_POST_SLUG_QUERY = gql`
  query BuscaPostPorSlug($slug: String!) {
    post(where: {slug: $slug}) {
      createdAt
      id
      imagem
      slug
      subtitulo
      titulo
      categorias {
        id
        nome
        slug
      }
      autor {
        id
        nome
        email
        foto
        username
      }
      conteudo {
        ... on Content {
          body {
            text
          }
        }
      }
      access
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

export async function buscaPostsComFiltro(titulo = '') {
  const resposta = await cliente.query({
    query: BUSCA_POSTS_FILTRO_QUERY,
    variables: {titulo},
  })

  const respostaTratada = trataRespostaRequisicao(resposta)

  return respostaTratada
}

export async function buscaPostPorSlug(slug = '') {
  const resposta = await cliente.query({
    query: BUSCA_POST_SLUG_QUERY,
    variables: {slug},
  })

  const respostaTratada = trataRespostaRequisicao(resposta)

  return respostaTratada
}