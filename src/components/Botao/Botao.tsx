import {TamanhosComponente} from '@data/enums'
import {TemasCores} from '@data/tipos'
import {ReactNode} from 'react'
import * as S from './Botao.styled'

interface Props {
  children: ReactNode
  tamanho: keyof typeof TamanhosComponente
  estilo: 'unstyled' | 'ghost' | 'outline' | 'solid'
  tema: TemasCores
  aoClicar: () => void
}

export function Botao({children, tamanho, estilo, tema, aoClicar}: Props) {
  return (
    <S.ContainerBotao
      tema={tema}
      tamanho={tamanho}
      estilo={estilo}
      onClick={aoClicar}>
      {children}
    </S.ContainerBotao>
  )
}
