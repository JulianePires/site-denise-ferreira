import {ReactNode} from 'react'
import * as S from './Titulo.styled'

interface Props {
  children: ReactNode
}

export function Titulo({children}: Props) {
  return <S.ContainerTitulo>{children}</S.ContainerTitulo>
}
