import {OpcaoMenu} from '@/data/tipos'

const opcoesMenuDashboard: OpcaoMenu[] = [
  {
    nome: 'Postagens',
    caminho: 'postagens',
  },
  {
    nome: 'Editar Post',
    caminho: 'postagem/{pid}'
  },
  {
    nome: 'Criar Postagem',
    caminho: 'criarPostagem',
  },
  {
    nome: 'Usuários',
    caminho: 'usuarios',
  },
]

export default opcoesMenuDashboard
