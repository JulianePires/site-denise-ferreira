import {TemasCores} from '@data/tipos'
import * as S from './BotaoIcone.styled'
import {IconType} from 'react-icons'

interface Props {
  corBackground: TemasCores
  corIcone: TemasCores
  icone: IconType
  ariaLabel: string
}

export function BotaoIcone({corBackground, corIcone, icone, ariaLabel}: Props) {
  const ComponenteIcone = icone
  return (
    <S.ContainerBotaoIcone
      aria-label={ariaLabel}
      corIcone={corIcone}
      corBackground={corBackground}>
      <ComponenteIcone />
    </S.ContainerBotaoIcone>
  )
}
