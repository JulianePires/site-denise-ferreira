import {StatusRequisicao} from '@/data/enums'
import {Post as PostTipo, RespostaRequisicao} from '@/data/tipos'
import {buscaPostPorId, buscaPosts} from '@/infrastructure/requisicoes/post'
import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType} from 'next'

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {titulo, subtitulo, imagem, autor, createdAt, conteudo, categorias} =
    post as PostTipo
  return <h1>{titulo}</h1>
}

export const getStaticPaths: GetStaticPaths = async () => {
  let posts: PostTipo[] = []
  const {dados, status} = await buscaPosts()

  if (status === StatusRequisicao.ERRO) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }

  if (status === StatusRequisicao.SUCESSO) {
    posts = dados.posts as PostTipo[]
  }

  const paths = posts.map((post) => ({
    params: {pid: post.id},
  }))

  return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const pid = params?.pid as string

  let resposta: RespostaRequisicao = {
    dados: {},
    status: StatusRequisicao.PARADO,
  }

  resposta = await buscaPostPorId(pid)

  if (resposta.status === StatusRequisicao.SUCESSO)
    return {
      props: {
        post: resposta.dados.post as PostTipo,
      },
    }

  return {
    props: {},
  }
}
