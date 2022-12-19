import {StatusRequisicao} from '@data/enums'
import {Asset} from '@data/tipos'
import {buscaAsset} from '@infrastructure/requisicoes/asset'
import imagens from '@resources/imagens'
import {createContext, ReactNode, useContext, useEffect, useState} from 'react'

interface AssetsContextProps {
  texturaAzul?: Asset
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
  const {idTexturaAzul} = imagens
  const [texturaAzul, setTexturaAzul] = useState<Asset>()

  function atualizaTexturaAzul(novaTexturaAzul: Asset) {
    setTexturaAzul(novaTexturaAzul)
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
  }, [idTexturaAzul])

  return (
    <AssetsContext.Provider value={{texturaAzul, buscaAtualizaAsset}}>
      {children}
    </AssetsContext.Provider>
  )
}

const useAssets = () => useContext(AssetsContext)

export default useAssets
