import { LayoutPaginaErro } from '@/layouts/LayoutPaginnaErro'

export default function Custom500(){
  const erro500 = {
    status: 500,
    mensagem: 'Ocorreu um erro no servidor',
  }
  return <LayoutPaginaErro erro={erro500} titulo="Página não encontrada" />
}