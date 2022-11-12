import { StatusRequisicao } from './enums';

export type ChaveValor<T> = {
  [key: string]: T;
};

export type RespostaRequisicao = {
  status: StatusRequisicao;
  erro?: string;
  dados: any;
};

export type Usuario = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Post = {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  content: {
    id: string;
    heading: string;
    body: {
      text: string;
    };
  };
  slug: string;
  image: {
    url: string;
  };
  publishedAt: string;
};

export type OpcaoMenu = {
  nome: string;
  caminho: string;
};

export type Imagem = {
  src: string;
  alt: string;
};

export type Caminho = {
  params: ChaveValor<string>;
};