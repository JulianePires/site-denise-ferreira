import {ContainerConteudo} from '@components/ContainerConteudo'
import {ImagemComFallback} from '@components/ImagemComFallback'
import {Stack} from '@components/Stack'
import {Texto} from '@components/Texto'
import {Direcoes, TamanhosTexto} from '@data/enums'
import dispositivos from '@resources/dispositivos'
import {detalhe, subtitulo} from '@resources/textos'
import styled from 'styled-components'

export const ContainerDestaqueBlog = styled(ContainerConteudo)``

export const TituloDestaqueBlog = styled(Texto).attrs({
  tamanho: TamanhosTexto.XG,
  fonteAlternativa: subtitulo.fontFamily,
})``

export const ConteudoDestaqueBlog = styled.p`
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

export const ContainerImagemDestaqueBlog = styled(ImagemComFallback)``

export const InformacoesDestaqueBlog = styled(Texto).attrs({
  tamanho: TamanhosTexto.PP,
})``

export const AgrupamentoDestaqueBlog = styled(Stack).attrs({
  direcao: Direcoes.H,
  gap: '1rem',
  alinhar: 'center',
})`
  width: fit-content;
`

export const IndexDestaqueBlog = styled(Texto).attrs({
  tamanho: TamanhosTexto.P,
})``

export const SetaDestaqueBlog = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  font-size: 25px;
`
