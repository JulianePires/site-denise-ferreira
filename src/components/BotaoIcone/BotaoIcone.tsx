import { TemasCores } from '@data/tipos'
import { ContainerBotaoIcone } from './BotaoIcone.styled'
import { IconType } from 'react-icons'

interface Props {
  corBackground: TemasCores
  corIcone: TemasCores
  icone: IconType
}

export function BotaoIcone({ corBackground, corIcone, icone }: Props) {
  const ComponenteIcone = icone
  return (
    <ContainerBotaoIcone corIcone={corIcone} corBackground={corBackground}>
      <ComponenteIcone />
    </ContainerBotaoIcone>
  )
}
