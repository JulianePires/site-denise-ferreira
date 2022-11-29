import {Container} from '@components/Container'
import {Stack} from '@components/Stack'
import {OpcoesMenuTab} from '@data/enums'
import {Asset, TemasCores} from '@data/tipos'
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
  const [sankofaAzul, setSankofaAzul] = useState('')

  const opcoesTab: OpcaoTabTipo[] = [
    {
      nomeOpcao: OpcoesMenuTab.SER,
      icone: sankofaAzulPetroleo,
      corFundo: cores.azulPetroleo as TemasCores,
      titulo: conteudoTexto.textoTab[OpcoesMenuTab.SER].titulo,
      conteudo: conteudoTexto.textoTab[OpcoesMenuTab.SER].conteúdo,
    },
    {
      nomeOpcao: OpcoesMenuTab.AGIR,
      icone: sankofaLaranja,
      corFundo: cores.laranja as TemasCores,
      titulo: conteudoTexto.textoTab[OpcoesMenuTab.AGIR].titulo,
      conteudo: conteudoTexto.textoTab[OpcoesMenuTab.AGIR].conteúdo,
    },
    {
      nomeOpcao: OpcoesMenuTab.SONHAR,
      icone: sankofaAzul,
      corFundo: cores.azulRoyal as TemasCores,
      titulo: conteudoTexto.textoTab[OpcoesMenuTab.SONHAR].titulo,
      conteudo: conteudoTexto.textoTab[OpcoesMenuTab.SONHAR].conteúdo,
    },
  ]

  const [tabAtiva, setTabAtiva] = useState<OpcaoTabTipo>(opcoesTab[0])

  const {
    idTexturaAzul,
    idSankofaLaranja,
    idSankofaAzulPetroleo,
    idSankofaAzul,
  } = imagens

  function defineTabAtualComoAtiva(tab: OpcaoTabTipo) {
    setTabAtiva(tab)
  }

  function atualizaImagens() {
    const reqTexturaAzul = buscaAsset(idTexturaAzul)
    const reqSankofaLaranja = buscaAsset(idSankofaLaranja)
    const reqSankofaAzulPetroleo = buscaAsset(idSankofaAzulPetroleo)
    const reqSankofaAzul = buscaAsset(idSankofaAzul)

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

    reqSankofaAzul.then((resposta) => {
      const imagem = resposta.dados.asset as Asset
      setSankofaAzul(imagem.url)
    })
  }

  useEffect(() => {
    atualizaImagens()
  }, [])

  return (
    <ContainerTab id="ancora-tab" corFundo={tabAtiva.corFundo}>
      <ControleTab corFundo={cores.vinho}>
        {opcoesTab.map((opcao: OpcaoTabTipo, index: number) => (
          <OpcaoTab
            ativa={String(opcao.nomeOpcao === tabAtiva.nomeOpcao)}
            onClick={() => defineTabAtualComoAtiva(opcao)}
            key={index}>
            <Image
              src={opcao.icone}
              alt={opcao.nomeOpcao}
              width={66.67}
              height={50}
            />
            {opcao.nomeOpcao}
          </OpcaoTab>
        ))}
      </ControleTab>
      <Stack direcao="horizontal" gap="0" wrap={true}>
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
