import {ReactNode} from 'react'
import * as S from './ContainerConteudo.styled'

interface Props {
  children: ReactNode
  corBackground: string
  altura?: number
}

export function ContainerConteudo({children, corBackground, altura}: Props) {
  return (
    <S.ContainerExternoConteudo corBackground={corBackground} altura={altura}>
      {children}
    </S.ContainerExternoConteudo>
  )
}
