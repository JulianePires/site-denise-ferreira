import Image, {ImageProps} from 'next/image'
import {useEffect, useState} from 'react'

import FallbackImagem from '@assets/imagens/FallbackImagem.png'
import {isEmpty} from 'ramda'

interface Props extends ImageProps {
  fallback?: string
}

export function ImagemComFallback({src, alt, fallback, ...rest}: Props) {
  const [origemImagem, setOrigemImagem] = useState(src)
  const [useFallback, setUseFallback] = useState(false)

  if (origemImagem !== src) {
    setUseFallback(false)
    setOrigemImagem(src)
  }

  function trataImagemSeHouverFallback() {
    if (useFallback) {
      if (fallback) {
        return fallback
      } else {
        return FallbackImagem.src
      }
    } else {
      return src
    }
  }

  return (
    <Image
      src={trataImagemSeHouverFallback()}
      alt={useFallback ? 'Imagem não encontrada' : alt}
      {...rest}
      onError={() => {
        setUseFallback(true)
      }}
    />
  )
}
