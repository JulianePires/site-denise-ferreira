import {TamanhosTexto} from '@data/enums'
import {TamanhosTextoTipo} from '@data/tipos'
import {ReactNode} from 'react'
import * as S from './Texto.styled'

interface Props {
  children: ReactNode
  tamanho: TamanhosTexto
  fonteAlternativa?: string
  className?: string
  'data-aos'?: string
  'data-aos-anchor'?: string
  'data-aos-delay'?: string
}

export function Texto({
  children,
  tamanho,
  fonteAlternativa,
  className,
  ...rest
}: Props) {
  const tamanhoTexto = TamanhosTexto[tamanho] as TamanhosTextoTipo
  const ComponenteTexto = componenteTextoTamanho[tamanhoTexto]

  return (
    <ComponenteTexto
      fonteAlternativa={fonteAlternativa}
      className={className}
      {...rest}>
      {children}
    </ComponenteTexto>
  )
}

const componenteTextoTamanho = {
  PP: S.TextoPP,
  P: S.TextoP,
  M: S.TextoM,
  G: S.TextoG,
  GG: S.TextoGG,
  XG: S.TextoXG,
}
