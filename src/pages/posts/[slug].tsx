import {Container} from '@components/Container'
import {StatusRequisicao} from '@data/enums'
import {Asset, Post as PostTipo} from '@data/tipos'
import {buscaAsset} from '@infrastructure/requisicoes/asset'
import {buscaPostPorSlug, buscaPosts} from '@infrastructure/requisicoes/post'
import {LayoutPaginasSite} from '@layouts/LayoutPaginasSite'
import imagens from '@resources/imagens'
import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType} from 'next'
import * as S from '@styles/Post.styled'
import {InformacoesAutorPost} from '@components/InformacoesAutorPost'
import margens from '@resources/margens'

export default function Post({
  post,
  texturaVinho,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {titulo, subtitulo, imagem, autor, createdAt, conteudo} =
    post as PostTipo

  const trechosConteudo = conteudo.body.text.split(/\\n/g)
  console.log(trechosConteudo)
  return (
    <LayoutPaginasSite titulo={titulo}>
      <S.ContainerInformacoesPost
        imagemFundo={texturaVinho.url}
        padding={`${margens.xxxlarge}px ${margens.xlarge}px`}>
        <S.TituloPost>{titulo}</S.TituloPost>
        <S.SubtituloPost>{subtitulo}</S.SubtituloPost>
        <InformacoesAutorPost
          nomeAutor={autor.nome}
          imagemAvatar={autor.foto.url}
          dataCriacaoPost={createdAt}
          autoAlinhar="center"
        />
        <S.ImagemPost
          src={imagem.url}
          width={imagem.width}
          height={imagem.height}
          alt={titulo}
        />
      </S.ContainerInformacoesPost>
      <S.ContainerConteudoPost>
        {trechosConteudo.map((paragrafo, index) => (
          <S.ConteudoPost key={index}>{paragrafo}</S.ConteudoPost>
        ))}
      </S.ContainerConteudoPost>
    </LayoutPaginasSite>
  )
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
    params: {slug: post.slug},
  }))

  return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps = async (context) => {
  const {params} = context
  const slug = params?.slug as string
  const {idTexturaVinho} = imagens

  let post = {}
  let texturaVinho = {}

  const {dados, status} = await buscaPostPorSlug(slug as string)
  const reqTexturaVinho = await buscaAsset(idTexturaVinho)

  if (status === StatusRequisicao.ERRO) {
    return {
      notFound: true,
    }
  }

  if (status === StatusRequisicao.SUCESSO) {
    post = dados.post as PostTipo
  }

  if (reqTexturaVinho.status === StatusRequisicao.SUCESSO) {
    texturaVinho = reqTexturaVinho.dados.asset as Asset
  }

  return {
    props: {post, texturaVinho},
    revalidate: 1000,
  }
}
