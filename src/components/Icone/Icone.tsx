import {IconType} from 'react-icons'
import * as S from './Icone.styled'

interface Props extends S.ContainerIconeProps {
  icone: IconType
}

export function Icone({icone, ...rest}: Props) {
  const ComponenteIcone = icone
  return (
    <S.ContainerIcone {...rest}>
      <ComponenteIcone />
    </S.ContainerIcone>
  )
}
