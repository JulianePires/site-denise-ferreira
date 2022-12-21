import {Container} from '@components/Container'
import {ImagemComFallback} from '@components/ImagemComFallback'
import dispositivos from '@resources/dispositivos'
import margens from '@resources/margens'
import {detalhe, subtitulo} from '@resources/textos'
import styled from 'styled-components'

export const LogoBanner = styled(ImagemComFallback)`
  width: 300px;
  height: auto;

  @media ${dispositivos.laptop} {
    width: 350px;
  }

  @media ${dispositivos.laptopL} {
    width: 420px;
  }
`

export const TextoDescricaoBanner = styled.p`
  ${detalhe}

  text-align: justify;
  text-justify: newspaper;

  font-size: 1.5rem;
  width: 100%;
  line-height: ${subtitulo.lineHeight};

  @media ${dispositivos.mobileL} {
    width: 80%;
  }

  @media ${dispositivos.laptop} {
    width: 400px;
  }

  @media ${dispositivos.laptopL} {
    width: 600px;
  }
`

export const ContainerFotoBanner = styled(Container).attrs({
  largura: '100%',
  altura: '600px',
  padding: `0px ${margens.large}px`,
  justificar: 'center',
})`
  padding-bottom: 0;
`

export const FotoBanner = styled(ImagemComFallback)`
  width: 300px;
  height: auto;

  align-self: center;

  border-radius: 16px;

  @media ${dispositivos.tablet} {
    width: 250px;
  }

  @media ${dispositivos.laptop} {
    width: 300px;
  }

  @media ${dispositivos.laptopL} {
    width: 350px;
  }

  @media ${dispositivos.desktop} {
    width: 400px;
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
