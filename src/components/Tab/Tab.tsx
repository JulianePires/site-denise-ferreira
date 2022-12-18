import {Container} from '@components/Container'
import {Stack} from '@components/Stack'
import {OpcoesMenuTab} from '@data/enums'
import {Asset, TemasCores} from '@data/tipos'
import useTamanhoTela from '@hooks/useTamanhoTela'
import {buscaAsset} from '@infrastructure/requisicoes/asset'
import conteudoTexto from '@resources/conteudoTexto'
import cores from '@resources/cores'
import imagens from '@resources/imagens'
import margens from '@resources/margens'
import {useEffect, useState} from 'react'
import * as S from './Tab.styled'

type OpcaoTabTipo = {
  nomeOpcao: 'sonhar' | 'agir' | 'ser'
  icone: string
  corFundo: TemasCores
  titulo: string
  conteudo: string
}

export function Tab() {
  const [urlImagemFundo, setUrlImagemFundo] = useState('')
  const [sankofaLaranja, setSankofaLaranja] = useState('')
  const [sankofaAmarela, setSankofaAmarela] = useState('')
  const [sankofaAzulPetroleo, setSankofaAzulPetroleo] = useState('')
  const {tamanhoTela} = useTamanhoTela()

  const {textoTab} = conteudoTexto.textoHome

  const opcoesTab: OpcaoTabTipo[] = [
    {
      nomeOpcao: OpcoesMenuTab.SER,
      icone: sankofaAzulPetroleo,
      corFundo: cores.azulPetroleo as TemasCores,
      titulo: textoTab[OpcoesMenuTab.SER].titulo,
      conteudo: textoTab[OpcoesMenuTab.SER].conteúdo,
    },
    {
      nomeOpcao: OpcoesMenuTab.AGIR,
      icone: sankofaLaranja,
      corFundo: cores.laranja as TemasCores,
      titulo: textoTab[OpcoesMenuTab.AGIR].titulo,
      conteudo: textoTab[OpcoesMenuTab.AGIR].conteúdo,
    },
    {
      nomeOpcao: OpcoesMenuTab.SONHAR,
      icone: sankofaAmarela,
      corFundo: cores.amarelo as TemasCores,
      titulo: textoTab[OpcoesMenuTab.SONHAR].titulo,
      conteudo: textoTab[OpcoesMenuTab.SONHAR].conteúdo,
    },
  ]

  const [tabAtiva, setTabAtiva] = useState<OpcaoTabTipo>(opcoesTab[0])

  const corTexto =
    tabAtiva.corFundo === cores.amarelo ? cores.vinho : cores.branco

  const {
    idTexturaAzul,
    idSankofaLaranja,
    idSankofaAzulPetroleo,
    idSankofaAmarela,
  } = imagens

  function defineTabAtualComoAtiva(tab: OpcaoTabTipo) {
    setTabAtiva(tab)
  }

  function atualizaImagens() {
    const reqTexturaAzul = buscaAsset(idTexturaAzul)
    const reqSankofaLaranja = buscaAsset(idSankofaLaranja)
    const reqSankofaAzulPetroleo = buscaAsset(idSankofaAzulPetroleo)
    const reqSankofaAmarela = buscaAsset(idSankofaAmarela)

    reqTexturaAzul.then((resposta) => {
      const imagem = resposta.dados.asset as Asset
      setUrlImagemFundo(imagem.url)
    })

    reqSankofaLaranja.then((resposta) => {
      const imagem = resposta.dados.asset as Asset
      setSankofaLaranja(imagem.url)
    })

    reqSankofaAzulPetroleo.then((resposta) => {
      const imagem = resposta.dados.asset as Asset
      setSankofaAzulPetroleo(imagem.url)
    })

    reqSankofaAmarela.then((resposta) => {
      const imagem = resposta.dados.asset as Asset
      setSankofaAmarela(imagem.url)
    })
  }

  useEffect(() => {
    atualizaImagens()
  }, [])

  return (
    <S.ContainerTab id="ancora-tab" corFundo={tabAtiva.corFundo}>
      <S.BarraControleTab>
        <S.ControleTab>
          {opcoesTab.map((opcao: OpcaoTabTipo, index: number) => (
            <S.OpcaoTab
              ativa={String(opcao.nomeOpcao === tabAtiva.nomeOpcao)}
              onClick={() => defineTabAtualComoAtiva(opcao)}
              key={index}>
              <S.ImagemOpcaoTab
                src={opcao.icone}
                alt={opcao.nomeOpcao}
                width={66.67}
                height={50}
              />
              {opcao.nomeOpcao}
            </S.OpcaoTab>
          ))}
        </S.ControleTab>
      </S.BarraControleTab>
      <Stack direcao="horizontal" gap="0" quebra={true}>
        <Container
          altura="fit-content"
          padding={`${margens.xxxlarge}px ${margens.xxxlarge}px`}>
          <S.TituloLayoutTab
            corTexto={corTexto}
            data-aos="fade-right"
            data-aos-anchor="#ancora-tab">
            {tabAtiva.titulo}
          </S.TituloLayoutTab>
          <S.TextoLayoutTab
            data-aos="fade-right"
            data-aos-anchor="#ancora-tab"
            data-aos-delay="200"
            corTexto={corTexto}>
            {tabAtiva.conteudo}
          </S.TextoLayoutTab>
        </Container>
        {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
        {tamanhoTela.width! >= 1024 && (
          <Container altura="100%" imagemFundo={urlImagemFundo} />
        )}
      </Stack>
    </S.ContainerTab>
  )
}
