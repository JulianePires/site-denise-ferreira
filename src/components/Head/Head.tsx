import NextHead from 'next/head';

interface Props {
  titulo: string;
}

export function Head({ titulo }: Props) {
  return (
    <NextHead>
      <title>{titulo}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}