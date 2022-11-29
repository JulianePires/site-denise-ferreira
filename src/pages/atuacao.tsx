import {ContainerConteudo} from '@components/ContainerConteudo'
import {TextoG, TextoM} from '@components/Texto/Texto.styled'
import {StatusRequisicao} from '@data/enums'
import {Asset} from '@data/tipos'
import {LayoutPaginasSite} from '@layouts/LayoutPaginasSite'
import conteudoTexto from '@resources/conteudoTexto'
import cores from '@resources/cores'
import imagens from '@resources/imagens'
import {buscaAsset} from '@services/requisicoes/asset'
import {ContainerJurista} from '@styles/Atuacao.styled'

export default function Atuacao() {
  const {textoAtuacao} = conteudoTexto
  return (
    <LayoutPaginasSite titulo="Atuação">
      <ContainerConteudo corBackground={cores.terra}>
        <ContainerJurista>
          <TextoG>{textoAtuacao.jurista.titulo}</TextoG>
          <TextoM>{textoAtuacao.jurista.conteudo}</TextoM>
        </ContainerJurista>
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
