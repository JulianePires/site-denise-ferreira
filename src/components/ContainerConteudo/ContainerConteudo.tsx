import {Direcoes} from '@data/enums'
import {DirecoesTipo} from '@data/tipos'
import {ReactNode} from 'react'
import * as S from './ContainerConteudo.styled'

interface Props {
  children: ReactNode
  corBackground: string
  altura?: number
  direcao?: DirecoesTipo
}

export function ContainerConteudo({
  children,
  corBackground,
  altura,
  direcao = Direcoes.H,
}: Props) {
  return (
    <S.ContainerExternoConteudo
      direcao={direcao}
      corBackground={corBackground}
      altura={altura}>
      {children}
    </S.ContainerExternoConteudo>
  )
}
