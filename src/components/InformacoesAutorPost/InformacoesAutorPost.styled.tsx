import cores from '@resources/cores'
import {detalhe, paragrafo} from '@resources/textos'
import styled from 'styled-components'

export const NomeAutorPost = styled.p`
  ${paragrafo}

  color: ${cores.amarelo};
`

export const DataCriacaoPost = styled.p`
  ${detalhe}
`
