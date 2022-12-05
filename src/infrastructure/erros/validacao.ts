const errosValidacao = {
  campoObrigatorio: 'Por favor, preencha este campo',
  nome: {
    minCaracteres: 'Nome muito curto',
    maxCaracteres: 'Nome muito longo',
  },
  email: {
    formato: 'Por favor, digite um e-mail válido',
  },
  telefone: {
    formato: 'Por favor, digite um telefone válido',
  },
  cidade: {
    minCaracteres: 'Nome de cidade muito curto',
    maxCaracteres: 'Nome de cidade muito longo',
  },
  organizacao: {
    minCaracteres: 'Nome de organização muito curto',
    maxCaracteres: 'Nome de organização muito longo',
  },
  conteudoMensagem: {
    minCaracteres: 'Mensagem muito curta',
    maxCaracteres: 'Máximo de caracteres atingido',
  },
}

export default errosValidacao
