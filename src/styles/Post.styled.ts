import {Container} from '@components/Container'
import {Stack} from '@components/Stack'
import {Texto} from '@components/Texto'
import {Titulo} from '@components/Titulo'
import {Direcoes, TamanhosTexto} from '@data/enums'
import cores from '@resources/cores'
import dispositivos from '@resources/dispositivos'
import margens from '@resources/margens'
import {paragrafo, subtitulo, titulo1} from '@resources/textos'
import Image from 'next/image'
import styled from 'styled-components'

export const ContainerInformacoesPost = styled(Container).attrs({
  largura: '100%',
  altura: '700px',
  justificar: 'flex-start',
  alinhar: 'center',
})`
  position: relative;
`

export const TituloPost = styled(Titulo)`
  font-size: xx-large;

  @media ${dispositivos.mobileL} {
    font-size: 2rem;
  }

  @media ${dispositivos.laptop} {
    font-size: ${titulo1.fontSize};
  }
`

export const SubtituloPost = styled(Texto).attrs({
  tamanho: TamanhosTexto.G,
})`
  font-family: ${paragrafo.fontFamily};
`

export const ImagemPost = styled(Image)`
  position: absolute;
  top: 75%;

  border: 12px solid ${cores.vinho};

  width: 280px;
  height: auto;

  @media ${dispositivos.mobileL} {
    width: 320px;
  }

  @media ${dispositivos.tablet} {
    width: 450px;
    top: 55%;
  }

  @media ${dispositivos.laptop} {
    width: 500px;
  }

  @media ${dispositivos.laptopL} {
    width: 600px;
  }
`

export const ContainerConteudoPost = styled(Container).attrs({
  largura: '100%',
  altura: 'fit-content',
  justificar: 'flex-start',
  alinhar: 'center',
})`
  padding: ${margens.xlarge}px;
  padding-top: 12rem;

  @media ${dispositivos.mobileL} {
    padding-top: 15rem;
  }

  @media ${dispositivos.tablet} {
    padding: ${margens.xxxlarge}px;
    padding-top: 14rem;
  }

  @media ${dispositivos.laptop} {
    padding-top: 16rem;
  }

  @media ${dispositivos.laptopL} {
    padding-top: 23rem;
  }
`

export const ConteudoPost = styled.p`
  ${paragrafo}
  text-align: justify;

  @media ${dispositivos.tablet} {
    font-size: ${subtitulo.fontSize};
  }

  @media ${dispositivos.laptopL} {
    width: 80%;
  }
`
