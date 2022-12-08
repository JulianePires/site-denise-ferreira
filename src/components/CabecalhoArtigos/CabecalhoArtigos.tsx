import {Input} from '@components/Input'
import {Titulo} from '@components/Titulo'
import {StatusRequisicao} from '@data/enums'
import {Categoria} from '@data/tipos'
import {buscaCategorias} from '@infrastructure/requisicoes/categoria'
import conteudoTexto from '@resources/conteudoTexto'
import cores from '@resources/cores'
import {useEffect, useState} from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import * as S from './CabecalhoArtigos.styled'

interface Props {
  textoBusca: string
  aoAlterarTextoBusca: (valor: string) => void
  erro?: string
}

export function CabecalhoArtigos({
  textoBusca,
  aoAlterarTextoBusca,
  erro,
}: Props) {
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const {titulo} = conteudoTexto.textoBlog

  function atualizaCategorias() {
    buscaCategorias()
      .then((resposta) => {
        if (resposta.status === StatusRequisicao.SUCESSO)
          setCategorias(resposta.dados.categories)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    atualizaCategorias()
  }, [])
  return (
    <S.CabecalhoArtigos>
      <Titulo corTexto={cores.vinho}>{titulo}</Titulo>
      <Input
        id="buscarArtigo"
        label="Buscar"
        nomeCampo="buscarArtigo"
        placeholder="O que você está buscando?"
        largura="300px"
        icone={BiSearchAlt}
        valor={textoBusca}
        aoAlterar={({target}) => aoAlterarTextoBusca(target.value)}
        erro={erro}
        corLabel={cores.terra}
      />
      {/* <S.FiltroCategorias>
        {categorias.map((categoria) => (
          <S.Categoria key={categoria.id}>{categoria.name}</S.Categoria>
        ))}
      </S.FiltroCategorias> */}
    </S.CabecalhoArtigos>
  )
}
