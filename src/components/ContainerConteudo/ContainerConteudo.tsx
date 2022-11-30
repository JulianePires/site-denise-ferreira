import {ReactNode} from 'react'
import {ContainerExternoConteudo} from './ContainerConteudo.styled'

interface Props {
  children: ReactNode
  corBackground: string
  altura?: number
}

export function ContainerConteudo({children, corBackground, altura}: Props) {
  return (
    <ContainerExternoConteudo corBackground={corBackground} altura={altura}>
      {children}
    </ContainerExternoConteudo>
  )
}
