import {LayoutDashboard} from '@components/LayoutDashboard'
import {OpcoesPaginasDashboard} from '@data/enums'
import {Usuario} from '@data/tipos'
import {ContainerUsuarios} from './UsuariosDashboard.styled'

interface Props {
  usuarios: Usuario[]
}

export function UsuariosDashboard({usuarios}: Props) {
  console.log(usuarios)
  return (
    <LayoutDashboard titulo={OpcoesPaginasDashboard.USUARIOS}>
      <ContainerUsuarios>Alguma coisa</ContainerUsuarios>
    </LayoutDashboard>
  )
}
