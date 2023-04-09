import {Stack} from '@/components/Stack'
import {Direcoes, EstilosBotao, TamanhosTexto} from '@/data/enums'
import {DirecoesTipo, ElementoCarrosselTipo, TemasCores} from '@/data/tipos'
import conteudoTexto from '@/resources/conteudoTexto'
import {useState} from 'react'
import * as S from './Carrossel.styled'

import {ControleElementos} from '@/components/ControleElementos'
import {abreUrlExternaEmNovaAba} from '@/infrastructure/funcoes'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import cores from '@/resources/cores'

interface Props {
  direcao: DirecoesTipo
  elementos: ElementoCarrosselTipo[]
  corLegenda?: TemasCores
  corControles?: string
  temaBotao?: TemasCores
}

export function Carrossel({
  direcao,
  elementos,
  corLegenda = 'vinho',
  corControles = cores.branco,
  temaBotao = 'vinho',
}: Props) {
  const [elementoAtual, setElementoAtual] = useState(0)

  const quantidadeDeElementos = elementos.length

  function avancaElementoAtual() {
    if (elementoAtual + 1 === quantidadeDeElementos) {
      setElementoAtual(0)
    } else {
      setElementoAtual(elementoAtual + 1)
    }
  }

  function retrocedeElementoAtual() {
    if (elementoAtual - 1 === -1) {
      setElementoAtual(quantidadeDeElementos - 1)
    } else {
      setElementoAtual(elementoAtual - 1)
    }
  }

  function atualizaElementoAtual(index: number) {
    if (elementoAtual !== index) {
      setElementoAtual(index)
    }
  }

  function renderizaBotaoSePossuirLinkExterno(elemento: ElementoCarrosselTipo) {
    let botao

    if (elemento.linkExterno) {
      botao = (
        <S.BotaoImagemCarrossel
          aoClicar={() =>
            elemento.linkExterno &&
            abreUrlExternaEmNovaAba(elemento.linkExterno)
          }
          tema={temaBotao}
          estilo={EstilosBotao.SOLID}
          tamanho="M"
          ariaLabel={`Acessar ${
            elemento.tipo &&
            conteudoTexto.textoAtuacao.escritora.textoBotaoCarrossel[
              elemento.tipo
            ]
          }`}>
          {elemento.tipo &&
            conteudoTexto.textoAtuacao.escritora.textoBotaoCarrossel[
              elemento.tipo
            ]}
        </S.BotaoImagemCarrossel>
      )
    } else {
      botao = []
    }

    return botao
  }

  return (
    <S.ContainerCarrossel direcao={direcao}>
      <S.ImagensCarrossel
        autoPlay
        infiniteLoop
        ariaLabel="Carrossel"
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        selectedItem={elementoAtual}
        onChange={atualizaElementoAtual}
        axis={direcao}>
        {elementos.map((elemento, index) => (
          <Stack key={index} direcao={Direcoes.V} gap="1rem" alinhar="center">
            <S.ImagemCarrossel
              src={elemento.imagem}
              alt={elemento.descricao}
              width={400}
              height={400}
              corBorda={corLegenda}
            />

            <S.DescricaoImagemCarrossel
              tamanho={TamanhosTexto.P}
              className="legend"
              corLegenda={corLegenda}
              margemInferior={
                elemento.linkExterno ? '2.5rem' : '-2rem'
              }>
              {elemento.descricao}
            </S.DescricaoImagemCarrossel>
            {renderizaBotaoSePossuirLinkExterno(elemento)}
          </Stack>
        ))}
      </S.ImagensCarrossel>
      <ControleElementos
        direcao={direcao}
        elementoDestaque={elementoAtual}
        tamanhoArray={quantidadeDeElementos}
        aoClicarEmAnterior={retrocedeElementoAtual}
        aoClicarEmProximo={avancaElementoAtual}
        cor={corControles}
      />
    </S.ContainerCarrossel>
  )
}
