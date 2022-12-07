import {Direcoes} from '@data/enums'
import {DirecoesTipo} from '@data/tipos'
import {ReactNode} from 'react'
import * as S from './ContainerConteudo.styled'

interface Props {
  children: ReactNode
  corBackground: string
  altura?: number
  direcao?: DirecoesTipo
  reverso?: boolean
}

export function ContainerConteudo({
  children,
  corBackground,
  altura,
  direcao = Direcoes.H,
  reverso = false,
}: Props) {
  return (
    <S.ContainerExternoConteudo
      direcao={direcao}
      corBackground={corBackground}
      altura={altura}
      reverso={String(reverso)}>
      {children}
    </S.ContainerExternoConteudo>
  )
}
