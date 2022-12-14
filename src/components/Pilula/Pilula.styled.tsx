import cores from '@resources/cores'
import margens from '@resources/margens'
import {detalhe, paragrafo} from '@resources/textos'
import styled from 'styled-components'

interface ContainerPilulaProps {
  ativa: string
}

export const ContainerPilula = styled.div<ContainerPilulaProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-overflow: clip;

  width: max-content;

  background: ${({ativa}) => (ativa === 'true' ? cores.vinho : cores.terra)};
  color: ${cores.branco};

  padding: ${margens.xxsmall}px ${margens.xsmall}px;
  border-radius: 10px;
`

export const NomePilula = styled.p`
  ${detalhe}

  font-size: 14px;
  font-family: ${paragrafo.fontFamily};
`
