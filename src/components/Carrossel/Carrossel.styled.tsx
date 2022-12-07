import {Botao} from '@components/Botao'
import {ImagemComFallback} from '@components/ImagemComFallback'
import {Stack} from '@components/Stack'
import {Texto} from '@components/Texto'
import {Direcoes, TamanhosTexto} from '@data/enums'
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
  flex-direction: ${(props) =>
    props.direcao === Direcoes.H ? 'row' : 'column'};
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
    width: 300px;
  }

  @media ${dispositivos.laptop} {
    width: 400px;
  }

  @media ${dispositivos.laptopL} {
    width: 500px;
  }
`

export const ImagemCarrossel = styled(ImagemComFallback)`
  width: 250px;
  height: auto;

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

  &:hover {
    opacity: 1 !important;
  }
`

export const BotaoImagemCarrossel = styled(Botao)``

export const ControleCarrossel = styled(Stack).attrs({
  direcao: Direcoes.H,
  gap: '1rem',
})``

export const IndexCarrossel = styled(Texto).attrs({
  tamanho: TamanhosTexto.P,
})``

export const SetaCarrossel = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  font-size: 25px;
`
