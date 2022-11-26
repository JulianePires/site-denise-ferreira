import {Botao} from '@components/Botao'
import {ContainerConteudo} from '@components/ContainerConteudo'
import {Stack} from '@components/Stack'
import {Tab} from '@components/Tab'
import {Direcoes, EstilosBotao, Rotas, StatusRequisicao} from '@data/enums'
import {Asset} from '@data/tipos'
import {LayoutPaginasSite} from '@layouts/LayoutPaginasSite'
import conteudoTexto from '@resources/conteudoTexto'
import cores from '@resources/cores'
import imagens from '@resources/imagens'
import {buscaAsset} from '@services/requisicoes/asset'
import {
  ContainerBanner,
  FotoBanner,
  LogoBanner,
  TextoDescricaoBanner,
} from '@styles/Home.styled'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useRouter} from 'next/router'
import {useEffect} from 'react'

interface Props {
  fotoDenise: Asset
  logoBranca: Asset
  texturaAzul: Asset
  texturaVinho: Asset
  texturaTerra: Asset
}

export default function Home({
  fotoDenise,
  logoBranca,
  texturaAzul,
  texturaTerra,
  texturaVinho,
}: Props) {
  const router = useRouter()

  function navegarParaPaginaDeContato() {
    router.push(Rotas.CONTATO)
  }

  function handleScroll() {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
    })
  }

  useEffect(() => {
    handleScroll()
  }, [])

  return (
    <LayoutPaginasSite titulo="Página Inicial">
      <ContainerConteudo corBackground={cores.terra}>
        <ContainerBanner largura="100%" id="ancora-banner">
          <Stack direcao={Direcoes.V} gap="1rem" margem="0 0 2.5rem 0">
            <LogoBanner
              src={logoBranca.url}
              alt="Logo Denise Ferreira"
              width={logoBranca.width}
              height={logoBranca.height}
              data-aos="fade-out"
              data-aos-anchor="#ancora-banner"
            />
            <TextoDescricaoBanner
              data-aos="fade-right"
              data-aos-anchor="#ancora-banner"
              data-aos-delay="200">
              {conteudoTexto.textoDescricaoBanner}
            </TextoDescricaoBanner>
          </Stack>
          <Botao
            aoClicar={navegarParaPaginaDeContato}
            tema="vinho"
            tamanho="G"
            estilo={EstilosBotao.SOLID}>
            Entre em contato
          </Botao>
        </ContainerBanner>
        <ContainerBanner
          largura="100%"
          corFundo={cores.azulPetroleo}
          imagemFundo={texturaTerra.url}>
          <FotoBanner
            src={fotoDenise.url}
            alt="Foto Denise Ferreira"
            width={fotoDenise.width}
            height={fotoDenise.height}
            data-aos="fade-left"
            data-aos-anchor="#ancora-banner"
            data-aos-delay="300"
          />
        </ContainerBanner>
      </ContainerConteudo>
      <ContainerConteudo corBackground={cores.vinho}>
        <Tab />
      </ContainerConteudo>
    </LayoutPaginasSite>
  )
}

export async function getStaticProps() {
  const {
    idLogoBranca,
    idFotoDenise,
    idTexturaAzul,
    idTexturaVinho,
    idTexturaTerra,
  } = imagens

  const reqLogoBranca = await buscaAsset(idLogoBranca)
  const reqFotoDenise = await buscaAsset(idFotoDenise)
  const reqTexturaAzul = await buscaAsset(idTexturaAzul)
  const reqTexturaVinho = await buscaAsset(idTexturaVinho)
  const reqTexturaTerra = await buscaAsset(idTexturaTerra)

  let logoBranca = {}
  let fotoDenise = {}
  let texturaAzul = {}
  let texturaVinho = {}
  let texturaTerra = {}

  if (reqLogoBranca.status === StatusRequisicao.SUCESSO) {
    logoBranca = reqLogoBranca.dados.asset as Asset
  }

  if (reqFotoDenise.status === StatusRequisicao.SUCESSO) {
    fotoDenise = reqFotoDenise.dados.asset as Asset
  }

  if (reqTexturaAzul.status === StatusRequisicao.SUCESSO) {
    texturaAzul = reqTexturaAzul.dados.asset as Asset
  }

  if (reqTexturaVinho.status === StatusRequisicao.SUCESSO) {
    texturaVinho = reqTexturaVinho.dados.asset as Asset
  }

  if (reqTexturaTerra.status === StatusRequisicao.SUCESSO) {
    texturaTerra = reqTexturaTerra.dados.asset as Asset
  }

  return {
    props: {logoBranca, fotoDenise, texturaAzul, texturaTerra, texturaVinho},
  }
}
