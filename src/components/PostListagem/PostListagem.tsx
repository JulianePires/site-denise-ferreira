/* eslint-disable @typescript-eslint/no-empty-function */
import {Avatar} from '@components/Avatar'
import {Pilula} from '@components/Pilula'
import {Stack} from '@components/Stack'
import {Direcoes, StatusRequisicao} from '@data/enums'
import {Asset, Categoria, Imagem, Perfil} from '@data/tipos'
import {formataDataParaPadrao} from '@infrastructure/funcoes'
import {buscaAsset} from '@infrastructure/requisicoes/asset'
import imagens from '@resources/imagens'
import {useRouter} from 'next/router'
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
  const textoAlternativoFotoAutor = `Foto de perfil de ${nome}`
  const router = useRouter()

  const conteudoLimitado = conteudo.slice(0, 150) + '...'

  const dataCriacaoFormatada = formataDataParaPadrao(dataCriacao)

  function direcionaParaPaginaDoPost() {
    router.push(rotaPost)
  }

  console.log(categorias)

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
        <S.AmostraConteudoPost>{conteudoLimitado}</S.AmostraConteudoPost>
      </S.ConteudoCartaoPost>
      <S.RodapeCartaoPost imagemFundo={imagemFundoRodape}>
        <Stack direcao={Direcoes.H} gap="1rem">
          <Avatar src={foto.url} alt={textoAlternativoFotoAutor} tamanho={50} />
          <Stack direcao={Direcoes.V} gap="0.1rem">
            <S.NomeAutorPost>{nome}</S.NomeAutorPost>
            <S.DataCriacaoPost>{dataCriacaoFormatada}</S.DataCriacaoPost>
          </Stack>
        </Stack>

        <Stack direcao={Direcoes.H} gap="0.5rem" quebra={true}>
          {categorias?.slice(0,4).map(({id, nome, slug}) => (
            <Pilula key={id} nome={nome} valor={slug} aoClicar={() => {}} />
          ))}
        </Stack>
      </S.RodapeCartaoPost>
    </S.CartaoPost>
  )
}
