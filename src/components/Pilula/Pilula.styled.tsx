import cores from '@resources/cores'
import { detalhe, subtitulo } from '@resources/textos'
import styled from 'styled-components'

interface ContainerPilulaProps {
  ativa: string
}

export const ContainerPilula = styled.div<ContainerPilulaProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;

  cursor: pointer;

  background: ${({ativa}) => (ativa === 'true' ? cores.amarelo : cores.branco)};
  color: ${cores.azulPetroleo};
`

export const NomePilula = styled.p`
    ${detalhe}

    font-family: ${subtitulo.fontFamily};
`
