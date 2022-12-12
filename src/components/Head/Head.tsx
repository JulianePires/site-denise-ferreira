import NextHead from 'next/head'

interface Props {
  titulo: string
}

export function Head({titulo}: Props) {
  return (
    <NextHead>
      {/* <!-- HTML Meta Tags --> */}
      <title>{`Site Denise Ferreira | ${titulo}`}</title>
      <meta
        name="description"
        content="Conheça Denise Ferreira, jurista, escritora, palestrante, especialista em direito da criança e do adolescente, com foco em adoção e relações raciais."
      />
      <link rel="icon" href="/favicon.ico" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta
        property="og:url"
        content="https://site-denise-ferreira.vercel.app"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Página Inicial" />
      <meta
        property="og:description"
        content={`Site Denise Ferreira | ${titulo}`}
      />
      <meta
        property="og:image"
        content="https://site-denise-ferreira.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FVCzAmjH6RAyHAiB0YEED&w=3840&q=75"
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:domain"
        content="site-denise-ferreira.vercel.app"
      />
      <meta
        property="twitter:url"
        content="https://site-denise-ferreira.vercel.app"
      />
      <meta name="twitter:title" content="Página Inicial" />
      <meta
        name="twitter:description"
        content="Conheça Denise Ferreira, jurista, escritora, palestrante, especialista em direito da criança e do adolescente, com foco em adoção e relações raciais."
      />
      <meta
        name="twitter:image"
        content="https://site-denise-ferreira.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FVCzAmjH6RAyHAiB0YEED&w=3840&q=75"></meta>
    </NextHead>
  )
}
