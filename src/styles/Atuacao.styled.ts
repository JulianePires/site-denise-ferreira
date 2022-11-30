import {ContainerTipo} from '@data/tipos'
import dispositivos from '@resources/dispositivos'
import Image from 'next/image'
import styled from 'styled-components'

export const ContainerJurista = styled.span<ContainerTipo>``

export const ImagemJurista = styled(Image)`
  align-self: center;

  width: 300px;
  height: auto;
  border-radius: 10px;

  @media ${dispositivos.tablet} {
    width: 380px;
  }
`
