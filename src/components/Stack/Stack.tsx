import {DirecoesTipo} from '@data/tipos'
import {ReactNode} from 'react'
import * as S from './Stack.styled'

interface Props {
  direcao: DirecoesTipo
  gap: string
  margem?: string
  children: ReactNode
  wrap?: boolean
}

export function Stack({direcao, gap, margem, children, wrap = false}: Props) {
  return (
    <S.ContainerStack
      direcao={direcao}
      gap={gap}
      margem={margem}
      wrap={String(wrap)}>
      {children}
    </S.ContainerStack>
  )
}
