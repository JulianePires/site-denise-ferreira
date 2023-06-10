import {LayoutDashboard} from '@/components/LayoutDashboard'
import {Post} from '@/data/tipos'
import {ContainerPostagens} from './PostagensDashboard.styled'
import {Card} from '@/components/Card'

interface Props {
  postagens: Post[]
}

export function PostagensDashboard({postagens}: Props) {
  return (
    <LayoutDashboard titulo="Postagens">
      <ContainerPostagens>
        {postagens.map((postagem) => (
          <Card
            key={postagem.id}
            imagem={postagem.imagem.url}
            postId={postagem.id}
          />
        ))}
      </ContainerPostagens>
    </LayoutDashboard>
  )
}
