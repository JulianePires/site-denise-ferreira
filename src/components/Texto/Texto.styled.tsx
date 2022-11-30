import {
  detalhe,
  paragrafo,
  subtitulo,
  titulo1,
  titulo2,
} from '@resources/textos'
import styled from 'styled-components'

interface TextoProps {
  fonteAlternativa?: string
}

export const TextoPP = styled.p<TextoProps>`
  ${detalhe}

  ${(props) =>
    props.fonteAlternativa && `font-family: ${props.fonteAlternativa};`}
`

export const TextoP = styled.p<TextoProps>`
  ${paragrafo}

  ${(props) =>
    props.fonteAlternativa && `font-family: ${props.fonteAlternativa};`}
`

export const TextoM = styled.p<TextoProps>`
  ${paragrafo}

  ${(props) =>
    props.fonteAlternativa && `font-family: ${props.fonteAlternativa};`}
`

export const TextoG = styled.h3<TextoProps>`
  ${subtitulo}

  ${(props) =>
    props.fonteAlternativa && `font-family: ${props.fonteAlternativa};`}
`

export const TextoGG = styled.h2<TextoProps>`
  ${titulo1}

  ${(props) =>
    props.fonteAlternativa && `font-family: ${props.fonteAlternativa};`}
`

export const TextoXG = styled.h1<TextoProps>`
  ${titulo2}

  ${(props) =>
    props.fonteAlternativa && `font-family: ${props.fonteAlternativa};`}
`
