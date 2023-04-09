import { Botao } from '@/components/Botao'
import cores from '@/resources/cores'
import dispositivos from '@/resources/dispositivos'
import {detalhe} from '@/resources/textos'
import Link from 'next/link'
import styled from 'styled-components'

export const LinkParaContato = styled(Link)`
  color: ${cores.amarelo};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${cores.laranja};
  }
`

export const TextoDescritivo = styled.p`
  ${detalhe}

  font-size: 1rem;
  margin: 0;
  margin-bottom: 1rem;

  @media ${dispositivos.tablet} {
    width: 320px;
  }

  @media ${dispositivos.laptop} {
    font-size: 1.1rem;
    width: 470px;
  }

  @media ${dispositivos.laptopL} {
    font-size: 1.5rem;
    width: 600px;
  }
`

export const BotaoRetorno = styled(Botao)`
    display: flex;
    gap: 0.5rem;
`
