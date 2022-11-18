import { EstilosBotao, TamanhosComponente } from "@data/enums";
import { TemasCores } from "@data/tipos";
import { ContainerBotao } from "./Botao.styled";

interface Props {
  texto: string;
  tamanho: keyof typeof TamanhosComponente;
  estilo: keyof typeof EstilosBotao;
  tema: TemasCores;
  aoClicar: () => void;
}

export function Botao({ texto, tamanho, estilo, tema, aoClicar }: Props) {
  return (
    <ContainerBotao
      tema={tema}
      tamanho={tamanho}
      estilo={estilo}
      onClick={aoClicar}
    >
      {texto}
    </ContainerBotao>
  );
}
