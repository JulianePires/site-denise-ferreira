import {ChaveValor} from '../../data/tipos'

export const minCaracteresTexto = 3
export const maxCaracteresTexto = 50
export const minCaracteresMensagem = 50
export const maxCaracteresMensagem = 200

export const smtpConfigurations: ChaveValor<string> = {
  HOST: process.env.NEXT_SMTP_HOST || 'localhost',
  PORT: process.env.NEXT_SMTP_PORT || '587',
  USER: process.env.NEXT_SMTP_HOST_USER ||  'root',
  PASS: process.env.NEXT_SMTP_HOST_PASSWORD || 'root',
  CONTACT: process.env.NEXT_CONTACT_EMAIL_ADDRESS  || '',
}
