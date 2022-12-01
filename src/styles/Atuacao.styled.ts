import {Texto} from '@components/Texto'
import {TamanhosTexto} from '@data/enums'
import {ContainerTipo} from '@data/tipos'
import dispositivos from '@resources/dispositivos'
import {subtitulo} from '@resources/textos'
import Image from 'next/image'
import styled from 'styled-components'

export const ContainerJurista = styled.span<ContainerTipo>``

export const TituloJurista = styled(Texto).attrs({
  tamanho: TamanhosTexto.GG,
  fonteAlternativa: subtitulo.fontFamily,
})``

export const ImagemJurista = styled(Image)`
  align-self: center;

  width: 300px;
  height: auto;
  border-radius: 10px;

  @media ${dispositivos.tablet} {
    width: 380px;
  }
`

export const CabecalhoEscritora = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 120px;
`

export const TituloEscritora = styled(Texto).attrs({
  tamanho: TamanhosTexto.GG,
  fonteAlternativa: subtitulo.fontFamily,
})``
