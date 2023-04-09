import {TemasCores} from '@/data/tipos'
import cores from '@/resources/cores'
import styled from 'styled-components'

interface ContainerBotaoIconeProps {
  corBackground: TemasCores
  corIcone: TemasCores
}

export const ContainerBotaoIcone = styled.button<ContainerBotaoIconeProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border-radius: 50%;

  background: ${(props) => cores[props.corBackground]};
  border: none;
  color: ${(props) => cores[props.corIcone]};
  cursor: pointer;

  font-size: 2rem;

  transition: 0.3s ease-in-out all;

  &:hover {
    opacity: 0.8;
  }
`
