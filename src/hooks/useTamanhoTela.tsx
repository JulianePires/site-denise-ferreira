import {useEffect, useState} from 'react'

function obterDimensoesTela() {
  const {innerWidth: width, innerHeight: height} = window
  return {
    width,
    height,
  }
}

const useTamanhoTela = () => {
  const [tamanhoTela, setTamanhoTela] = useState(obterDimensoesTela())

  useEffect(() => {
    function lidarComRedimensionamento() {
      setTamanhoTela(obterDimensoesTela())
    }

    window.addEventListener('resize', lidarComRedimensionamento)
    return () => window.removeEventListener('resize', lidarComRedimensionamento)
  }, [])

  return tamanhoTela
}

export default useTamanhoTela
