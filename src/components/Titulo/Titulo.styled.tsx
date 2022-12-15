import {Texto} from '@components/Texto'
import {TamanhosTexto} from '@data/enums'
import dispositivos from '@resources/dispositivos'
import {subtitulo, titulo1, titulo2} from '@resources/textos'
import styled from 'styled-components'

export const ContainerTitulo = styled(Texto).attrs({
  tamanho: TamanhosTexto.XG,
  fonteAlternativa: subtitulo.fontFamily,
})`
  font-size: ${titulo1.fontSize};
  text-align: justify;
  line-height: 3.5rem;

  @media ${dispositivos.mobileL} {
    font-size: ${titulo2.fontSize};
  }
`
