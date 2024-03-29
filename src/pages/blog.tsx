/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Avatar} from '@/components/Avatar'
import {Botao} from '@/components/Botao'
import {Container} from '@/components/Container'
import {ContainerConteudo} from '@/components/ContainerConteudo'
import {ControleElementos} from '@/components/ControleElementos'
import {Erro} from '@/components/Erro'
import {PostListagem} from '@/components/PostListagem'
import {Stack} from '@/components/Stack'
import {Titulo} from '@/components/Titulo'
import {Asset, Post} from '@/data/tipos'
import useNavegacao from '@/hooks/useNavegacao'
import usePosts from '@/hooks/usePosts'
import useTamanhoTela from '@/hooks/useTamanhoTela'
import {formataDataParaPadrao} from '@/infrastructure/funcoes'
import {buscaAsset} from '@/infrastructure/requisicoes/asset'
import {buscaPosts, buscaPostsDestaque} from '@/infrastructure/requisicoes/post'
import {LayoutPaginasSite} from '@/layouts/LayoutPaginasSite'
import conteudoTexto from '@/resources/conteudoTexto'
import cores from '@/resources/cores'
import imagens from '@/resources/imagens'
import margens from '@/resources/margens'
import * as S from '@/styles/Blog.styled'
import {GetStaticProps, InferGetStaticPropsType} from 'next'
import {isEmpty} from 'ramda'
import {useEffect, useState} from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import {BsBoxArrowInUpRight, BsCalendarDateFill} from 'react-icons/bs'
import {Direcoes, StatusRequisicao, TamanhosComponente} from 'src/data/enums'

export default function Blog({
  destaques,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [indexDestaque, setIndexDestaque] = useState<number>(0)
  const postDestaque = destaques[indexDestaque]
  const maxDestaques = destaques.length
  const {destaque, titulo} = conteudoTexto.textoBlog
  const {tamanhoTela} = useTamanhoTela()
  const {navegarParaPostPorSlug} = useNavegacao()

  const {posts, buscaTitulo, alteraValorBuscaTitulo} = usePosts()

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

  useEffect(() => {
    setTimeout(() => avancarIndexDestaque(), 2000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LayoutPaginasSite titulo="Blog">
      <S.ContainerDestaqueBlog corBackground={cores.terra} reverso={true}>
        <Container padding={`${margens.xxxlarge}px ${margens.large}px`}>
          <S.TituloDestaqueBlog>{postDestaque?.titulo}</S.TituloDestaqueBlog>

          <S.ConteudoDestaqueBlog>
            {postDestaque.conteudo.body.text
              .replace(/\\n/g, '\n')
              .slice(0, 300) + '...'}
          </S.ConteudoDestaqueBlog>

          <Stack
            direcao={Direcoes.H}
            gap="1rem"
            justificar={tamanhoTela.width! <= 514 ? 'center' : 'space-around'}
            alinhar="center"
            quebra={tamanhoTela.width! > 514 ? false : true}
            margem="0 0 2rem 0">
            <Stack
              direcao={Direcoes.H}
              gap="1rem"
              alinhar="center"
              largura="fit-content">
              <Avatar
                src={postDestaque.autor.foto.url}
                alt="Imagem do criador do post"
                tamanho={TamanhosComponente.PP}
              />
              <S.InformacoesDestaqueBlog>
                {postDestaque.autor.nome}
              </S.InformacoesDestaqueBlog>
            </Stack>

            <Stack
              direcao={Direcoes.H}
              gap="1rem"
              alinhar="center"
              largura="fit-content">
              <BsCalendarDateFill color={cores.branco} />
              <S.InformacoesDestaqueBlog>
                {formataDataParaPadrao(postDestaque.createdAt)}
              </S.InformacoesDestaqueBlog>
            </Stack>

            <Botao
              tema="terra"
              estilo="solid"
              aoClicar={() => navegarParaPostPorSlug(postDestaque.slug)}
              ariaLabel={destaque.botao.ariaLabel}>
              {destaque.botao.texto}
              <BsBoxArrowInUpRight className="ml-2" />
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

        <Container
          altura={
            tamanhoTela.width! < 1024 ? `${tamanhoTela.width}px` : '720px'
          }
          imagemFundo={postDestaque.imagem?.url}
          corFundo={cores.vinho}
        />
      </S.ContainerDestaqueBlog>
      <ContainerConteudo corBackground={cores.vinho} direcao={Direcoes.V}>
        <Container altura="150px" corFundo={cores.amarelo} largura="100%">
          <Stack
            direcao={tamanhoTela.width! <= 640 ? Direcoes.V : Direcoes.H}
            gap="1rem"
            justificar="space-between"
            alinhar="center"
            largura="100%"
            quebra={true}>
            <Titulo corTexto={cores.vinho}>{titulo}</Titulo>
            <S.BuscaPostBlog
              id="buscarArtigo"
              label="Buscar"
              nomeCampo="buscarArtigo"
              placeholder="O que buscar?"
              icone={BiSearchAlt}
              valor={buscaTitulo}
              aoAlterar={({target}) => alteraValorBuscaTitulo(target.value)}
              corLabel={cores.terra}
              corCampo={cores.vinho}
              corTexto={cores.terra}
            />
          </Stack>
        </Container>
        <Container
          altura="fit-content"
          largura="100%"
          padding={`${margens.xxxlarge}px ${margens.large}px`}
          overflowX="scroll">
          <Stack
            direcao={Direcoes.H}
            gap="2rem"
            largura="fit-content"
            autoAlinhar={
              isEmpty(posts) || (tamanhoTela.width! > 1024 && posts.length < 4)
                ? 'center'
                : 'flex-start'
            }>
            {isEmpty(posts) ? (
              <Erro
                codigo={404}
                mensagem="Não foram encontrados posts com esse termo"
              />
            ) : (
              posts.map(
                ({
                  autor,
                  categorias,
                  conteudo,
                  createdAt,
                  id,
                  imagem,
                  slug,
                  subtitulo,
                  titulo,
                }) => (
                  <PostListagem
                    key={id}
                    autor={autor}
                    categorias={categorias}
                    conteudo={conteudo.body.text}
                    dataCriacao={createdAt}
                    imagem={{
                      src: imagem.url,
                      alt: titulo,
                    }}
                    slug={slug}
                    titulo={titulo}
                    subtitulo={subtitulo}
                  />
                ),
              )
            )}
          </Stack>
        </Container>
      </ContainerConteudo>
    </LayoutPaginasSite>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const {idTexturaAmarela} = imagens

  const {dados, status} = await buscaPosts()
  const reqPostsDestaques = await buscaPostsDestaque()
  const reqTexturaAmarela = await buscaAsset(idTexturaAmarela)

  let posts: Post[] = []
  let destaques: Post[] = []
  let texturaAmarela = {}

  if (status === StatusRequisicao.SUCESSO) posts = dados.posts

  if (reqPostsDestaques.status === StatusRequisicao.SUCESSO)
    destaques = reqPostsDestaques.dados.posts

  if (reqTexturaAmarela.status === StatusRequisicao.SUCESSO)
    texturaAmarela = reqTexturaAmarela.dados.asset as Asset

  return {
    props: {
      posts,
      destaques,
      texturaAmarela,
    },
  }
}
