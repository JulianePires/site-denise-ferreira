import cores from '@resources/cores'
import margens from '@resources/margens'
import {titulo2} from '@resources/textos'
import styled from 'styled-components'

export const ContainerExternoLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;

  background: ${cores.azulPetroleo};
`

export const ContainerInternoLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-self: flex-end;

  width: 80%;
  padding: ${margens.medium}px ${margens.large}px;
`

export const TituloLayout = styled.h2`
  ${titulo2}
  width: 100%;
  height: max-content;
`

interface BannerLayoutProps {
  imagemFundo: string
}

export const BannerLayout = styled.div<BannerLayoutProps>`
  width: 100%;
  height: 140px;
  background: url(${(props) => props.imagemFundo});
  background-size: contain;
  background-repeat: repeat;
`
