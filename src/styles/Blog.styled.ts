import {Texto} from '@components/Texto'
import {TamanhosTexto} from '@data/enums'
import {subtitulo} from '@resources/textos'
import styled from 'styled-components'

export const TituloBlog = styled(Texto).attrs({
  tamanho: TamanhosTexto.XG,
  fonteAlternativa: subtitulo.fontFamily,
})``
