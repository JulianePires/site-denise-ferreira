import {StatusRequisicao} from '@data/enums'
import {Post} from '@data/tipos'
import {buscaPostsComFiltro} from '@infrastructure/requisicoes/post'
import {useEffect, useState} from 'react'

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [buscaTitulo, setBuscaTitulo] = useState('')

  function alteraValorBuscaTitulo(valor: string) {
    setBuscaTitulo(valor)
  }

  function atualizaPostsComFiltro(titulo: string) {
    const reqPostsComFiltro = buscaPostsComFiltro(titulo)

    reqPostsComFiltro
      .then((resposta) => {
        if (resposta.status === StatusRequisicao.SUCESSO) {
          console.log(resposta.dados)
          const postsBuscados = resposta.dados.posts as Post[]
          setPosts(postsBuscados)
        }
      })
      .catch((erro) => {
        console.error(erro)
      })
  }

  useEffect(() => {
    atualizaPostsComFiltro(buscaTitulo)
  }, [buscaTitulo])

  return {
    posts,
    buscaTitulo,
    alteraValorBuscaTitulo,
  }
}

export default usePosts
