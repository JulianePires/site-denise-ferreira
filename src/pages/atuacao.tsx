import {Carrossel} from '@components/Carrossel'
import {Container} from '@components/Container'
import {ContainerConteudo} from '@components/ContainerConteudo'
import {Direcoes, StatusRequisicao} from '@data/enums'
import {Asset, ElementoCarrosselTipo} from '@data/tipos'
import {LayoutPaginasSite} from '@layouts/LayoutPaginasSite'
import conteudoTexto from '@resources/conteudoTexto'
import cores from '@resources/cores'
import imagens from '@resources/imagens'
import margens from '@resources/margens'
import {buscaAsset} from '@services/requisicoes/asset'
import * as S from '@styles/Atuacao.styled'

interface Props {
  imagensAtuacao: Asset[]
}

export default function Atuacao({imagensAtuacao}: Props) {
  const [
    imagemJurista,
    texturaTerra,
    texturaAzulPetroleo,
    livrosEIniciativas1,
    livrosEIniciativas2,
    livrosEIniciativas3,
    livrosEIniciativas4,
    livrosEIniciativas5,
  ] = imagensAtuacao
  const {textoAtuacao} = conteudoTexto

  const elementosCarrossel: ElementoCarrosselTipo[] = [
    {
      imagem: livrosEIniciativas1.url,
      descricao: textoAtuacao.escritora.descricaoElemento.elemento1,
      linkExterno: textoAtuacao.escritora.linkElemento.elemento1,
      tipo: 'livro',
    },
    {
      imagem: livrosEIniciativas2.url,
      descricao: textoAtuacao.escritora.descricaoElemento.elemento2,
      linkExterno: textoAtuacao.escritora.linkElemento.elemento2,
      tipo: 'livro',
    },
    {
      imagem: livrosEIniciativas3.url,
      descricao: textoAtuacao.escritora.descricaoElemento.elemento3,
      linkExterno: textoAtuacao.escritora.linkElemento.elemento3,
      tipo: 'livro',
    },
    {
      imagem: livrosEIniciativas4.url,
      descricao: textoAtuacao.escritora.descricaoElemento.elemento4,
      linkExterno: textoAtuacao.escritora.linkElemento.elemento4,
      tipo: 'iniciativa',
    },
    {
      imagem: livrosEIniciativas5.url,
      descricao: textoAtuacao.escritora.descricaoElemento.elemento5,
      linkExterno: textoAtuacao.escritora.linkElemento.elemento5,
      tipo: 'iniciativa',
    },
  ]

  const idAncoraJurista = 'ancora-jurista'

  return (
    <LayoutPaginasSite titulo="Atuação">
      <S.ContainerJurista>
        <Container id={idAncoraJurista}>
          <S.TituloJurista
            data-aos="fade-right"
            data-aos-anchor={`#${idAncoraJurista}`}>
            {textoAtuacao.jurista.titulo}
          </S.TituloJurista>
          <S.TextoDescricaoJurista
            data-aos="fade-right"
            data-aos-anchor={`#${idAncoraJurista}`}
            data-aos-delay="200">
            {textoAtuacao.jurista.conteudo}
          </S.TextoDescricaoJurista>
        </Container>
        <Container
          imagemFundo={texturaTerra.url && texturaTerra.url}
          padding={`${margens.xxxlarge}px ${margens.xlarge}px`}>
          <S.ImagemJurista
            src={imagemJurista.url && imagemJurista.url}
            alt="Imagem jurista assinando papéis"
            width={380}
            height={300}
            data-aos="fade-left"
            data-aos-anchor={`#${idAncoraJurista}`}
            data-aos-delay="300"
          />
        </Container>
      </S.ContainerJurista>
      <ContainerConteudo
        direcao={Direcoes.V}
        corBackground={cores.azulPetroleo}>
        <S.CabecalhoEscritora>
          <S.TituloEscritora>{textoAtuacao.escritora.titulo}</S.TituloEscritora>
        </S.CabecalhoEscritora>
        <Container imagemFundo={texturaAzulPetroleo && texturaAzulPetroleo.url}>
          <Carrossel elementos={elementosCarrossel} direcao={Direcoes.H} />
        </Container>
      </ContainerConteudo>
    </LayoutPaginasSite>
  )
}

export async function getServerSideProps() {
  const {
    idImagemJurista,
    idTexturaTerra,
    idTexturaAzulPetroleo,
    idLivrosEIniciativas1,
    idLivrosEIniciativas2,
    idLivrosEIniciativas3,
    idLivrosEIniciativas4,
    idLivrosEIniciativas5,
  } = imagens

  const reqImagemJurista = await buscaAsset(idImagemJurista)
  const reqTexturaTerra = await buscaAsset(idTexturaTerra)
  const reqTexturaAzulPetroleo = await buscaAsset(idTexturaAzulPetroleo)
  const reqLivrosEIniciativas1 = await buscaAsset(idLivrosEIniciativas1)
  const reqLivrosEIniciativas2 = await buscaAsset(idLivrosEIniciativas2)
  const reqLivrosEIniciativas3 = await buscaAsset(idLivrosEIniciativas3)
  const reqLivrosEIniciativas4 = await buscaAsset(idLivrosEIniciativas4)
  const reqLivrosEIniciativas5 = await buscaAsset(idLivrosEIniciativas5)

  let imagemJurista = {}
  let texturaTerra = {}
  let texturaAzulPetroleo = {}
  let livrosEIniciativas1 = {}
  let livrosEIniciativas2 = {}
  let livrosEIniciativas3 = {}
  let livrosEIniciativas4 = {}
  let livrosEIniciativas5 = {}

  if (reqImagemJurista.status === StatusRequisicao.SUCESSO) {
    imagemJurista = reqImagemJurista.dados.asset as Asset
  }

  if (reqTexturaTerra.status === StatusRequisicao.SUCESSO) {
    texturaTerra = reqTexturaTerra.dados.asset as Asset
  }

  if (reqTexturaAzulPetroleo.status === StatusRequisicao.SUCESSO) {
    texturaAzulPetroleo = reqTexturaAzulPetroleo.dados.asset as Asset
  }

  if (reqLivrosEIniciativas1.status === StatusRequisicao.SUCESSO) {
    livrosEIniciativas1 = reqLivrosEIniciativas1.dados.asset as Asset
  }

  if (reqLivrosEIniciativas2.status === StatusRequisicao.SUCESSO) {
    livrosEIniciativas2 = reqLivrosEIniciativas2.dados.asset as Asset
  }

  if (reqLivrosEIniciativas3.status === StatusRequisicao.SUCESSO) {
    livrosEIniciativas3 = reqLivrosEIniciativas3.dados.asset as Asset
  }

  if (reqLivrosEIniciativas4.status === StatusRequisicao.SUCESSO) {
    livrosEIniciativas4 = reqLivrosEIniciativas4.dados.asset as Asset
  }

  if (reqLivrosEIniciativas5.status === StatusRequisicao.SUCESSO) {
    livrosEIniciativas5 = reqLivrosEIniciativas5.dados.asset as Asset
  }

  return {
    props: {
      imagensAtuacao: [
        imagemJurista,
        texturaTerra,
        texturaAzulPetroleo,
        livrosEIniciativas1,
        livrosEIniciativas2,
        livrosEIniciativas3,
        livrosEIniciativas4,
        livrosEIniciativas5,
      ],
    },
  }
}
