import {Avatar} from '@components/Avatar'
import {Botao} from '@components/Botao'
import {CabecalhoArtigos} from '@components/CabecalhoArtigos'
import {Container} from '@components/Container'
import {ControleElementos} from '@components/ControleElementos'
import {Stack} from '@components/Stack'
import {Post} from '@data/tipos'
import {formataDataParaPadrao} from '@infrastructure/funcoes'
import {buscaPosts, buscaPostsDestaque} from '@infrastructure/requisicoes/post'
import {LayoutPaginasSite} from '@layouts/LayoutPaginasSite'
import conteudoTexto from '@resources/conteudoTexto'
import cores from '@resources/cores'
import margens from '@resources/margens'
import * as S from '@styles/Blog.styled'
import {useEffect, useState} from 'react'
import {BsCalendarDateFill} from 'react-icons/bs'
import {Direcoes, StatusRequisicao} from 'src/data/enums'

interface BlogProps {
  posts: Post[]
  destaques: Post[]
}

export default function Blog({posts, destaques}: BlogProps) {
  const [indexDestaque, setIndexDestaque] = useState<number>(0)
  const [buscaArtigo, setBuscaArtigo] = useState<string>('')
  const [erroBuscaArtigo, setErroBuscaArtigo] = useState<string>('')
  const postDestaque = destaques[indexDestaque]
  const maxDestaques = destaques.length
  const {destaque} = conteudoTexto.textoBlog

  function avancarIndexDestaque() {
    if (indexDestaque + 1 === maxDestaques) {
      setIndexDestaque(0)
    } else {
      setIndexDestaque(indexDestaque + 1)
    }
  }

  function voltarIndexDestaque() {
    if (indexDestaque - 1 < 0) {
      setIndexDestaque(maxDestaques - 1)
    } else {
      setIndexDestaque(indexDestaque - 1)
    }
  }

  function alterarValorBuscaArtigo(valor: string) {
    setBuscaArtigo(valor)
  }

  useEffect(() => {
    setTimeout(() => avancarIndexDestaque(), 2000)
  }, [])

  return (
    <LayoutPaginasSite titulo="Blog">
      <S.ContainerDestaqueBlog corBackground={cores.terra} reverso={true}>
        <Container padding={`${margens.xxxlarge}px ${margens.large}px`}>
          <S.TituloDestaqueBlog>{postDestaque?.title}</S.TituloDestaqueBlog>

          <S.ConteudoDestaqueBlog>
            {postDestaque.content.body.text.slice(0, 200) + '...'}
          </S.ConteudoDestaqueBlog>

          <Stack
            direcao={Direcoes.H}
            gap="1rem"
            justificar="space-between"
            quebra={true}>
            <Stack direcao={Direcoes.H} gap="1rem" alinhar="center">
              <Avatar
                src={postDestaque.createdBy.picture}
                alt="Imagem do criador do post"
                tamanho={50}
              />
              <S.InformacoesDestaqueBlog>
                {postDestaque.createdBy.name}
              </S.InformacoesDestaqueBlog>
            </Stack>

            <Stack direcao={Direcoes.H} gap="1rem" alinhar="center">
              <BsCalendarDateFill color={cores.branco} />
              <S.InformacoesDestaqueBlog>
                {formataDataParaPadrao(postDestaque.createdAt)}
              </S.InformacoesDestaqueBlog>
            </Stack>

            <Botao
              tamanho="M"
              tema="vinho"
              estilo="solid"
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              aoClicar={() => {}}
              ariaLabel={destaque.botao.ariaLabel}>
              {destaque.botao.texto}
            </Botao>
          </Stack>
          <ControleElementos
            elementoDestaque={indexDestaque}
            tamanhoArray={maxDestaques}
            direcao={Direcoes.H}
            aoClicarEmProximo={avancarIndexDestaque}
            aoClicarEmAnterior={voltarIndexDestaque}
          />
        </Container>
        <Container altura="600px" imagemFundo={postDestaque.image.url} />
      </S.ContainerDestaqueBlog>
      <CabecalhoArtigos
        textoBusca={buscaArtigo}
        aoAlterarTextoBusca={alterarValorBuscaArtigo}
        erro={erroBuscaArtigo}
      />
    </LayoutPaginasSite>
  )
}

export async function getStaticProps() {
  const {dados, status} = await buscaPosts()
  const reqPostsDestaques = await buscaPostsDestaque()

  let posts: Post[] = []
  let destaques: Post[] = []

  if (status === StatusRequisicao.SUCESSO) posts = dados.posts

  if (reqPostsDestaques.status === StatusRequisicao.SUCESSO)
    destaques = reqPostsDestaques.dados.posts

  return {
    props: {
      posts,
      destaques,
    },
  }
}
