import {Container} from '@components/Container'
import {ImagemComFallback} from '@components/ImagemComFallback'
import dispositivos from '@resources/dispositivos'
import margens from '@resources/margens'
import {detalhe, subtitulo} from '@resources/textos'
import styled from 'styled-components'

export const LogoBanner = styled(ImagemComFallback)`
  width: 200px;
  height: auto;

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
    width: 600px;
  }
`

export const ContainerFotoBanner = styled(Container).attrs({
  largura: '100%',
  altura: '600px',
  padding: `0px ${margens.large}px`,
  justificar: 'flex-end',
})`
  padding-bottom: 0;
`

export const FotoBanner = styled(ImagemComFallback)`
  width: 300px;
  height: auto;

  align-self: center;

  margin-top: auto;

  border-radius: 16px;

  @media ${dispositivos.tablet} {
    width: 350px;
  }

  @media ${dispositivos.laptop} {
    width: 400px;
  }

  @media ${dispositivos.laptopL} {
    width: 500px;
  }

  @media ${dispositivos.desktop} {
    width: 600px;
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
