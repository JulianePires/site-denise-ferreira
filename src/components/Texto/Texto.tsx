import {TamanhosTexto} from '@data/tipos'
import {ReactNode} from 'react'
import {TextoG, TextoGG, TextoM, TextoP, TextoPP, TextoXG} from './Texto.styled'

interface Props {
  children: ReactNode
  tamanho: TamanhosTexto
}

export function Texto({children, tamanho}: Props) {
  const ComponenteTexto = componenteTextoTamanho[tamanho]
  
  return <ComponenteTexto>{children}</ComponenteTexto>
}

const componenteTextoTamanho = {
  PP: TextoPP,
  P: TextoP,
  M: TextoM,
  G: TextoG,
  GG: TextoGG,
  XG: TextoXG,
}
