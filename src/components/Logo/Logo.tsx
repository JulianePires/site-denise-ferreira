import {Asset} from '@data/tipos'
import {buscaAsset} from '@services/requisicoes/asset'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import {ContainerLogo} from './Logo.styled'

interface Props {
  cor?: 'branco' | 'terra'
}

export function Logo({cor = 'branco'}: Props) {
  const [imagem, setImagem] = useState({
    src: '',
    alt: '',
  })

  const idSankofaLongaTerra = 'claldx1g4206b0blvefe7vpuj'
  const idSankofaLongaBranca = 'claldx1c720590blvktvpwagh'

  const reqSankofaBranca = buscaAsset(idSankofaLongaBranca)
  const reqSankofaTerra = buscaAsset(idSankofaLongaTerra)

  function atualizaImagemLogo() {
    if (cor === 'terra') {
      reqSankofaTerra.then((resposta) => {
        const imagemBuscada = resposta.dados.asset as Asset

        setImagem({
          src: imagemBuscada.url,
          alt: 'Logo Sankofa Terra',
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
    <ContainerLogo>
      <Image src={imagem.src} alt={imagem.alt} width={94} height={70} />
    </ContainerLogo>
  )
}
