import {ReactNode} from 'react'
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
  return (
    <ContainerExternoLayout>
      <BannerLayout />
      <ContainerInternoLayout>
        <TituloLayout>{titulo}</TituloLayout>
        {children}
      </ContainerInternoLayout>
    </ContainerExternoLayout>
  )
}
