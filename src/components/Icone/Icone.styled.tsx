import styled from 'styled-components'

export interface ContainerIconeProps {
  cor: string
  tamanho: number
  corFundo?: string
  tamanhoFonte?: number
}

export const ContainerIcone = styled.div<ContainerIconeProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.tamanho}px;
  height: ${(props) => props.tamanho}px;

  font-size: ${(props) =>
    props.tamanhoFonte ? props.tamanhoFonte : props.tamanho}px;
  color: ${(props) => props.cor};
  background: ${(props) => (props.corFundo ? props.corFundo : 'none')};
`
