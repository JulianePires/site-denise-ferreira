import {Container} from '@components/Container'
import {ContainerConteudo} from '@components/ContainerConteudo'
import {Input} from '@components/Input'
import {StatusRequisicao} from '@data/enums'
import {Asset, FormularioContatoTipo} from '@data/tipos'
import {
  maxCaracteresMensagem,
  maxCaracteresTexto,
  minCaracteresMensagem,
  minCaracteresTexto,
} from '@infrastructure/constantes'
import errosValidacao from '@infrastructure/erros/validacao'
import {buscaAsset} from '@infrastructure/requisicoes/asset'
import {LayoutPaginasSite} from '@layouts/LayoutPaginasSite'
import conteudoTexto from '@resources/conteudoTexto'
import cores from '@resources/cores'
import imagens from '@resources/imagens'
import margens from '@resources/margens'
import * as S from '@styles/Contato.styled'
import {useFormik} from 'formik'
import {isEmpty} from 'ramda'
import * as Yup from 'yup'

interface Props {
  imagensContato: Asset[]
}

export default function Contato({imagensContato}: Props) {
  const [texturaTerra] = imagensContato
  const {textoContato} = conteudoTexto

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
    onSubmit: (values) => {
      console.log(values)
    },
  })

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

        <Container imagemFundo={texturaTerra.url}>
          <S.FormularioContato>
            <Input
              id="nome"
              nomeCampo="nome"
              label="Nome"
              tipo="text"
              possuiErro={!isEmpty(formik.errors.nome)}
              erro={formik.errors.nome}
              valor={formik.values.nome}
              aoAlterar={formik.handleChange}
            />

            <Input
              id="email"
              nomeCampo="email"
              label="E-mail"
              tipo="email"
              possuiErro={!isEmpty(formik.errors.email)}
              erro={formik.errors.email}
              valor={formik.values.email}
              aoAlterar={formik.handleChange}
            />

            <Input
              id="cidade"
              nomeCampo="cidade"
              label="Cidade"
              tipo="text"
              possuiErro={!isEmpty(formik.errors.cidade)}
              erro={formik.errors.cidade}
              valor={formik.values.cidade}
              aoAlterar={formik.handleChange}
            />

            <Input
              id="organizacao"
              nomeCampo="organizacao"
              label="Organizacao"
              tipo="text"
              possuiErro={!isEmpty(formik.errors.organizacao)}
              erro={formik.errors.organizacao}
              valor={formik.values.organizacao}
              aoAlterar={formik.handleChange}
            />

            <Input
              id="conteudoMensagem"
              nomeCampo="conteudoMensagem"
              label="Mensagem"
              tipo="text"
              possuiErro={!isEmpty(formik.errors.conteudoMensagem)}
              erro={formik.errors.conteudoMensagem}
              valor={formik.values.conteudoMensagem}
              aoAlterar={formik.handleChange}
            />

            <S.BotaoEnviarMensagemContato
              tamanho="M"
              tema="terra"
              estilo="outline"
              tipo="submit"
              aoClicar={formik.handleSubmit}>
              Enviar
            </S.BotaoEnviarMensagemContato>
          </S.FormularioContato>
        </Container>
      </ContainerConteudo>
    </LayoutPaginasSite>
  )
}

export async function getServerSideProps() {
  const {idTexturaTerra} = imagens

  const reqTexturaTerra = await buscaAsset(idTexturaTerra)

  let texturaTerra = {}

  if (reqTexturaTerra.status === StatusRequisicao.SUCESSO) {
    texturaTerra = reqTexturaTerra.dados.asset as Asset
  }

  return {
    props: {
      imagensContato: [texturaTerra],
    },
  }
}
