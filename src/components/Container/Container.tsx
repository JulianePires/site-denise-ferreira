import {ContainerTipo} from '@data/tipos'
import {ReactNode} from 'react'
import * as S from './Container.styled'

interface Props extends ContainerTipo {
  children?: ReactNode
}

export function Container({children, className, ...rest}: Props) {
  return <S.Container className={className} {...rest}>{children}</S.Container>
}
