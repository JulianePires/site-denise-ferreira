import {Stack} from '@components/Stack'
import {Direcoes, EstilosBotao} from '@data/enums'
import {DirecoesTipo, ElementoCarrosselTipo} from '@data/tipos'
import conteudoTexto from '@resources/conteudoTexto'
import {useState} from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import * as S from './Carrossel.styled'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

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

  return (
    <S.ContainerCarrossel
      direcao={direcao === Direcoes.V ? Direcoes.H : Direcoes.V}>
      <S.ImagensCarrossel
        selectedItem={elementoAtual}
        autoPlay
        onChange={atualizaElementoAtual}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        useKeyboardArrows
        animationHandler="fade"
        infiniteLoop>
        {elementos.map((elemento, index) => (
          <Stack key={index} direcao={Direcoes.V} gap="1rem" alinhar="center">
            <S.ImagemCarrossel
              src={elemento.imagem}
              alt={elemento.descricao}
              width={400}
              height={400}
            />
            <S.DescricaoImagemCarrossel className="legend">
              {elemento.descricao}
            </S.DescricaoImagemCarrossel>
            <S.BotaoImagemCarrossel
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              aoClicar={() => {}}
              tema="amarelo"
              estilo={EstilosBotao.GHOST}
              tamanho="P">
              {
                conteudoTexto.textoAtuacao.escritora.textoBotaoCarrossel[
                  elemento.tipo
                ]
              }
            </S.BotaoImagemCarrossel>
          </Stack>
        ))}
      </S.ImagensCarrossel>
      <Stack direcao={Direcoes.H} gap="1rem" alinhar="center">
        <S.IndexCarrossel>{`0${
          elementoAtual + 1
        }|0${quantidadeDeElementos}`}</S.IndexCarrossel>
        <S.SetaCarrossel onClick={retrocedeElementoAtual}>
          <BsArrowLeftCircleFill />
        </S.SetaCarrossel>
        <S.SetaCarrossel onClick={avancaElementoAtual}>
          <BsArrowRightCircleFill />
        </S.SetaCarrossel>
      </Stack>
    </S.ContainerCarrossel>
  )
}
