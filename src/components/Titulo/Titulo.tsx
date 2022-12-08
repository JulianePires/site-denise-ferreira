import {ReactNode} from 'react'
import * as S from './Titulo.styled'

interface Props {
  children: ReactNode
  corTexto?: string
}

export function Titulo({children, corTexto}: Props) {
  return <S.ContainerTitulo corTexto={corTexto}>{children}</S.ContainerTitulo>
}
