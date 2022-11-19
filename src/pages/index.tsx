import {Botao} from '@components/Botao'
import {ContainerConteudo} from '@components/ContainerConteudo'
import {Stack} from '@components/Stack'
import {Direcoes, EstilosBotao, StatusRequisicao} from '@data/enums'
import {Asset} from '@data/tipos'
import {LayoutPaginasSite} from '@layouts/LayoutPaginasSite'
import conteudoTexto from '@resources/conteudoTexto'
import cores from '@resources/cores'
import {buscaAsset} from '@services/requisicoes/asset'
import {
  ContainerBanner,
  FotoBanner,
  LogoBanner,
  TextoDescricaoBanner,
} from '@styles/Home.styled'

interface Props {
  fotoDenise: Asset
  logoBranca: Asset
}

export default function Home({fotoDenise, logoBranca}: Props) {
  return (
    <LayoutPaginasSite titulo="Página Inicial">
      <ContainerConteudo corBackground={cores.terra}>
        <ContainerBanner largura="70%">
          <Stack direcao={Direcoes.V} gap="1rem" margem="0 0 2.5rem 0">
            <LogoBanner
              src={logoBranca.url}
              alt="Logo Denise Ferreira"
              width={logoBranca.width}
              height={logoBranca.height}
            />
            <TextoDescricaoBanner>
              {conteudoTexto.textoDescricaoBanner}
            </TextoDescricaoBanner>
          </Stack>
          <Botao
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            aoClicar={() => {}}
            tema="vinho"
            tamanho="G"
            estilo={EstilosBotao.SOLID}>
            Entre em contato
          </Botao>
        </ContainerBanner>
        <ContainerBanner largura="30%">
          <FotoBanner
            src={fotoDenise.url}
            alt="Foto Denise Ferreira"
            width={fotoDenise.width}
            height={fotoDenise.height}
          />
        </ContainerBanner>
      </ContainerConteudo>
    </LayoutPaginasSite>
  )
}

export async function getStaticProps() {
  const idLogoBranca = 'clale22ud1yk809kc82o4r7d7'
  const idFotoDenise = 'claldupz61zxu0blvrwyp7se9'

  const reqLogoBranca = await buscaAsset(idLogoBranca)
  const reqFotoDenise = await buscaAsset(idFotoDenise)

  let logoBranca = {}
  let fotoDenise = {}

  if (reqLogoBranca.status === StatusRequisicao.SUCESSO) {
    logoBranca = reqLogoBranca.dados.asset as Asset
  }

  if (reqLogoBranca.status === StatusRequisicao.SUCESSO) {
    fotoDenise = reqFotoDenise.dados.asset as Asset
  }

  return {
    props: {logoBranca, fotoDenise},
  }
}
