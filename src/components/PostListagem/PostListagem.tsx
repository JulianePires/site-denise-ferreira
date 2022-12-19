/* eslint-disable @typescript-eslint/no-empty-function */
import {InformacoesAutorPost} from '@components/InformacoesAutorPost'
import {Pilula} from '@components/Pilula'
import {Direcoes, StatusRequisicao} from '@data/enums'
import {Asset, Categoria, Imagem, Perfil} from '@data/tipos'
import useNavegacao from '@hooks/useNavegacao'
import {buscaAsset} from '@infrastructure/requisicoes/asset'
import imagens from '@resources/imagens'
import {useEffect, useState} from 'react'
import * as S from './PostListagem.styled'

interface Props {
  imagem: Imagem
  autor: Perfil
  dataCriacao: string
  titulo: string
  subtitulo: string
  conteudo: string
  slug: string
  categorias: Categoria[]
}

export function PostListagem({
  autor,
  categorias,
  dataCriacao,
  imagem,
  slug,
  titulo,
  conteudo,
}: Props) {
  const [imagemFundoRodape, setImagemFundoRodape] = useState('')
  const {alt, src} = imagem
  const {nome, foto} = autor
  const rotaPost = `/posts/${slug}`
  const {navegarParaPostPorSlug} = useNavegacao()

  const conteudoFormatado = conteudo.replace(/\\n/g, '\n').slice(0, 150) + '...'

  function direcionaParaPaginaDoPost() {
    navegarParaPostPorSlug(slug)
  }

  function atualizaImagemFundoRodape() {
    const {idTexturaVinho} = imagens
    const reqTexturaVinho = buscaAsset(idTexturaVinho)

    reqTexturaVinho.then((resposta) => {
      if (resposta.status === StatusRequisicao.SUCESSO) {
        const textura = resposta.dados.asset as Asset
        setImagemFundoRodape(textura.url)
      }
    })
  }

  useEffect(() => {
    atualizaImagemFundoRodape()
  }, [])

  return (
    <S.CartaoPost onClick={direcionaParaPaginaDoPost}>
      <S.ImagemCartaoPost src={src} alt={alt} width={300} height={300} />
      <S.ConteudoCartaoPost>
        <S.TituloPost href={rotaPost}>{titulo}</S.TituloPost>
        <S.AmostraConteudoPost>{conteudoFormatado}</S.AmostraConteudoPost>
      </S.ConteudoCartaoPost>
      <S.RodapeCartaoPost imagemFundo={imagemFundoRodape}>
        <InformacoesAutorPost
          dataCriacaoPost={dataCriacao}
          imagemAvatar={foto.url}
          nomeAutor={nome}
          justificar="flex-start"
        />

        <S.CategoriasPost
          direcao={Direcoes.H}
          gap="0.5rem"
          largura="280px"
          quebra={true}>
          {categorias?.slice(0, 4).map(({id, nome, slug}) => (
            <Pilula key={id} nome={nome} valor={slug} aoClicar={() => {}} />
          ))}
        </S.CategoriasPost>
      </S.RodapeCartaoPost>
    </S.CartaoPost>
  )
}
