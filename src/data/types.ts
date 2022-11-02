import { StatusRequisicao } from './enums';

export type RespostaRequisicao = {
  status: StatusRequisicao;
  erro?: string;
  dados: any;
};

export type User = {
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
