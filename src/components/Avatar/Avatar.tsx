import {TamanhosComponente} from '@data/enums'
import {Asset} from '@data/tipos'
import imagens from '@resources/imagens'
import {buscaAsset} from '@services/requisicoes/asset'
import {useEffect, useState} from 'react'
import * as S from './Avatar.styled'

interface Props {
  src?: string
  alt?: string
  tamanho: TamanhosComponente
}

export function Avatar({src, alt, tamanho}: Props) {
  const [placeholder, setPlaceholder] = useState({
    src: '',
    alt: 'Imagem Perfil',
  })
  const {idPlaceholder} = imagens
  const reqPlaceholder = buscaAsset(idPlaceholder)

  function carregaPlaceholder() {
    reqPlaceholder.then((resposta) => {
      const imagemBuscada = resposta.dados.asset as Asset

      setPlaceholder({
        ...placeholder,
        src: imagemBuscada.url,
      })
    })
  }

  useEffect(() => {
    carregaPlaceholder()
  }, [])

  console.log(tamanho)
  return (
    <S.ContainerAvatar
      src={src ? src : placeholder.src}
      alt={alt ? alt : placeholder.alt}
      width={tamanho}
      height={tamanho}
    />
  )
}
