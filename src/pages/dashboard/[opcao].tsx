/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Head} from '@/components/Head'
import {MenuLateral} from '@/components/MenuLateral'
import {OpcoesParametroDashboard, StatusRequisicao} from '@/data/enums'
import {
  Caminho,
  OpcaoMenu,
  Post,
  RespostaRequisicao,
  Usuario,
} from '@/data/tipos'
import {CriarPostagemDashboard} from '@/layouts/CriarPostagemDashboard'
import {PostagensDashboard} from '@/layouts/PostagensDashboard'
import {UsuariosDashboard} from '@/layouts/UsuariosDashboard'
import opcoesMenuDashboard from '@/routes/dashboard'
import {buscaPosts} from '@/infrastructure/requisicoes/post'
import {buscaUsuarios} from '@/infrastructure/requisicoes/usuario'
import {Container} from '@/styles/Dashboard.styled'
import {GetStaticPaths, GetStaticProps} from 'next'
import {useRouter} from 'next/router'

interface Props {
  posts?: Post[]
  usuarios?: Usuario[]
}

export default function Dashboard(dados: Props) {
  const router = useRouter()
  const {opcao} = router.query
  const opcaoAtual = opcao as string

  function aoAlterarOpcao(opcao: OpcaoMenu) {
    router.push(`/dashboard/${opcao.caminho}`)
  }

  function trataTelaPorOpcao() {
    if (opcaoAtual === OpcoesParametroDashboard.POSTAGENS) {
      const {posts} = dados
      return <PostagensDashboard postagens={posts!} />
    }
    if (opcaoAtual === OpcoesParametroDashboard.USUARIOS) {
      const {usuarios} = dados
      return <UsuariosDashboard usuarios={usuarios!} />
    }
    return <CriarPostagemDashboard />
  }

  return (
    <Container>
      <Head titulo="Dashboard" />
      <MenuLateral
        titulo="Administradora"
        opcoes={opcoesMenuDashboard}
        opcaoAtual={opcaoAtual}
        aoAlterarOpcao={aoAlterarOpcao}
      />
      {trataTelaPorOpcao()}
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const caminhos: Caminho[] = opcoesMenuDashboard.map((opcao) => ({
    params: {
      opcao: opcao.caminho,
    },
  }))
  return {
    paths: caminhos,
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  let resposta: RespostaRequisicao = {
    dados: {},
    status: StatusRequisicao.PARADO,
  }

  if (params!.opcao === OpcoesParametroDashboard.POSTAGENS) {
    resposta = await buscaPosts()
    return {
      props: {
        posts: resposta.dados.posts,
      },
    }
  }

  if (params!.opcao === OpcoesParametroDashboard.USUARIOS) {
    resposta = await buscaUsuarios()
    return {
      props: {
        usuarios: resposta.dados.users,
      },
    }
  }

  return {
    props: {},
  }
}
