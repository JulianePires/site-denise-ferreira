import dispositivos from '@resources/dispositivos'
import margens from '@resources/margens'
import {detalhe, subtitulo} from '@resources/textos'
import Image from 'next/image'
import styled from 'styled-components'

interface ContainerBannerProps {
  largura: string
}

export const ContainerBanner = styled.span<ContainerBannerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: ${margens.xlarge}px;
  width: 100%;

  @media ${dispositivos.laptop} {
    padding: 0 0 0 ${margens.xxxlarge}px;
  }
`

export const LogoBanner = styled(Image)`
  width: 200px;
  height: max-content;

  @media ${dispositivos.tablet} {
    width: 300px;
  }

  @media ${dispositivos.laptop} {
    width: 350px;
  }

  @media ${dispositivos.laptopL} {
    width: 420px;
  }
`

export const TextoDescricaoBanner = styled.p`
  ${detalhe}

  font-size: 1rem;

  @media ${dispositivos.tablet} {
    width: 320px;
  }

  @media ${dispositivos.laptop} {
    font-size: 1.1rem;
    line-height: ${subtitulo.lineHeight};
    width: 470px;
  }

  @media ${dispositivos.laptopL} {
    font-size: 1.5rem;
    width: 650px;
  }
`

export const FotoBanner = styled(Image)`
  width: 200px;
  height: auto;

  align-self: center;

  border-radius: 16px;

  @media ${dispositivos.tablet} {
    width: 250px;
  }

  @media ${dispositivos.laptop} {
    width: 280px;
  }

  @media ${dispositivos.laptopL} {
    width: 350px;
  }

  @media (min-width: 1440px) {
    width: 420px;
  }
`

interface ContainerTexturaProps {
  urlTexturaFundo: string
}

export const TexturaSecaoApresentacao = styled.span<ContainerTexturaProps>`
  width: 100%;

  background: url(${(props) => props.urlTexturaFundo});
  background-size: cover;
`