import {Asset} from '@data/tipos'
import imagens from '@resources/imagens'
import {buscaAsset} from '@services/requisicoes/asset'
import {ReactNode, useEffect, useState} from 'react'
import {
  BannerLayout,
  ContainerExternoLayout,
  ContainerInternoLayout,
  TituloLayout,
} from './LayoutDashboard.styled'

interface Props {
  titulo: string
  children: ReactNode
}

export function LayoutDashboard({titulo, children}: Props) {
  const [textura, setTextura] = useState('')
  const {idTexturaAmarela} = imagens
  const reqTexturaAmarela = buscaAsset(idTexturaAmarela)

  function atualizaTexturaBanner() {
    reqTexturaAmarela.then((resposta) => {
      const imagemBuscada = resposta.dados.asset as Asset

      setTextura(imagemBuscada.url)
    })
  }

  useEffect(() => {
    atualizaTexturaBanner()
  }, [])

  return (
    <ContainerExternoLayout>
      <BannerLayout imagemFundo={textura} />
      <ContainerInternoLayout>
        <TituloLayout>{titulo}</TituloLayout>
        {children}
      </ContainerInternoLayout>
    </ContainerExternoLayout>
  )
}
