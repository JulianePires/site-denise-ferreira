import {ImagemComFallback} from '@components/ImagemComFallback'
import useAssets from '@hooks/useAssets'
import * as S from './Logo.styled'

interface Props {
  cor?: 'branco' | 'terra' | 'amarela'
}

export function Logo({cor = 'branco'}: Props) {
  const {sankofaLongaTerra, sankofaLongaBranca, sankofaLongaAmarela} =
    useAssets()

  const imagemPorCor = {
    branco: {
      src:
        'https://media.graphassets.com/MY9iUk6QQicoPXvNgzuJ' ||
        (sankofaLongaBranca?.url as string),
      alt: 'Logo Sankofa Branca',
    },
    amarela: {
      src: sankofaLongaAmarela?.url as string,
      alt: 'Logo Sankofa Amarela',
    },
    terra: {
      src: sankofaLongaTerra?.url as string,
      alt: 'Logo Sankofa Terra',
    },
  }

  return (
    <S.ContainerLogo>
      <ImagemComFallback
        src={imagemPorCor[cor].src}
        alt={imagemPorCor[cor].alt}
        width={94}
        height={70}
      />
    </S.ContainerLogo>
  )
}
