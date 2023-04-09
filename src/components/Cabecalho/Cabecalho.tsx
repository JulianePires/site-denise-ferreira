import {Logo} from '@/components/Logo'
import opcoesMenuHome from '@/routes/menu'
import {useRouter} from 'next/router'
import * as S from './Cabecalho.styled'

export function Cabecalho() {
  const router = useRouter()
  const caminho = router.pathname

  function aoClicarNaOpcao(caminho: string) {
    router.push(caminho)
  }

  return (
    <S.ContainerCabecalho>
      <Logo />
      <S.ContainerOpcoesMenu>
        {opcoesMenuHome.map((opcao, index) => (
          <S.OpcaoMenu
            onClick={() => aoClicarNaOpcao(opcao.caminho)}
            atual={String(caminho === opcao.caminho)}
            key={index}>
            {opcao.nome}
          </S.OpcaoMenu>
        ))}
      </S.ContainerOpcoesMenu>
    </S.ContainerCabecalho>
  )
}
