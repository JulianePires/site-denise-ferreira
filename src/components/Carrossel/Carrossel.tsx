import {Stack} from '@components/Stack'
import {Direcoes, EstilosBotao} from '@data/enums'
import {DirecoesTipo, ElementoCarrosselTipo} from '@data/tipos'
import conteudoTexto from '@resources/conteudoTexto'
import {useState} from 'react'
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
  BsArrowUpCircleFill,
  BsArrowDownCircleFill,
} from 'react-icons/bs'
import * as S from './Carrossel.styled'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {isEmpty} from 'ramda'
import {Loader} from '@components/Loader'
import {abreUrlExternaEmNovaAba} from '@services/funcoes'

interface Props {
  direcao: DirecoesTipo
  elementos: ElementoCarrosselTipo[]
}

export function Carrossel({direcao, elementos}: Props) {
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
          tema="amarelo"
          estilo={EstilosBotao.GHOST}
          tamanho="P">
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

  const statusControleCarrossel = `0${
    elementoAtual + 1
  } | 0${quantidadeDeElementos}`

  return (
    <S.ContainerCarrossel
      direcao={direcao === Direcoes.V ? Direcoes.H : Direcoes.V}>
      <S.ImagensCarrossel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        selectedItem={elementoAtual}
        onChange={atualizaElementoAtual}
        axis={direcao}>
        {elementos.map((elemento, index) => (
          <Stack key={index} direcao={Direcoes.V} gap="1rem" alinhar="center">
            <>
              {isEmpty(elemento.imagem) ? (
                <Loader />
              ) : (
                <S.ImagemCarrossel
                  src={elemento.imagem}
                  alt={elemento.descricao}
                  width={400}
                  height={400}
                />
              )}
              <S.DescricaoImagemCarrossel className="legend">
                {elemento.descricao}
              </S.DescricaoImagemCarrossel>
              {renderizaBotaoSePossuirLinkExterno(elemento)}
            </>
          </Stack>
        ))}
      </S.ImagensCarrossel>
      <Stack direcao={direcao} gap="1rem" alinhar="center">
        <S.IndexCarrossel>{statusControleCarrossel}</S.IndexCarrossel>
        <S.SetaCarrossel onClick={retrocedeElementoAtual}>
          {direcao === 'horizontal' ? (
            <BsArrowLeftCircleFill />
          ) : (
            <BsArrowUpCircleFill />
          )}
        </S.SetaCarrossel>
        <S.SetaCarrossel onClick={avancaElementoAtual}>
          {direcao === 'horizontal' ? (
            <BsArrowRightCircleFill />
          ) : (
            <BsArrowDownCircleFill />
          )}
        </S.SetaCarrossel>
      </Stack>
    </S.ContainerCarrossel>
  )
}
