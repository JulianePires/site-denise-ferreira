import {Botao} from '@components/Botao'
import {Carrossel} from '@components/Carrossel'
import {Container} from '@components/Container'
import {ContainerConteudo} from '@components/ContainerConteudo'
import {Icone} from '@components/Icone'
import {Direcoes, Rotas, StatusRequisicao} from '@data/enums'
import {Asset, ElementoCarrosselTipo} from '@data/tipos'
import {buscaAsset} from '@infrastructure/requisicoes/asset'
import {LayoutPaginasSite} from '@layouts/LayoutPaginasSite'
import conteudoTexto from '@resources/conteudoTexto'
import cores from '@resources/cores'
import imagens from '@resources/imagens'
import margens from '@resources/margens'
import * as S from '@styles/Atuacao.styled'
import {GetServerSidePropsContext} from 'next'
import {useRouter} from 'next/router'
import {BsCheck2Square} from 'react-icons/bs'

interface Props {
  imagensAtuacao: Asset[]
}

export default function Atuacao({imagensAtuacao}: Props) {
  const router = useRouter()

  function navegarParaPaginaDeContato() {
    router.push(Rotas.CONTATO)
  }

  const [
    imagemJurista,
    texturaTerra,
    texturaAzul,
    texturaAmarela,
    livrosEIniciativas1,
    livrosEIniciativas2,
    livrosEIniciativas3,
    livrosEIniciativas4,
    livrosEIniciativas5,
    livrosEIniciativas6,
    palestras1,
    palestras2,
    palestras3,
    palestras4,
    palestras5,
  ] = imagensAtuacao
  const {textoAtuacao} = conteudoTexto

  const elementosCarrosselEscritora: ElementoCarrosselTipo[] = [
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
    {
      imagem: livrosEIniciativas6.url,
      descricao: textoAtuacao.escritora.descricaoElemento.elemento6,
      linkExterno: textoAtuacao.escritora.linkElemento.elemento6,
      tipo: 'iniciativa',
    },
  ]

  const elementosCarrosselPalestrante: ElementoCarrosselTipo[] = [
    {
      imagem: palestras1.url,
      descricao: textoAtuacao.palestrante.palestras[0],
    },
    {
      imagem: palestras2.url,
      descricao: textoAtuacao.palestrante.palestras[1],
    },
    {
      imagem: palestras3.url,
      descricao: textoAtuacao.palestrante.palestras[2],
    },
    {
      imagem: palestras4.url,
      descricao: textoAtuacao.palestrante.palestras[3],
    },
    {
      imagem: palestras5.url,
      descricao: textoAtuacao.palestrante.palestras[4],
    },
  ]

  const idAncoraJurista = 'ancora-jurista'
  const idAncoraEscritora = 'ancora-escritora'
  const idAncoraPalestrante = 'ancora-palestrante'

  const itensPalestrante = textoAtuacao.palestrante.palestras

  return (
    <LayoutPaginasSite titulo="Atuação">
      <S.ContainerJurista altura={600}>
        <Container
          id={idAncoraJurista}
          padding={`${margens.xxxlarge}px ${margens.xlarge}px`}>
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
          padding={`${margens.xxxlarge}px ${margens.xlarge}px`}
          altura="600px">
          <S.ImagemJurista
            src={imagemJurista.url}
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
        direcao={Direcoes.H}
        corBackground={cores.azulRoyal}
        altura={600}>
        <Container
          id={idAncoraEscritora}
          padding={`${margens.xxxlarge}px ${margens.xlarge}px`}>
          <S.TituloEscritora
            data-aos="fade-right"
            data-aos-anchor={`#${idAncoraEscritora}`}>
            {textoAtuacao.escritora.titulo}
          </S.TituloEscritora>

          <S.TextoDescricaoEscritora
            data-aos="fade-right"
            data-aos-anchor={`#${idAncoraEscritora}`}
            data-aos-delay="100">
            {textoAtuacao.escritora.conteudo}
          </S.TextoDescricaoEscritora>
        </Container>

        <Container
          imagemFundo={texturaAmarela && texturaAmarela.url}
          id={idAncoraEscritora}>
          <Carrossel
            elementos={elementosCarrosselEscritora}
            direcao={Direcoes.H}
            corLegenda="azulPetroleo"
            corControles={cores.azulPetroleo}
            temaBotao="azulPetroleo"
          />
        </Container>
      </ContainerConteudo>
      <ContainerConteudo corBackground={cores.azulPetroleo} altura={600}>
        <Container
          id={idAncoraPalestrante}
          padding={`${margens.xxxlarge}px ${margens.xlarge}px`}>
          <S.TituloPalestrante
            data-aos="fade-right"
            data-aos-anchor={`#${idAncoraPalestrante}`}>
            {textoAtuacao.palestrante.titulo}
          </S.TituloPalestrante>

          <S.ListaPalestrante>
            {itensPalestrante.map((item, index) => (
              <S.ItemListaPalestrante
                key={index}
                data-aos="fade-right"
                data-aos-anchor={`#${idAncoraPalestrante}`}
                data-aos-delay={`${(index + 1) * 100}`}>
                <Icone
                  icone={BsCheck2Square}
                  cor={cores.amarelo}
                  tamanho={32}
                />

                <S.TextoItemListaPalestrante>
                  {item}
                </S.TextoItemListaPalestrante>
              </S.ItemListaPalestrante>
            ))}
          </S.ListaPalestrante>

          <Botao
            tamanho="M"
            tema="amarelo"
            estilo="solid"
            aoClicar={navegarParaPaginaDeContato}
            ariaLabel={textoAtuacao.palestrante.botao.ariaLabel}>
            {textoAtuacao.palestrante.botao.texto}
          </Botao>
        </Container>

        <Container
          imagemFundo={texturaAzul.url}
          padding={`${margens.xxxlarge}px ${margens.xxxlarge}px`}>
          <Carrossel
            elementos={elementosCarrosselPalestrante}
            direcao={Direcoes.V}
            corLegenda="azulRoyal"
          />
        </Container>
      </ContainerConteudo>
    </LayoutPaginasSite>
  )
}

export async function getServerSideProps({res}: GetServerSidePropsContext) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  )

  const {
    idImagemJurista,
    idTexturaTerra,
    idTexturaAzul,
    idTexturaAmarela,
    idLivrosEIniciativas1,
    idLivrosEIniciativas2,
    idLivrosEIniciativas3,
    idLivrosEIniciativas4,
    idLivrosEIniciativas5,
    idLivrosEIniciativas6,
    idPalestras1,
    idPalestras2,
    idPalestras3,
    idPalestras4,
    idPalestras5,
  } = imagens

  const reqImagemJurista = await buscaAsset(idImagemJurista)
  const reqTexturaTerra = await buscaAsset(idTexturaTerra)
  const reqTexturaAzul = await buscaAsset(idTexturaAzul)
  const reqTexturaAmarela = await buscaAsset(idTexturaAmarela)
  const reqLivrosEIniciativas1 = await buscaAsset(idLivrosEIniciativas1)
  const reqLivrosEIniciativas2 = await buscaAsset(idLivrosEIniciativas2)
  const reqLivrosEIniciativas3 = await buscaAsset(idLivrosEIniciativas3)
  const reqLivrosEIniciativas4 = await buscaAsset(idLivrosEIniciativas4)
  const reqLivrosEIniciativas5 = await buscaAsset(idLivrosEIniciativas5)
  const reqLivrosEIniciativas6 = await buscaAsset(idLivrosEIniciativas6)
  const reqPalestras1 = await buscaAsset(idPalestras1)
  const reqPalestras2 = await buscaAsset(idPalestras2)
  const reqPalestras3 = await buscaAsset(idPalestras3)
  const reqPalestras4 = await buscaAsset(idPalestras4)
  const reqPalestras5 = await buscaAsset(idPalestras5)

  let imagemJurista = {}
  let texturaTerra = {}
  let texturaAzul = {}
  let texturaAmarela = {}
  let livrosEIniciativas1 = {}
  let livrosEIniciativas2 = {}
  let livrosEIniciativas3 = {}
  let livrosEIniciativas4 = {}
  let livrosEIniciativas5 = {}
  let livrosEIniciativas6 = {}
  let palestras1 = {}
  let palestras2 = {}
  let palestras3 = {}
  let palestras4 = {}
  let palestras5 = {}

  if (reqImagemJurista.status === StatusRequisicao.SUCESSO) {
    imagemJurista = reqImagemJurista.dados.asset as Asset
  }

  if (reqTexturaTerra.status === StatusRequisicao.SUCESSO) {
    texturaTerra = reqTexturaTerra.dados.asset as Asset
  }

  if (reqTexturaAzul.status === StatusRequisicao.SUCESSO) {
    texturaAzul = reqTexturaAzul.dados.asset as Asset
  }

  if (reqTexturaAmarela.status === StatusRequisicao.SUCESSO) {
    texturaAmarela = reqTexturaAmarela.dados.asset as Asset
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

  if (reqLivrosEIniciativas6.status === StatusRequisicao.SUCESSO) {
    livrosEIniciativas6 = reqLivrosEIniciativas6.dados.asset as Asset
  }

  if (reqPalestras1.status === StatusRequisicao.SUCESSO) {
    palestras1 = reqPalestras1.dados.asset as Asset
  }

  if (reqPalestras2.status === StatusRequisicao.SUCESSO) {
    palestras2 = reqPalestras2.dados.asset as Asset
  }

  if (reqPalestras3.status === StatusRequisicao.SUCESSO) {
    palestras3 = reqPalestras3.dados.asset as Asset
  }

  if (reqPalestras4.status === StatusRequisicao.SUCESSO) {
    palestras4 = reqPalestras4.dados.asset as Asset
  }

  if (reqPalestras5.status === StatusRequisicao.SUCESSO) {
    palestras5 = reqPalestras5.dados.asset as Asset
  }

  return {
    props: {
      imagensAtuacao: [
        imagemJurista,
        texturaTerra,
        texturaAzul,
        texturaAmarela,
        livrosEIniciativas1,
        livrosEIniciativas2,
        livrosEIniciativas3,
        livrosEIniciativas4,
        livrosEIniciativas5,
        livrosEIniciativas6,
        palestras1,
        palestras2,
        palestras3,
        palestras4,
        palestras5,
      ],
    },
  }
}
