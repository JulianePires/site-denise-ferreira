import {Rotas} from '@/data/enums'
import {useRouter} from 'next/router'

const useNavegacao = () => {
  const router = useRouter()

  const navegarParaRota = (rota: string) => {
    router.push(rota)
  }

  const navegarParaPostPorSlug = (slug: string) => {
    const rotaPost = Rotas.POST.replace(':slug', slug)
    router.push(rotaPost)
  }

  const navegarParaCategoriaPorNome = (nome: string) => {
    const rotaCategoria = Rotas.CATEGORIA.replace(':nome', nome)
    router.push(rotaCategoria)
  }

  const navegarParaEdicaoDePost = (id: string) => {
    const rotaEdicaoPost = Rotas.EDITARPOST.replace(':pid', id)
    router.push(rotaEdicaoPost)
  }

  return {
    navegarParaRota,
    navegarParaPostPorSlug,
    navegarParaCategoriaPorNome,
    navegarParaEdicaoDePost
  }
}

export default useNavegacao
