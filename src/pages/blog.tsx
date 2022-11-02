import { Post } from '@data/types';
import { getPosts } from '@services/requests/post';
import { StatusRequisicao } from 'src/data/enums';

interface BlogProps {
  posts: Post[];
}

export default function Blog(props: BlogProps) {
  console.log(props);

  return <h1>Blog</h1>;
}

export async function getStaticProps() {
  const { dados, status } = await getPosts();

  let posts = [];

  if (status === StatusRequisicao.SUCESSO) posts = dados.posts;

  return {
    props: { posts },
  };
}
