import {Texto} from '@components/Texto'
import {TamanhosTexto} from '@data/enums'
import styled from 'styled-components'

export const StatusControleElemento = styled(Texto).attrs({
  tamanho: TamanhosTexto.P,
})``

export const BotaoControleElemento = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  font-size: 25px;
`
