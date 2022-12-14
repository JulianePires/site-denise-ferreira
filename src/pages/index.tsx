import {Botao} from '@components/Botao'
import {Container} from '@components/Container'
import {ContainerConteudo} from '@components/ContainerConteudo'
import {Stack} from '@components/Stack'
import {Tab} from '@components/Tab'
import {Direcoes, EstilosBotao, Rotas, StatusRequisicao} from '@data/enums'
import {Asset} from '@data/tipos'
import {buscaAsset} from '@infrastructure/requisicoes/asset'
import {LayoutPaginasSite} from '@layouts/LayoutPaginasSite'
import conteudoTexto from '@resources/conteudoTexto'
import cores from '@resources/cores'
import imagens from '@resources/imagens'
import margens from '@resources/margens'
import * as S from '@styles/Home.styled'
import {GetServerSidePropsContext} from 'next'
import {useRouter} from 'next/router'

interface Props {
  fotoDenise: Asset
  logoBranca: Asset
  texturaTerra: Asset
}

export default function Home({fotoDenise ,logoBranca, texturaTerra}: Props) {
  const {botaoContato, textoHome} = conteudoTexto
  const router = useRouter()

  function navegarParaPaginaDeContato() {
    router.push(Rotas.CONTATO)
  }

  return (
    <LayoutPaginasSite titulo="Página Inicial">
      <ContainerConteudo corBackground={cores.terra} altura={600}>
        <Container
          largura="100%"
          id="ancora-banner"
          padding={`${margens.xxxlarge}px ${margens.xxxlarge}px`}>
          <Stack direcao={Direcoes.V} gap="1rem" margem="0 0 2.5rem 0">
            <S.LogoBanner
              src={logoBranca.url}
              alt="Logo Denise Ferreira"
              width={logoBranca.width}
              height={logoBranca.height}
              data-aos="fade-right"
              data-aos-anchor="#ancora-banner"
            />
            <S.TextoDescricaoBanner
              data-aos="fade-right"
              data-aos-anchor="#ancora-banner"
              data-aos-delay="200">
              {textoHome.textoDescricaoBanner}
            </S.TextoDescricaoBanner>
          </Stack>
          <Botao
            aoClicar={navegarParaPaginaDeContato}
            tema="vinho"
            estilo={EstilosBotao.SOLID}
            ariaLabel={botaoContato.ariaLabel}>
            {botaoContato.texto}
          </Botao>
        </Container>
        <S.ContainerFotoBanner imagemFundo={texturaTerra.url}>
          <S.FotoBanner
            src={fotoDenise.url}
            alt="Foto Denise Ferreira"
            width={600}
            height={800}
            data-aos="fade-left"
            data-aos-anchor="#ancora-banner"
            data-aos-delay="300"
          />
        </S.ContainerFotoBanner>
      </ContainerConteudo>
      <ContainerConteudo corBackground={cores.azulPetroleo}>
        <Tab />
      </ContainerConteudo>
    </LayoutPaginasSite>
  )
}

export async function getServerSideProps({res}: GetServerSidePropsContext) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  )

  const {idLogoBranca, idFotoDenise, idTexturaTerra} = imagens

  const reqLogoBranca = await buscaAsset(idLogoBranca)
  const reqFotoDenise = await buscaAsset(idFotoDenise)
  const reqTexturaTerra = await buscaAsset(idTexturaTerra)

  let logoBranca = {}
  let fotoDenise = {}
  let texturaTerra = {}

  if (reqLogoBranca.status === StatusRequisicao.SUCESSO) {
    logoBranca = reqLogoBranca.dados.asset as Asset
  }

  if (reqFotoDenise.status === StatusRequisicao.SUCESSO) {
    fotoDenise = reqFotoDenise.dados.asset as Asset
  }

  if (reqTexturaTerra.status === StatusRequisicao.SUCESSO) {
    texturaTerra = reqTexturaTerra.dados.asset as Asset
  }

  return {
    props: {logoBranca, fotoDenise, texturaTerra},
  }
}

//TODO: Realizar configuracoes de seguranca (variaveis de ambiente)
//TODO: Configurar autenticacao (next auth) para area de dashboard
//TODO: Imlementar acesso privado na pagina do dashboard
//TODO: Implementar a listagem de posts na pagina de blog
//TODO: Implementar filtro por categoria na pagina de blog
//TODO: Implementar busca por nome na pagina de blog
//TODO: Implementar página de detalhamento de post
//TODO: Criar páginas de login e criacao de conta para acesso a dashboard
//TODO: Criar página de criacao de post
//TODO: Criar página de edicao de post
//TODO: Criar pagina de gerenciamento de usuarios
//TODO: Criar pagina de edicao de perfil
//TODO: Verificar SEO e aplicar melhorias
//TODO: Criar página 404
//TODO: Criar página 500
//TODO: Criar fallback personalizado
//TODO: Criar página de loader
