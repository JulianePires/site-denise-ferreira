import {Container} from '@components/Container'
import { Stack } from '@components/Stack'
import {OpcoesMenuTab} from '@data/enums'
import {Asset, ChaveValor, TemasCores} from '@data/tipos'
import conteudoTexto from '@resources/conteudoTexto'
import cores from '@resources/cores'
import imagens from '@resources/imagens'
import {buscaAsset} from '@services/requisicoes/asset'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import {
  ContainerTab,
  ControleTab,
  LayoutTab,
  OpcaoTab,
  TextoLayoutTab,
  TituloLayoutTab,
} from './Tab.styled'

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
  const [sankofaAzulPetroleo, setSankofaAzulPetroleo] = useState('')
  const [sankofaVinho, setSankofaVinho] = useState('')

  const opcoesTab: OpcaoTabTipo[] = [
    {
      nomeOpcao: OpcoesMenuTab.SER,
      icone: sankofaLaranja,
      corFundo: cores.laranja as TemasCores,
      titulo: conteudoTexto.textoTab[OpcoesMenuTab.SER].titulo,
      conteudo: conteudoTexto.textoTab[OpcoesMenuTab.SER].conteúdo,
    },
    {
      nomeOpcao: OpcoesMenuTab.AGIR,
      icone: sankofaAzulPetroleo,
      corFundo: cores.azulPetroleo as TemasCores,
      titulo: conteudoTexto.textoTab[OpcoesMenuTab.AGIR].titulo,
      conteudo: conteudoTexto.textoTab[OpcoesMenuTab.AGIR].conteúdo,
    },
    {
      nomeOpcao: OpcoesMenuTab.SONHAR,
      icone: sankofaVinho,
      corFundo: cores.vinho as TemasCores,
      titulo: conteudoTexto.textoTab[OpcoesMenuTab.SONHAR].titulo,
      conteudo: conteudoTexto.textoTab[OpcoesMenuTab.SONHAR].conteúdo,
    },
  ]

  const [tabAtiva, setTabAtiva] = useState<OpcaoTabTipo>(opcoesTab[0])

  const {
    idTexturaAzul,
    idSankofaLaranja,
    idSankofaAzulPetroleo,
    idSankofaVinho,
  } = imagens

  function defineTabAtualComoAtiva(tab: OpcaoTabTipo) {
    setTabAtiva(tab)
  }

  function atualizaImagens() {
    const reqTexturaAzul = buscaAsset(idTexturaAzul)
    const reqSankofaLaranja = buscaAsset(idSankofaLaranja)
    const reqSankofaAzulPetroleo = buscaAsset(idSankofaAzulPetroleo)
    const reqSankofaVinho = buscaAsset(idSankofaVinho)

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

    reqSankofaVinho.then((resposta) => {
      const imagem = resposta.dados.asset as Asset
      setSankofaVinho(imagem.url)
    })
  }

  useEffect(() => {
    atualizaImagens()
  }, [])

  return (
    <ContainerTab id="ancora-tab" corFundo={tabAtiva.corFundo}>
      <ControleTab corFundo={cores.amarelo}>
        {opcoesTab.map((opcao: OpcaoTabTipo, index: number) => (
          <OpcaoTab
            ativa={String(opcao.nomeOpcao === tabAtiva.nomeOpcao)}
            onClick={() => defineTabAtualComoAtiva(opcao)}
            key={index}>
            <Image
              src={opcao.icone}
              alt={opcao.nomeOpcao}
              sizes=""
              width={66.67}
              height={50}
            />
            {opcao.nomeOpcao}
          </OpcaoTab>
        ))}
      </ControleTab>
      <Stack direcao="horizontal" gap='0'>
        <LayoutTab>
          <TituloLayoutTab data-aos="fade-right" data-aos-anchor="#ancora-tab">
            {tabAtiva.titulo}
          </TituloLayoutTab>
          <TextoLayoutTab
            data-aos="fade-right"
            data-aos-anchor="#ancora-tab"
            data-aos-delay="200">
            {tabAtiva.conteudo}
          </TextoLayoutTab>
        </LayoutTab>
        <Container imagemFundo={urlImagemFundo} />
      </Stack>
    </ContainerTab>
  )
}
