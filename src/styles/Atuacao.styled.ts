import {ContainerConteudo} from '@components/ContainerConteudo'
import {Texto} from '@components/Texto'
import {TamanhosTexto} from '@data/enums'
import cores from '@resources/cores'
import dispositivos from '@resources/dispositivos'
import {detalhe, paragrafo, subtitulo} from '@resources/textos'
import Image from 'next/image'
import styled from 'styled-components'

export const ContainerJurista = styled(ContainerConteudo).attrs({
  corBackground: cores.terra,
  altura: 600,
})`
  overflow-x: hidden;
`

export const TituloJurista = styled(Texto).attrs({
  tamanho: TamanhosTexto.XG,
  fonteAlternativa: subtitulo.fontFamily,
})``

export const TextoDescricaoJurista = styled.p`
  ${detalhe}

  font-size: 1.2rem;

  @media ${dispositivos.laptop} {
    font-size: 1.3rem;
    line-height: ${subtitulo.lineHeight};
    width: 90%;
  }

  @media ${dispositivos.laptopL} {
    font-size: 1.5rem;
    width: 100%;
  }
`

export const ImagemJurista = styled(Image)`
  align-self: center;

  width: 300px;
  height: auto;
  border-radius: 10px;

  @media ${dispositivos.laptop} {
    width: 300px;
  }

  @media ${dispositivos.laptop} {
    width: 400px;
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

export const TituloPalestrante = styled(Texto).attrs({
  tamanho: TamanhosTexto.XG,
  fonteAlternativa: subtitulo.fontFamily,
})``

export const ListaPalestrante = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 0;
  margin: 0 0 2rem 0;

  list-style: none;
`

export const ItemListaPalestrante = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;

  height: 2.5rem;
  margin: 0;
  padding: 0;
`

export const TextoItemListaPalestrante = styled(Texto).attrs({
  tamanho: TamanhosTexto.PP,
})`
  @media ${dispositivos.tablet} {
    ${paragrafo}
  }

  @media ${dispositivos.laptop} {
    ${subtitulo}
  }
`
