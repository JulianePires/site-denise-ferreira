import {ReactNode} from 'react'
import * as S from './Titulo.styled'

interface Props {
  children: ReactNode
  corTexto?: string
  'data-aos'?: string
  'data-aos-anchor'?: string
}

export function Titulo({children, corTexto, ...rest}: Props) {
  return <S.ContainerTitulo {...rest} corTexto={corTexto}>{children}</S.ContainerTitulo>
}
