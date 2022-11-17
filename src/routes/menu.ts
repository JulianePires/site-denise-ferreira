import { OpcoesMenu } from '@data/enums';
import { OpcaoMenu } from '@data/tipos';

const opcoesMenuHome: OpcaoMenu[] = [
  {
    nome: OpcoesMenu.HOME,
    caminho: '/',
  },
  {
    nome: OpcoesMenu.ATUACAO,
    caminho: '/atuacao',
  },
  {
    nome: OpcoesMenu.BLOG,
    caminho: '/blog',
  },
  {
    nome: OpcoesMenu.CONTATO,
    caminho: '/contato',
  },
];

export default opcoesMenuHome;
