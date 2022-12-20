import {Botao} from '@components/Botao'
import {Titulo} from '@components/Titulo'
import dispositivos from '@resources/dispositivos'
import {detalhe, subtitulo} from '@resources/textos'
import styled from 'styled-components'

export const FormularioContato = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
`

export const TituloContato = styled(Titulo)``

export const BotaoEnviarMensagemContato = styled(Botao)``

export const TextoDescricaoContato = styled.p`
  ${detalhe}

  text-align: justify;
  text-justify: newspaper;

  font-size: 1.5rem;
  width: 100%;
  line-height: ${subtitulo.lineHeight};

  @media ${dispositivos.mobileL} {
    width: 80%;
  }

  @media ${dispositivos.laptop} {
    width: 400px;
  }

  @media ${dispositivos.laptopL} {
    width: 600px;
  }
`
