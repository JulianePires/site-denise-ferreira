import {ReactNode} from 'react'
import {ContainerExternoConteudo} from './ContainerConteudo.styled'

interface Props {
  children: ReactNode
  corBackground: string
}

export function ContainerConteudo({children, corBackground}: Props) {
  return (
    <ContainerExternoConteudo corBackground={corBackground}>
      {children}
    </ContainerExternoConteudo>
  )
}
