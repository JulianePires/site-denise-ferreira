import {Stack} from '@components/Stack'
import {Texto} from '@components/Texto'
import {Direcoes, TamanhosTexto} from '@data/enums'
import styled from 'styled-components'

export const ContainerControleElementos = styled(Stack).attrs({
  direcao: Direcoes.H,
  gap: '1rem',
  alinhar: 'center',
  justificar: 'center',
})``

export const StatusControleElemento = styled(Texto).attrs({
  tamanho: TamanhosTexto.P,
})``

export const BotaoControleElemento = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  font-size: 25px;
`
