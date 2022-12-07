import {ImagemComFallback} from '@components/ImagemComFallback'
import {Asset} from '@data/tipos'
import {buscaAsset} from '@infrastructure/requisicoes/asset'
import imagens from '@resources/imagens'
import {useEffect, useState} from 'react'
import * as S from './Logo.styled'

interface Props {
  cor?: 'branco' | 'terra' | 'amarela'
}

export function Logo({cor = 'branco'}: Props) {
  const {idSankofaLongaTerra, idSankofaLongaBranca, idSankofaLongaAmarela} =
    imagens
  const [imagem, setImagem] = useState({
    src: '',
    alt: '',
  })

  const reqSankofaBranca = buscaAsset(idSankofaLongaBranca)
  const reqSankofaTerra = buscaAsset(idSankofaLongaTerra)
  const reqSankofaAmarela = buscaAsset(idSankofaLongaAmarela)

  function atualizaImagemLogo() {
    if (cor === 'terra') {
      reqSankofaTerra.then((resposta) => {
        const imagemBuscada = resposta.dados.asset as Asset

        setImagem({
          src: imagemBuscada.url,
          alt: 'Logo Sankofa Terra',
        })
      })
    } else if (cor === 'amarela') {
      reqSankofaAmarela.then((resposta) => {
        const imagemBuscada = resposta.dados.asset as Asset

        setImagem({
          src: imagemBuscada.url,
          alt: 'Logo Sankofa Amarela',
        })
      })
    } else {
      reqSankofaBranca.then((resposta) => {
        const imagemBuscada = resposta.dados.asset as Asset

        setImagem({
          src: imagemBuscada.url,
          alt: 'Logo Sankofa Branca',
        })
      })
    }
  }

  useEffect(() => {
    atualizaImagemLogo()
  }, [cor])

  return (
    <S.ContainerLogo>
      <ImagemComFallback
        src={imagem.src}
        alt={imagem.alt}
        width={94}
        height={70}
      />
    </S.ContainerLogo>
  )
}
