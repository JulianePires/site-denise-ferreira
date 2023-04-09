import {TemasCores} from '@/data/tipos'
import * as S from './BotaoIcone.styled'
import {IconType} from 'react-icons'
import {MouseEventHandler} from 'react'

interface Props {
  corBackground: TemasCores
  corIcone: TemasCores
  icone: IconType
  ariaLabel: string
  aoClicar: MouseEventHandler<HTMLButtonElement>
}

export function BotaoIcone({
  corBackground,
  corIcone,
  icone,
  ariaLabel,
  aoClicar,
}: Props) {
  const ComponenteIcone = icone
  return (
    <S.ContainerBotaoIcone
      onClick={aoClicar}
      aria-label={ariaLabel}
      corIcone={corIcone}
      corBackground={corBackground}>
      <ComponenteIcone />
    </S.ContainerBotaoIcone>
  )
}
