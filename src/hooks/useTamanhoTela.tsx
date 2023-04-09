import { ChaveValor } from '@/data/tipos'
import {useEffect, useState} from 'react'

function obterDimensoesTela() {
  const {innerWidth: width, innerHeight: height} = window
  return {
    width,
    height,
  }
}

const telasPorTamanho: ChaveValor<string> = {
  320: 'mobileS',
  375: 'mobileM',
  425: 'mobileL',
  768: 'tablet',
  1024: 'laptop',
  1440: 'laptopL',
  2560: 'desktop'
}

const useTamanhoTela = () => {
  const [tamanhoTela, setTamanhoTela] = useState<{
    width: number | undefined
    height: number | undefined
  }>({
    width: undefined,
    height: undefined,
  })
  const [tipoTelaPorTamanho, setTipoTelaPorTamanho] = useState<string | undefined>()

  function alteraTipoTelaPorTamanho(tamanho: number){
    setTipoTelaPorTamanho(telasPorTamanho[tamanho])
  }

  useEffect(() => {
    function lidarComRedimensionamento() {
      setTamanhoTela(obterDimensoesTela())
      tamanhoTela.width && alteraTipoTelaPorTamanho(tamanhoTela.width)
    }

    window.addEventListener('resize', lidarComRedimensionamento)
    return () => window.removeEventListener('resize', lidarComRedimensionamento)
  }, [])

  return {tamanhoTela, tipoTelaPorTamanho}
}

export default useTamanhoTela
