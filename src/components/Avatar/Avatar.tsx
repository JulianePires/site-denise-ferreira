import {TamanhosComponente} from '@data/enums'
import * as S from './Avatar.styled'

import FallbackAvatar from '@assets/imagens/FallbackAvatar.png'

interface Props {
  src: string
  alt: string
  tamanho: TamanhosComponente
}

export function Avatar({src, alt, tamanho}: Props) {
  return (
    <S.ContainerAvatar
      src={src}
      alt={alt}
      fallback={FallbackAvatar.src}
      width={tamanho}
      height={tamanho}
      fill
    />
  )
}
