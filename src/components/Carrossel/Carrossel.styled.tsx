import {Botao} from '@components/Botao'
import {ImagemComFallback} from '@components/ImagemComFallback'
import {Texto} from '@components/Texto'
import {DirecoesTipo, TemasCores} from '@data/tipos'
import cores from '@resources/cores'
import dispositivos from '@resources/dispositivos'
import {paragrafo} from '@resources/textos'
import {Carousel} from 'react-responsive-carousel'
import styled from 'styled-components'

interface ContainerCarrosselProps {
  direcao: DirecoesTipo
}

export const ContainerCarrossel = styled.div<ContainerCarrosselProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 600px;
`

export const ImagensCarrossel = styled(Carousel)`
  display: flex;
  align-items: center;
  width: 300px;
  height: fit-content;

  @media ${dispositivos.tablet} {
    width: 350px;
  }

  @media ${dispositivos.laptop} {
    width: 400px;
  }

  @media ${dispositivos.laptopL} {
    width: 500px;
  }
`

interface ImagemCarrosselProps {
  corBorda?: string
}

export const ImagemCarrossel = styled(ImagemComFallback)<ImagemCarrosselProps>`
  width: 250px;
  height: auto;

  border: 12px solid ${({corBorda}) => corBorda};
  border-radius: 1rem;

  @media ${dispositivos.tablet} {
    width: 400px;
  }
`

interface DescricaoImagemCarrosselProps {
  corLegenda?: TemasCores
}

export const DescricaoImagemCarrossel = styled(
  Texto,
)<DescricaoImagemCarrosselProps>`
  background: ${({corLegenda}) =>
    corLegenda ? cores[corLegenda] : cores.vinho} !important;
  font-size: ${paragrafo.fontSize} !important;
  cursor: pointer;
  opacity: 0.8 !important;
  margin-bottom: 2.5rem;

  &:hover {
    opacity: 1 !important;
  }
`

export const BotaoImagemCarrossel = styled(Botao)``
