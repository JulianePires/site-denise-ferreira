import {Container} from '@components/Container'
import {ContainerConteudo} from '@components/ContainerConteudo'
import {Texto} from '@components/Texto'
import {StatusRequisicao, TamanhosTexto} from '@data/enums'
import {Asset} from '@data/tipos'
import {LayoutPaginasSite} from '@layouts/LayoutPaginasSite'
import conteudoTexto from '@resources/conteudoTexto'
import cores from '@resources/cores'
import imagens from '@resources/imagens'
import margens from '@resources/margens'
import {buscaAsset} from '@services/requisicoes/asset'
import * as S from '@styles/Atuacao.styled'

interface Props {
  imagemJurista: Asset
  texturaTerra: Asset
}

export default function Atuacao({texturaTerra, imagemJurista}: Props) {
  const {textoAtuacao} = conteudoTexto

  return (
    <LayoutPaginasSite titulo="Atuação">
      <ContainerConteudo corBackground={cores.terra}>
        <Container padding={`${margens.xxxlarge}px ${margens.xxxlarge}px`}>
          <S.TituloJurista>{textoAtuacao.jurista.titulo}</S.TituloJurista>
          <Texto tamanho={TamanhosTexto.M}>
            {textoAtuacao.jurista.conteudo}
          </Texto>
        </Container>
        <Container
          imagemFundo={texturaTerra.url && texturaTerra.url}
          padding={`${margens.xxxlarge}px ${margens.xxxlarge}px`}>
          <S.ImagemJurista
            src={imagemJurista.url && imagemJurista.url}
            alt="Imagem jurista assinando papéis"
            width={380}
            height={300}
          />
        </Container>
      </ContainerConteudo>
    </LayoutPaginasSite>
  )
}

export async function getStaticProps() {
  const {idImagemJurista, idTexturaTerra} = imagens

  const reqImagemJurista = await buscaAsset(idImagemJurista)
  const reqTexturaTerra = await buscaAsset(idTexturaTerra)

  let imagemJurista = {}
  let texturaTerra = {}

  if (reqImagemJurista.status === StatusRequisicao.SUCESSO) {
    imagemJurista = reqImagemJurista.dados.asset as Asset
  }

  if (reqTexturaTerra.status === StatusRequisicao.SUCESSO) {
    texturaTerra = reqTexturaTerra.dados.asset as Asset
  }

  return {
    props: {imagemJurista, texturaTerra},
  }
}
