import {smtpConfigurations} from '@/infrastructure/constantes'
import type {NextApiRequest, NextApiResponse} from 'next'
import nodemailer from 'nodemailer'

interface CorpoRequisicao {
  nome: string
  email: string
  cidade: string
  organizacao?: string
  conteudoMensagem: string
}

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {nome, email, cidade, organizacao, conteudoMensagem} =
    req.body as CorpoRequisicao

  const mensagem = {
    from: `${nome} <${email}>`,
    to: `Denise Ferreira <${smtpConfigurations.CONTACT}>`,
    subject: `Contato de ${nome} do Site Denise Ferreira`,
    text: conteudoMensagem,
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Template E-mail de Contato Denise Ferreira</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <style>
          * {
            margin: 0;
            padding: 0;
          }
    
          body {
            background: #ffd65c;
            font-family: 'Barlow', sans-serif;
            height: 100vh;
          }
    
          header {
            height: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #7c2b17;
            color: #fff;
            padding: 2rem 4rem;
          }
    
          h1 {
            font-weight: 300;
          }
    
          main {
            display: flex;
            flex-direction: column;
            padding: 2rem 4rem;
          }
    
          section {
            display: flex;
            flex-direction: column;
            height: fit-content;
          }
    
          h2 {
            color: #7C2B17;
          }
    
          p{
            margin: 1rem 0;
            color: #7C2B17;
            font-size: 18px;
          }
    
          h3 {
            color: #C15525;
          }
    
          h4 {
            color: #27818B;
          }
    
        </style>
      </head>
      <body>
        <header>
          <img
            src="https://www.deniseferreira.com.br/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FMY9iUk6QQicoPXvNgzuJ&w=96&q=75"
            alt="logotipo"
          />
          <h1>Contato Site Denise Ferreira</h1>
        </header>
        <main>
            <section>
                <h2>Mensagem:</h2>
                <p>${conteudoMensagem.replaceAll('.', '. <br>')}</p>
            </section>
    
            <section>
                <h3>${nome}</h3>
                <h4>${email}</h4>
                <h4>${cidade}</h4>
                <h4>${organizacao}</h4>
            </section>
        </main>
      </body>
    </html>
    `,
  }

  const transporter = nodemailer.createTransport({
    host: smtpConfigurations.HOST,
    port: Number(smtpConfigurations.PORT),
    secure: false,
    auth: {
      user: smtpConfigurations.USER,
      pass: smtpConfigurations.PASS,
    },
  })

  transporter.sendMail(mensagem, (err) => {
    if (err) {
      res.status(500).json({message: 'Ocorreu um erro ao enviar o e-mail'})
    } else {
      res.status(200).json({message: 'E-mail enviado com sucesso!'})
    }
  })
}

export default Handler
