import {Botao} from '@components/Botao'
import {Stack} from '@components/Stack'
import {Texto} from '@components/Texto'
import {Direcoes, TamanhosTexto} from '@data/enums'
import {DirecoesTipo} from '@data/tipos'
import Image from 'next/image'
import styled from 'styled-components'

interface ContainerCarrosselProps {
  direcao: DirecoesTipo
}

export const ContainerCarrossel = styled.div<ContainerCarrosselProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.direcao === Direcoes.H ? 'row' : 'column'};
  gap: 1rem;

  width: 100%;

  overflow-x: hidden;
`

interface ImagensCarrosselProps {
  direcao: DirecoesTipo
}

export const ImagensCarrossel = styled.div<ImagensCarrosselProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.direcao === Direcoes.H ? 'row' : 'column'};
  gap: 4%;

  transform: translate(-25%, 0);
`

export const ImagemCarrossel = styled(Image)``

export const DescricaoImagemCarrossel = styled(Texto).attrs({
  tamanho: TamanhosTexto.P,
})``

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
