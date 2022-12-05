import {TamanhosComponente} from '@data/enums'
import {TemasCores} from '@data/tipos'
import {ReactNode} from 'react'
import * as S from './Botao.styled'

interface Props {
  children: ReactNode
  tamanho: keyof typeof TamanhosComponente
  estilo: 'unstyled' | 'ghost' | 'outline' | 'solid'
  tema: TemasCores
  tipo?: 'button' | 'submit' | 'reset'
  aoClicar: () => void
}

export function Botao({
  children,
  tamanho,
  estilo,
  tema,
  tipo = 'button',
  aoClicar,
}: Props) {
  return (
    <S.ContainerBotao
      tema={tema}
      tamanho={tamanho}
      estilo={estilo}
      onClick={aoClicar}
      type={tipo}>
      {children}
    </S.ContainerBotao>
  )
}
