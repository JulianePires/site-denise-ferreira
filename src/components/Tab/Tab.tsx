import {Container} from '@components/Container'
import {Stack} from '@components/Stack'
import {OpcoesMenuTab} from '@data/enums'
import {Asset, TemasCores} from '@data/tipos'
import {buscaAsset} from '@infrastructure/requisicoes/asset'
import conteudoTexto from '@resources/conteudoTexto'
import cores from '@resources/cores'
import imagens from '@resources/imagens'
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
  const [sankofaAzulPetroleo, setSankofaAzulPetroleo] = useState('')
  const [sankofaAzul, setSankofaAzul] = useState('')

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
      icone: sankofaAzul,
      corFundo: cores.azulRoyal as TemasCores,
      titulo: textoTab[OpcoesMenuTab.SONHAR].titulo,
      conteudo: textoTab[OpcoesMenuTab.SONHAR].conteúdo,
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
    <S.ContainerTab id="ancora-tab" corFundo={tabAtiva.corFundo}>
      <S.ControleTab corFundo={cores.vinho}>
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
      <Stack direcao="horizontal" gap="0" quebra={true}>
        <S.LayoutTab>
          <S.TituloLayoutTab
            data-aos="fade-right"
            data-aos-anchor="#ancora-tab">
            {tabAtiva.titulo}
          </S.TituloLayoutTab>
          <S.TextoLayoutTab
            data-aos="fade-right"
            data-aos-anchor="#ancora-tab"
            data-aos-delay="200">
            {tabAtiva.conteudo}
          </S.TextoLayoutTab>
        </S.LayoutTab>
        <Container altura="100%" imagemFundo={urlImagemFundo} />
      </Stack>
    </S.ContainerTab>
  )
}
