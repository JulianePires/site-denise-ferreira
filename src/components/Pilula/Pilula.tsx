import {useState} from 'react'
import {ContainerPilula, NomePilula} from './Pilula.styled'

interface Props {
  nome: string
  valor: string
  aoClicar?: (valor: string) => void
}

export function Pilula({nome, valor, aoClicar}: Props) {
  const [ativa, setAtiva] = useState(false)

  // function alteraEstadoAtiva() {
  //   setAtiva(!ativa)
  // }

  // const aoClicarNaPilula = useCallback(() => {
  //   aoClicar && aoClicar(valor)
  //   alteraEstadoAtiva()
  // }, [])

  return (
    <ContainerPilula
      // onClick={aoClicarNaPilula}
      ativa={String(ativa)}>
      <NomePilula>{nome.slice(0, 18)}</NomePilula>
    </ContainerPilula>
  )
}
