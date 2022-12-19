import {Container} from '@components/Container'
import {Stack} from '@components/Stack'
import {OpcoesMenuTab} from '@data/enums'
import {TemasCores} from '@data/tipos'
import useAssets from '@hooks/useAssets'
import useTamanhoTela from '@hooks/useTamanhoTela'
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
  const {texturaAzul, buscaAtualizaAsset} = useAssets()
  const [sankofaLaranja, setSankofaLaranja] = useState('')
  const [sankofaAzul, setSankofaAzul] = useState('')
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
      icone: sankofaAzul,
      corFundo: cores.azulRoyal as TemasCores,
      titulo: textoTab[OpcoesMenuTab.SONHAR].titulo,
      conteudo: textoTab[OpcoesMenuTab.SONHAR].conteúdo,
    },
  ]

  const [tabAtiva, setTabAtiva] = useState<OpcaoTabTipo>(opcoesTab[0])

  const corTexto = cores.branco

  const {idSankofaLaranja, idSankofaAzulPetroleo, idSankofaAzul} = imagens

  function defineTabAtualComoAtiva(tab: OpcaoTabTipo) {
    setTabAtiva(tab)
  }

  function atualizaImagens() {
    buscaAtualizaAsset(idSankofaLaranja, (imagem) =>
      setSankofaLaranja(imagem.url),
    )
    buscaAtualizaAsset(idSankofaAzulPetroleo, (imagem) =>
      setSankofaAzulPetroleo(imagem.url),
    )
    buscaAtualizaAsset(idSankofaAzul, (imagem) => setSankofaAzul(imagem.url))
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
        {(!tamanhoTela.width || tamanhoTela.width >= 1024) && (
          <Container altura="100%" imagemFundo={texturaAzul?.url} />
        )}
      </Stack>
    </S.ContainerTab>
  )
}
