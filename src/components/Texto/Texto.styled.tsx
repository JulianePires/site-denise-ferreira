import {
  detalhe,
  paragrafo,
  subtitulo,
  titulo1,
  titulo2,
} from '@resources/textos'
import styled from 'styled-components'

export const TextoPP = styled.p`
  ${detalhe}
`

export const TextoP = styled.p`
  ${paragrafo}
`

export const TextoM = styled.p`
  ${paragrafo}
`

export const TextoG = styled.h3`
  ${subtitulo}
`

export const TextoGG = styled.h2`
  ${titulo1}
`

export const TextoXG = styled.h1`
  ${titulo2}
`
