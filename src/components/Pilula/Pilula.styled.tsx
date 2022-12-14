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
  flex-wrap: nowrap;

  width: fit-content;
  height: 30px;

  background: ${({ativa}) => (ativa === 'true' ? cores.vinho : cores.terra)};
  color: ${cores.branco};

  padding: ${margens.xxsmall}px ${margens.xsmall}px;
  border-radius: 10px;
`

export const NomePilula = styled.p`
  ${detalhe}

  width: max-content;
  font-size: 14px;
  font-family: ${paragrafo.fontFamily};
`
