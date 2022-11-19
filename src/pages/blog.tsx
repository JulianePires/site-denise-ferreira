import {Post} from '@data/tipos'
import {LayoutPaginasSite} from '@layouts/LayoutPaginasSite'
import {buscaPosts} from '@services/requisicoes/post'
import {StatusRequisicao} from 'src/data/enums'

interface BlogProps {
  posts: Post[]
}

export default function Blog(props: BlogProps) {
  console.log(props)

  return (
    <LayoutPaginasSite titulo="Blog">
      <h1>Blog</h1>
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
