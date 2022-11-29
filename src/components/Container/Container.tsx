import {ContainerTipo} from '@data/tipos'
import {ReactNode} from 'react'
import * as S from './Container.styled'

interface Props extends ContainerTipo {
  children?: ReactNode
}

export function Container({children, ...rest}: Props) {
  return <S.Container {...rest}>{children}</S.Container>
}
