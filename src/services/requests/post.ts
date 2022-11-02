import { gql } from '@apollo/client';
import { cliente } from '@infraestrutura/cliente';
import { trataRespostaRequisicao } from '@infraestrutura/funcoes';

export const GET_POSTS_QUERY = gql`
  query GetPosts {
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
`;

export async function getPosts() {
  const resposta = await cliente.query({
    query: GET_POSTS_QUERY,
  });

  const respostaTratada = trataRespostaRequisicao(resposta);

  return respostaTratada;
}
