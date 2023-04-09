import {StatusRequisicao} from '@/data/enums'
import {Asset} from '@/data/tipos'
import {buscaAsset} from '@/infrastructure/requisicoes/asset'
import imagens from '@/resources/imagens'
import {createContext, ReactNode, useContext, useEffect, useState} from 'react'

interface AssetsContextProps {
  texturaAzul?: Asset
  sankofaLongaTerra?: Asset
  sankofaLongaBranca?: Asset
  sankofaLongaAmarela?: Asset
  sankofaLaranja?: Asset
  sankofaAzul?: Asset
  sankofaAzulPetroleo?: Asset
  buscaAtualizaAsset: (
    idAsset: string,
    funcaoAtualizacaoEstado: (imagem: Asset) => void,
  ) => void
}

interface AssetsProviderProps {
  children: ReactNode
}

const AssetsContext = createContext({} as AssetsContextProps)

export const AssetsProvider = ({children}: AssetsProviderProps) => {
  const {
    idTexturaAzul,
    idSankofaLongaTerra,
    idSankofaLongaBranca,
    idSankofaLongaAmarela,
    idSankofaLaranja,
    idSankofaAzul,
    idSankofaAzulPetroleo,
  } = imagens

  const estadoInicialAsset: Asset = {
    url: '',
    width: 50,
    height: 50,
    id: '',
    createdAt: '',
    updatedAt: '',
    updatedBy: {
      name: '',
      picture: '',
    },
    fileName: '',
  }
  const [texturaAzul, setTexturaAzul] = useState<Asset>({
    ...estadoInicialAsset,
    url: 'https://media.graphassets.com/OUU9rGobRNGc7R8pD17v',
  })
  const [sankofaLongaTerra, setSankofaLongaTerra] = useState<Asset>({
    ...estadoInicialAsset,
    url: 'https://media.graphassets.com/sUKOp8ATWaEBuhVJ2ZHo',
  })
  const [sankofaLongaBranca, setSankofaLongaBranca] = useState<Asset>({
    ...estadoInicialAsset,
    url: 'https://media.graphassets.com/MY9iUk6QQicoPXvNgzuJ',
  })
  const [sankofaLongaAmarela, setSankofaLongaAmarela] = useState<Asset>({
    ...estadoInicialAsset,
    url: 'https://media.graphassets.com/dGWE6nqSRXuloyFoClUW',
  })
  const [sankofaLaranja, setSankofaLaranja] = useState<Asset>({
    ...estadoInicialAsset,
    url: 'https://media.graphassets.com/pGtafI7dT1yLGJLs4PA0',
  })
  const [sankofaAzul, setSankofaAzul] = useState<Asset>({
    ...estadoInicialAsset,
    url: 'https://media.graphassets.com/1O0LIgsuTR6FI1en3zsF',
  })
  const [sankofaAzulPetroleo, setSankofaAzulPetroleo] = useState<Asset>({
    ...estadoInicialAsset,
    url: 'https://media.graphassets.com/XxtuER5VQXGDE1NyjLqd',
  })

  function atualizaTexturaAzul(novaTexturaAzul: Asset) {
    setTexturaAzul(novaTexturaAzul)
  }

  function atualizaSankofaLongaTerra(novaSankofaLongaTerra: Asset) {
    setSankofaLongaTerra(novaSankofaLongaTerra)
  }

  function atualizaSankofaLongaBranca(novaSankofaLongaBranca: Asset) {
    setSankofaLongaBranca(novaSankofaLongaBranca)
  }

  function atualizaSankofaLongaAmarela(novaSankofaLongaAmarela: Asset) {
    setSankofaLongaAmarela(novaSankofaLongaAmarela)
  }

  function atualizaSankofaLaranja(novaSankofaLaranja: Asset) {
    setSankofaLaranja(novaSankofaLaranja)
  }

  function atualizaSankofaAzul(novaSankofaAzul: Asset) {
    setSankofaAzul(novaSankofaAzul)
  }

  function atualizaSankofaAzulPetroleo(novaSankofaAzulPetroleo: Asset) {
    setSankofaAzulPetroleo(novaSankofaAzulPetroleo)
  }

  function buscaAtualizaAsset(
    idAsset: string,
    funcaoAtualizacaoEstado: (imagem: Asset) => void,
  ) {
    const requisicao = buscaAsset(idAsset)

    requisicao
      .then((resposta) => {
        if (resposta.status === StatusRequisicao.SUCESSO) {
          funcaoAtualizacaoEstado(resposta.dados.asset as Asset)
        }
      })
      .catch((erro) => {
        console.error(erro)
      })
  }

  useEffect(() => {
    buscaAtualizaAsset(idTexturaAzul, atualizaTexturaAzul)
    buscaAtualizaAsset(idSankofaLongaBranca, atualizaSankofaLongaBranca)
    buscaAtualizaAsset(idSankofaLongaTerra, atualizaSankofaLongaTerra)
    buscaAtualizaAsset(idSankofaLongaAmarela, atualizaSankofaLongaAmarela)
    buscaAtualizaAsset(idSankofaLaranja, atualizaSankofaLaranja)
    buscaAtualizaAsset(idSankofaAzul, atualizaSankofaAzul)
    buscaAtualizaAsset(idSankofaAzulPetroleo, atualizaSankofaAzulPetroleo)
  }, [
    idTexturaAzul,
    idSankofaLongaBranca,
    idSankofaLongaTerra,
    idSankofaLongaAmarela,
    idSankofaLaranja,
    idSankofaAzul,
    idSankofaAzulPetroleo,
  ])

  return (
    <AssetsContext.Provider
      value={{
        texturaAzul,
        sankofaLongaBranca,
        sankofaLongaTerra,
        sankofaLongaAmarela,
        sankofaLaranja,
        sankofaAzul,
        sankofaAzulPetroleo,
        buscaAtualizaAsset,
      }}>
      {children}
    </AssetsContext.Provider>
  )
}

const useAssets = () => useContext(AssetsContext)

export default useAssets
