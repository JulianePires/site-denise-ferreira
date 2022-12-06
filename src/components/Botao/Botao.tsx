import {TamanhosComponente} from '@data/enums'
import {TemasCores} from '@data/tipos'
import {ReactNode} from 'react'
import * as S from './Botao.styled'

interface Props {
  children: ReactNode
  tamanho: keyof typeof TamanhosComponente
  estilo?: 'unstyled' | 'ghost' | 'outline' | 'solid'
  tema?: TemasCores
  tipo?: 'button' | 'submit' | 'reset'
  corFonteAlternativa?: string
  corFundoAlternativa?: string
  desabilitaTema?: boolean
  aoClicar: () => void
}

export function Botao({
  children,
  tamanho,
  estilo = 'solid',
  tema = 'vinho',
  tipo = 'button',
  corFonteAlternativa,
  corFundoAlternativa,
  desabilitaTema = false,
  aoClicar,
}: Props) {
  return (
    <S.ContainerBotao
      tema={tema}
      tamanho={tamanho}
      estilo={estilo}
      onClick={aoClicar}
      type={tipo}
      desabilitaTema={String(desabilitaTema)}
      corFundo={corFundoAlternativa}
      corFonte={corFonteAlternativa}>
      {children}
    </S.ContainerBotao>
  )
}
