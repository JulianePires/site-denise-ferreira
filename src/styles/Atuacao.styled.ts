import {ContainerConteudo} from '@components/ContainerConteudo'
import {Texto} from '@components/Texto'
import {TamanhosTexto} from '@data/enums'
import cores from '@resources/cores'
import dispositivos from '@resources/dispositivos'
import {detalhe, subtitulo} from '@resources/textos'
import Image from 'next/image'
import styled from 'styled-components'

export const ContainerJurista = styled(ContainerConteudo).attrs({
  corBackground: cores.terra,
  altura: 700,
})``

export const TituloJurista = styled(Texto).attrs({
  tamanho: TamanhosTexto.XG,
  fonteAlternativa: subtitulo.fontFamily,
})``

export const TextoDescricaoJurista = styled.p`
  ${detalhe}

  font-size: 1rem;

  @media ${dispositivos.tablet} {
    width: 320px;
  }

  @media ${dispositivos.laptop} {
    font-size: 1.5rem;
    line-height: ${subtitulo.lineHeight};
    width: 100%;
  }
`

export const ImagemJurista = styled(Image)`
  align-self: center;

  width: 300px;
  height: auto;
  border-radius: 10px;

  @media ${dispositivos.tablet} {
    width: 500px;
  }
`

export const CabecalhoEscritora = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;

  width: 100%;
  height: 120px;
`

export const TituloEscritora = styled(Texto).attrs({
  tamanho: TamanhosTexto.GG,
  fonteAlternativa: subtitulo.fontFamily,
})``
