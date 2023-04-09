import {Texto} from '@/components/Texto'
import {TamanhosTexto} from '@/data/enums'
import dispositivos from '@/resources/dispositivos'
import {subtitulo, titulo1, titulo2} from '@/resources/textos'
import styled from 'styled-components'

export const ContainerTitulo = styled(Texto).attrs({
  tamanho: TamanhosTexto.XG,
  fonteAlternativa: subtitulo.fontFamily,
})`
  font-size: ${subtitulo.fontSize};
  text-align: left;
  line-height: 3rem;

  @media ${dispositivos.mobileM} {
    font-size: ${titulo1.fontSize};
  }

  @media ${dispositivos.tablet} {
    font-size: ${titulo2.fontSize};
  }
`
