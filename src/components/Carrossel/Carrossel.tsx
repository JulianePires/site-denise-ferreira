import {Stack} from '@components/Stack'
import {Direcoes, EstilosBotao} from '@data/enums'
import {DirecoesTipo, ElementoCarrosselTipo} from '@data/tipos'
import conteudoTexto from '@resources/conteudoTexto'
import {useState} from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import * as S from './Carrossel.styled'

interface Props {
  direcao: DirecoesTipo
  elementos: ElementoCarrosselTipo[]
}

export function Carrossel({direcao, elementos}: Props) {
  const [elementoAtual, setElementoAtual] = useState(1)
  const quantidadeDeElementos = elementos.length
  const elementosManipulaveis = elementos

  function avancaElementoAtual() {
    if (elementoAtual + 1 === quantidadeDeElementos + 1) {
      setElementoAtual(1)
    } else {
      setElementoAtual(elementoAtual + 1)
    }
    const primeiroElemento =
      elementosManipulaveis.shift() as ElementoCarrosselTipo
    elementosManipulaveis.push(primeiroElemento)
  }

  function retrocedeElementoAtual() {
    if (elementoAtual - 1 === 0) {
      setElementoAtual(quantidadeDeElementos)
    } else {
      setElementoAtual(elementoAtual - 1)
    }
    const ultimoElemento = elementosManipulaveis.pop() as ElementoCarrosselTipo
    elementosManipulaveis.unshift(ultimoElemento)
  }

  return (
    <S.ContainerCarrossel direcao={direcao}>
      <S.ImagensCarrossel direcao={direcao}>
        {elementosManipulaveis.map((elemento, index) => (
          <Stack key={index} direcao={Direcoes.V} gap="1rem">
            <S.ImagemCarrossel
              src={elemento.imagem}
              alt={elemento.descricao}
              width={400}
              height={400}
            />
            <S.DescricaoImagemCarrossel>
              {elemento.descricao}
            </S.DescricaoImagemCarrossel>
            <S.BotaoImagemCarrossel
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              aoClicar={() => {}}
              tema="amarelo"
              estilo={EstilosBotao.GHOST}
              tamanho="P">
              {
                conteudoTexto.textoAtuacao.escritora.textoBotaoCarrossel[
                  elemento.tipo
                ]
              }
            </S.BotaoImagemCarrossel>
          </Stack>
        ))}
      </S.ImagensCarrossel>
      <Stack direcao={Direcoes.H} gap="1rem">
        <S.IndexCarrossel>{`0${elementoAtual}|0${quantidadeDeElementos}`}</S.IndexCarrossel>
        <S.SetaCarrossel onClick={retrocedeElementoAtual}>
          <BsArrowLeftCircleFill />
        </S.SetaCarrossel>
        <S.SetaCarrossel onClick={avancaElementoAtual}>
          <BsArrowRightCircleFill />
        </S.SetaCarrossel>
      </Stack>
    </S.ContainerCarrossel>
  )
}
