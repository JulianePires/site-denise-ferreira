import {LayoutPaginaErro} from '@/layouts/LayoutPaginnaErro'

export default function Custom404() {
  const erro404 = {
    status: 404,
    mensagem: 'Não foi possível encontrar o recurso',
  }
  return <LayoutPaginaErro erro={erro404} titulo="Página não encontrada" />
}
