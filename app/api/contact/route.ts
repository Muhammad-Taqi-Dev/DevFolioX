import { NextRequest, NextResponse } from 'next/server';
import * as brevo from '@getbrevo/brevo';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Initialize Brevo API
    const apiInstance = new brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(
      brevo.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY || ''
    );

    if (!process.env.BREVO_API_KEY) {
      console.error("❌ BREVO_API_KEY is missing");
      return Response.json(
        { error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    // Send email
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.subject = `Portfolio Contact: ${subject}`;
    sendSmtpEmail.htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="max-width: 650px; margin: 40px auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);">
            
            <!-- Header with gradient -->
            <div style="background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px; text-shadow: 0 2px 10px rgba(0,0,0,0.2);">
                ✉️ New Contact Message
              </h1>
              <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.95); font-size: 16px; font-weight: 500;">
                From your Portfolio Website
              </p>
            </div>

            <!-- Content -->
            <div style="padding: 40px 35px;">
              
              <!-- Sender Info Card -->
              <div style="background: linear-gradient(135deg, #f0fdff 0%, #e0f2fe 100%); border-left: 5px solid #06b6d4; border-radius: 12px; padding: 25px; margin-bottom: 30px; box-shadow: 0 4px 15px rgba(6, 182, 212, 0.1);">
                <h2 style="margin: 0 0 20px 0; color: #0e7490; font-size: 20px; font-weight: 700;">
                  👤 Sender Details
                </h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; color: #0e7490; font-weight: 600; font-size: 15px; width: 100px;">Name:</td>
                    <td style="padding: 10px 0; color: #164e63; font-size: 15px; font-weight: 500;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; color: #0e7490; font-weight: 600; font-size: 15px;">Email:</td>
                    <td style="padding: 10px 0;">
                      <a href="mailto:${email}" style="color: #0284c7; text-decoration: none; font-weight: 600; font-size: 15px;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; color: #0e7490; font-weight: 600; font-size: 15px;">Subject:</td>
                    <td style="padding: 10px 0; color: #164e63; font-size: 15px; font-weight: 500;">${subject}</td>
                  </tr>
                </table>
              </div>

              <!-- Message Card -->
              <div style="background: #f8fafc; border-radius: 12px; padding: 25px; margin-bottom: 30px; border: 2px solid #e2e8f0;">
                <h2 style="margin: 0 0 15px 0; color: #334155; font-size: 20px; font-weight: 700; display: flex; align-items: center;">
                  💬 Message Content
                </h2>
                <div style="background: #ffffff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                  <p style="margin: 0; color: #1e293b; font-size: 15px; line-height: 1.8; white-space: pre-wrap; font-weight: 400;">${message}</p>
                </div>
              </div>

              <!-- Action Button -->
              <div style="text-align: center; margin: 35px 0;">
                <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" 
                   style="display: inline-block; background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%); color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 30px; font-weight: 700; font-size: 16px; box-shadow: 0 8px 20px rgba(6, 182, 212, 0.4); transition: all 0.3s;">
                  📧 Reply to ${name}
                </a>
              </div>

            </div>

            <!-- Footer -->
            <div style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 30px; text-align: center; border-top: 4px solid #06b6d4;">
              <p style="margin: 0 0 10px 0; color: rgba(255, 255, 255, 0.8); font-size: 14px; font-weight: 500;">
                This message was sent from your portfolio contact form
              </p>
              <p style="margin: 0; color: rgba(255, 255, 255, 0.6); font-size: 13px;">
                © ${new Date().getFullYear()} Muhammad Taqi - Full Stack Developer
              </p>
              <div style="margin-top: 15px;">
                <a href="https://github.com/Muhammad-Taqi-Dev" style="color: #06b6d4; text-decoration: none; margin: 0 10px; font-size: 13px; font-weight: 600;">GitHub</a>
                <span style="color: rgba(255, 255, 255, 0.4);">•</span>
                <a href="https://linkedin.com/in/taqih1" style="color: #06b6d4; text-decoration: none; margin: 0 10px; font-size: 13px; font-weight: 600;">LinkedIn</a>
              </div>
            </div>

          </div>
        </body>
      </html>
    `;
    // Use your verified email as sender
    sendSmtpEmail.sender = { name: 'Muhammad Taqi Portfolio', email: 'taqihaider591@gmail.com' };
    sendSmtpEmail.to = [{ email: 'taqihaider591@gmail.com', name: 'Muhammad Taqi' }];
    sendSmtpEmail.replyTo = { email: email, name: name };

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    
    console.log('Email sent successfully:', result);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}
