import {TamanhosTexto} from '@data/enums'
import {TamanhosTextoTipo} from '@data/tipos'
import {ReactNode} from 'react'
import * as S from './Texto.styled'

interface Props {
  children: ReactNode
  tamanho: TamanhosTexto
}

export function Texto({children, tamanho}: Props) {
  const tamanhoTexto = TamanhosTexto[tamanho] as TamanhosTextoTipo
  const ComponenteTexto = componenteTextoTamanho[tamanhoTexto]

  return <ComponenteTexto>{children}</ComponenteTexto>
}

const componenteTextoTamanho = {
  PP: S.TextoPP,
  P: S.TextoP,
  M: S.TextoM,
  G: S.TextoG,
  GG: S.TextoGG,
  XG: S.TextoXG,
}