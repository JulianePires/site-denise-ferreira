import { TamanhosComponente } from '@data/enums';
import imagens from '@resources/imagens';
import { ContainerAvatar } from './Avatar.styled';

interface Props {
  src?: string;
  alt?: string;
  tamanho: TamanhosComponente;
}

export function Avatar({ src, alt, tamanho }: Props) {
  console.log(tamanho);
  return (
    <ContainerAvatar
      src={src ? src : imagens.placeholder.src}
      alt={alt ? alt : imagens.placeholder.alt}
      width={tamanho}
      height={tamanho}
    />
  );
}
