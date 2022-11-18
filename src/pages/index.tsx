import { Botao } from "@components/Botao";
import { ContainerConteudo } from "@components/ContainerConteudo";
import { StatusRequisicao } from "@data/enums";
import { Asset } from "@data/tipos";
import { LayoutPaginasSite } from "@layouts/LayoutPaginasSite";
import conteudoTexto from "@resources/conteudoTexto";
import cores from "@resources/cores";
import { buscaAsset } from "@services/requisicoes/asset";
import {
  ContainerBanner,
  LogoBanner,
  TextoDescricaoBanner,
} from "@styles/Home.styled";

interface Props {
  fotoDenise: Asset;
  logoBranca: Asset;
}

export default function Home({ fotoDenise, logoBranca }: Props) {
  return (
    <LayoutPaginasSite titulo="Página Inicial">
      <ContainerConteudo corBackground={cores.laranja}>
        <ContainerBanner>
          <LogoBanner
            src={logoBranca.url}
            alt="Logo Denise Ferreira"
            width={logoBranca.width}
            height={logoBranca.height}
          />
          <TextoDescricaoBanner>
            {conteudoTexto.textoDescricaoBanner}
          </TextoDescricaoBanner>
          <Botao
            aoClicar={() => {}}
            tema="vinho"
            texto="Entre em contato"
            tamanho="M"
            estilo="SOLID"
          />
        </ContainerBanner>
      </ContainerConteudo>
    </LayoutPaginasSite>
  );
}

export async function getStaticProps() {
  const idLogoBranca = "clale22ud1yk809kc82o4r7d7";
  const idFotoDenise = "claldupz61zxu0blvrwyp7se9";

  const reqLogoBranca = await buscaAsset(idLogoBranca);
  const reqFotoDenise = await buscaAsset(idFotoDenise);

  let logoBranca = {};
  let fotoDenise = {};

  if (reqLogoBranca.status === StatusRequisicao.SUCESSO) {
    logoBranca = reqLogoBranca.dados.asset as Asset;
  }

  if (reqLogoBranca.status === StatusRequisicao.SUCESSO) {
    fotoDenise = reqFotoDenise.dados.asset as Asset;
  }

  return {
    props: { logoBranca, fotoDenise },
  };
}
