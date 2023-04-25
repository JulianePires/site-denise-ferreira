import {Container} from '@/components/Container'
import {ContainerConteudo} from '@/components/ContainerConteudo'
import {Input} from '@/components/Input'
import {StatusRequisicao} from '@/data/enums'
import {Asset, FormularioContatoTipo} from '@/data/tipos'
import {
  maxCaracteresMensagem,
  maxCaracteresTexto,
  minCaracteresMensagem,
  minCaracteresTexto,
} from '@/infrastructure/constantes'
import errosValidacao from '@/infrastructure/erros/validacao'
import {abreUrlExternaEmNovaAba} from '@/infrastructure/funcoes'
import {buscaAsset} from '@/infrastructure/requisicoes/asset'
import { enviarEmail } from '@/infrastructure/requisicoes/enviarEmail'
import {LayoutPaginasSite} from '@/layouts/LayoutPaginasSite'
import conteudoTexto from '@/resources/conteudoTexto'
import cores from '@/resources/cores'
import imagens from '@/resources/imagens'
import margens from '@/resources/margens'
import * as S from '@/styles/Contato.styled'
import {useFormik} from 'formik'
import {GetStaticProps, InferGetStaticPropsType} from 'next'
import {isEmpty} from 'ramda'
import {FormEvent} from 'react'
import * as Yup from 'yup'

//TODO: Configurar envio de email com sendgrid

export default function Contato({
  imagensContato,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [texturaVinho] = imagensContato
  const {textoContato, botaoContato} = conteudoTexto

  const formik = useFormik<FormularioContatoTipo>({
    initialValues: {
      nome: '',
      email: '',
      cidade: '',
      organizacao: '',
      conteudoMensagem: '',
    },
    validationSchema: Yup.object().shape({
      nome: Yup.string()
        .min(minCaracteresTexto, errosValidacao.nome.minCaracteres)
        .max(maxCaracteresTexto, errosValidacao.nome.maxCaracteres)
        .required(errosValidacao.campoObrigatorio),
      email: Yup.string()
        .email(errosValidacao.email.formato)
        .required(errosValidacao.campoObrigatorio),
      cidade: Yup.string()
        .min(minCaracteresTexto, errosValidacao.cidade.minCaracteres)
        .max(maxCaracteresTexto, errosValidacao.cidade.maxCaracteres)
        .required(errosValidacao.campoObrigatorio),
      organizacao: Yup.string()
        .min(minCaracteresTexto, errosValidacao.organizacao.minCaracteres)
        .max(maxCaracteresTexto, errosValidacao.organizacao.maxCaracteres),
      conteudoMensagem: Yup.string()
        .min(
          minCaracteresMensagem,
          errosValidacao.conteudoMensagem.minCaracteres,
        )
        .max(
          maxCaracteresMensagem,
          errosValidacao.conteudoMensagem.maxCaracteres,
        )
        .required(errosValidacao.campoObrigatorio),
    }),
    validateOnChange: true,
    onSubmit: async (dados) => {
      const resposta = await enviarEmail(dados);
      console.log(resposta.data);
    },
  })

  const acionaEnvioDeEmail = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    formik.handleSubmit(evento)
  }

  return (
    <LayoutPaginasSite titulo="Contato">
      <ContainerConteudo corBackground={cores.terra}>
        <Container padding={`${margens.xxxlarge}px ${margens.xxxlarge}px`}>
          <S.TituloContato>{textoContato.titulo}</S.TituloContato>

          <S.TextoDescricaoContato>
            {textoContato.descricao.texto1}
          </S.TextoDescricaoContato>

          <S.TextoDescricaoContato>
            {textoContato.descricao.texto2}
          </S.TextoDescricaoContato>

          <S.TextoDescricaoContato>
            {textoContato.descricao.texto3}
          </S.TextoDescricaoContato>
        </Container>

        <Container imagemFundo={texturaVinho.url}>
          <S.FormularioContato onSubmit={acionaEnvioDeEmail}>
            <Input
              id={textoContato.textoFormulario.nome.nomeCampo}
              nomeCampo={textoContato.textoFormulario.nome.nomeCampo}
              label={textoContato.textoFormulario.nome.label}
              placeholder={textoContato.textoFormulario.nome.placeholder}
              tipo="text"
              erro={formik.errors.nome}
              valor={formik.values.nome}
              aoAlterar={formik.handleChange}
            />

            <Input
              id={textoContato.textoFormulario.email.nomeCampo}
              nomeCampo={textoContato.textoFormulario.email.nomeCampo}
              label={textoContato.textoFormulario.email.label}
              placeholder={textoContato.textoFormulario.email.placeholder}
              tipo="email"
              erro={formik.errors.email}
              valor={formik.values.email}
              aoAlterar={formik.handleChange}
            />

            <Input
              id={textoContato.textoFormulario.cidade.nomeCampo}
              nomeCampo={textoContato.textoFormulario.cidade.nomeCampo}
              label={textoContato.textoFormulario.cidade.label}
              placeholder={textoContato.textoFormulario.cidade.placeholder}
              tipo="text"
              erro={formik.errors.cidade}
              valor={formik.values.cidade}
              aoAlterar={formik.handleChange}
            />

            <Input
              id={textoContato.textoFormulario.organizacao.nomeCampo}
              nomeCampo={textoContato.textoFormulario.organizacao.nomeCampo}
              label={textoContato.textoFormulario.organizacao.label}
              placeholder={textoContato.textoFormulario.organizacao.placeholder}
              tipo="text"
              erro={formik.errors.organizacao}
              valor={formik.values.organizacao!}
              aoAlterar={formik.handleChange}
            />

            <Input
              id={textoContato.textoFormulario.conteudoMensagem.nomeCampo}
              nomeCampo={
                textoContato.textoFormulario.conteudoMensagem.nomeCampo
              }
              label={textoContato.textoFormulario.conteudoMensagem.label}
              placeholder={
                textoContato.textoFormulario.conteudoMensagem.placeholder
              }
              tipo="text"
              textArea={true}
              erro={formik.errors.conteudoMensagem}
              valor={formik.values.conteudoMensagem}
              aoAlterar={formik.handleChange}
            />

            <S.BotaoEnviarMensagemContato
              tipo="submit"
              desabilitaTema
              corFundoAlternativa={cores.branco}
              corFonteAlternativa={cores.terra}
              aoClicar={formik.handleSubmit}
              ariaLabel={botaoContato.ariaLabel}
              desabilitado={!isEmpty(formik.errors)}>
              {botaoContato.texto}
            </S.BotaoEnviarMensagemContato>
          </S.FormularioContato>
        </Container>
      </ContainerConteudo>
    </LayoutPaginasSite>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const {idTexturaVinho} = imagens

  const reqTexturaVinho = await buscaAsset(idTexturaVinho)

  let texturaVinho = {}

  if (reqTexturaVinho.status === StatusRequisicao.SUCESSO) {
    texturaVinho = reqTexturaVinho.dados.asset as Asset
  }

  return {
    props: {
      imagensContato: [texturaVinho],
    },
  }
}
