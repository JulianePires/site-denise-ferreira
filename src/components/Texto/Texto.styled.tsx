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
  corTexto?: string
}

export const TextoPP = styled.p<TextoProps>`
  ${detalhe}
  color: ${({corTexto}) => corTexto};

  ${(props) =>
    props.fonteAlternativa && `font-family: ${props.fonteAlternativa};`}
`

export const TextoP = styled.p<TextoProps>`
  ${paragrafo}
  color: ${({corTexto}) => corTexto};

  ${(props) =>
    props.fonteAlternativa && `font-family: ${props.fonteAlternativa};`}
`

export const TextoM = styled.p<TextoProps>`
  ${paragrafo}
  color: ${({corTexto}) => corTexto};

  ${(props) =>
    props.fonteAlternativa && `font-family: ${props.fonteAlternativa};`}
`

export const TextoG = styled.h3<TextoProps>`
  ${subtitulo}
  color: ${({corTexto}) => corTexto};

  ${(props) =>
    props.fonteAlternativa && `font-family: ${props.fonteAlternativa};`}
`

export const TextoGG = styled.h2<TextoProps>`
  ${titulo1}
  color: ${({corTexto}) => corTexto};

  ${(props) =>
    props.fonteAlternativa && `font-family: ${props.fonteAlternativa};`}
`

export const TextoXG = styled.h1<TextoProps>`
  ${titulo2}
  color: ${({corTexto}) => corTexto};

  ${(props) =>
    props.fonteAlternativa && `font-family: ${props.fonteAlternativa};`}
`
