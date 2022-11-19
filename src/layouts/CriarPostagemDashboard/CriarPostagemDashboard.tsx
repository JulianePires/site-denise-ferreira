import {LayoutDashboard} from '@components/LayoutDashboard'
import {OpcoesPaginasDashboard} from '@data/enums'
import {ContainerCriarPostagem} from './CriarPostagemDashboard.styled'

export function CriarPostagemDashboard() {
  return (
    <LayoutDashboard titulo={OpcoesPaginasDashboard.CRIARPOSTAGEM}>
      <ContainerCriarPostagem>Alguma coisa</ContainerCriarPostagem>
    </LayoutDashboard>
  )
}
