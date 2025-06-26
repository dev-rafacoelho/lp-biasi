import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, neighborhood, budget, message } = await request.json()

    // Configuração do transporter
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Conteúdo do email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Enviando para você mesmo
      subject: `Novo contato do site - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3B82F6; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">
            Novo contato do site Biasi Negócios Imobiliários
          </h2>
          
          <div style="background-color: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Dados do Cliente:</h3>
            
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${phone}</p>
            <p><strong>Loteamento/Bairro de Interesse:</strong> ${neighborhood || 'Não informado'}</p>
            <p><strong>Orçamento:</strong> ${budget || 'Não informado'}</p>
          </div>
          
          ${message ? `
            <div style="background-color: #EBF8FF; padding: 20px; border-radius: 8px; border-left: 4px solid #3B82F6;">
              <h3 style="color: #374151; margin-top: 0;">Mensagem:</h3>
              <p style="color: #4B5563; line-height: 1.6;">${message}</p>
            </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #D1D5DB; color: #6B7280; font-size: 14px;">
            <p>Este email foi enviado automaticamente através do formulário de contato do site.</p>
            <p><strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}</p>
          </div>
        </div>
      `,
    }

    // Enviar o email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ 
      success: true, 
      message: 'Email enviado com sucesso!' 
    })

  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return NextResponse.json(
      { success: false, message: 'Erro ao enviar email' },
      { status: 500 }
    )
  }
} 