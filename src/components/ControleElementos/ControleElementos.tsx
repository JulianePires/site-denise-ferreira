import {Stack} from '@components/Stack'
import {Direcoes} from '@data/enums'
import {DirecoesTipo} from '@data/tipos'
import cores from '@resources/cores'
import {
  BsArrowLeftCircleFill,
  BsArrowUpCircleFill,
  BsArrowRightCircleFill,
  BsArrowDownCircleFill,
} from 'react-icons/bs'
import * as S from './ControleElementos.styled'

interface Props {
  tamanhoArray: number
  elementoDestaque: number
  direcao: DirecoesTipo
  cor?: string
  aoClicarEmProximo: () => void
  aoClicarEmAnterior: () => void
}

export function ControleElementos({
  tamanhoArray,
  elementoDestaque,
  direcao,
  cor = cores.branco,
  aoClicarEmProximo,
  aoClicarEmAnterior,
}: Props) {
  const statusControleElementos = `0${elementoDestaque + 1} | 0${tamanhoArray}`

  return (
    <Stack direcao={Direcoes.H} gap="1rem" alinhar="center" justificar="center">
      <S.StatusControleElemento  corTexto={cor}>
        {statusControleElementos}
      </S.StatusControleElemento>
      <S.BotaoControleElemento onClick={aoClicarEmAnterior}>
        {direcao === 'horizontal' ? (
          <BsArrowLeftCircleFill color={cor} />
        ) : (
          <BsArrowUpCircleFill color={cor} />
        )}
      </S.BotaoControleElemento>
      <S.BotaoControleElemento onClick={aoClicarEmProximo}>
        {direcao === 'horizontal' ? (
          <BsArrowRightCircleFill color={cor} />
        ) : (
          <BsArrowDownCircleFill color={cor} />
        )}
      </S.BotaoControleElemento>
    </Stack>
  )
}
