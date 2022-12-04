import {Stack} from '@components/Stack'
import {Direcoes, EstilosBotao} from '@data/enums'
import {DirecoesTipo, ElementoCarrosselTipo} from '@data/tipos'
import conteudoTexto from '@resources/conteudoTexto'
import {useState} from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
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
        infiniteLoop
        axis={direcao}>
        {elementos.map((elemento, index) => (
          <Stack key={index} direcao={Direcoes.V} gap="1rem" alinhar="center">
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
            {elemento.linkExterno && elemento.tipo && (
              <S.BotaoImagemCarrossel
                aoClicar={() =>
                  elemento.linkExterno &&
                  abreUrlExternaEmNovaAba(elemento.linkExterno)
                }
                tema="amarelo"
                estilo={EstilosBotao.GHOST}
                tamanho="P">
                {
                  conteudoTexto?.textoAtuacao.escritora.textoBotaoCarrossel[
                    elemento.tipo
                  ]
                }
              </S.BotaoImagemCarrossel>
            )}
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
