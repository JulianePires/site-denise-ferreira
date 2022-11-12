import { Post } from '@data/tipos';

interface Props {
  postagens: Post[];
}

export function PostagensDashboard({ postagens }: Props) {
  console.log(postagens);
  return <h1>Postagens</h1>;
}
