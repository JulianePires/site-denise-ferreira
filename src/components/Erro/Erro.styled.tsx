import {Container} from '@components/Container'
import dispositivos from '@resources/dispositivos'
import Lottie from 'lottie-react'
import styled from 'styled-components'

export const ContainerErro = styled(Container)`
  align-items: center;
  gap:  2rem;
`

export const ImagemErro = styled(Lottie)`
  width: 300px;
  height: auto;
  align-self: center;

  @media ${dispositivos.tablet} {
    width: 400px;
  }

  @media ${dispositivos.laptop} {
    width: 500px;
  }
`
