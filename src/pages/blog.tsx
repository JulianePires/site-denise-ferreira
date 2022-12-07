import {Post} from '@data/tipos'
import {LayoutPaginasSite} from '@layouts/LayoutPaginasSite'
import {buscaPosts} from '@infrastructure/requisicoes/post'
import {StatusRequisicao} from 'src/data/enums'
import conteudoTexto from '@resources/conteudoTexto'
import * as S from '@styles/Blog.styled'
import {ContainerConteudo} from '@components/ContainerConteudo'
import cores from '@resources/cores'
import {Container} from '@components/Container'
import margens from '@resources/margens'

interface BlogProps {
  posts: Post[]
}

export default function Blog(props: BlogProps) {
  const {titulo} = conteudoTexto.textoBlog
  console.log(props)

  return (
    <LayoutPaginasSite titulo="Blog">
      <ContainerConteudo corBackground={cores.terra}>
        <Container padding={`${margens.xxxlarge}px ${margens.large}px`}>
          <S.TituloBlog>{titulo}</S.TituloBlog>
        </Container>
      </ContainerConteudo>
    </LayoutPaginasSite>
  )
}

export async function getStaticProps() {
  const {dados, status} = await buscaPosts()

  let posts = []

  if (status === StatusRequisicao.SUCESSO) posts = dados.posts

  return {
    props: {posts},
  }
}
