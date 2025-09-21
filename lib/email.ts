import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export async function sendContactEmail(data: EmailData) {
  try {
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Nueva Solicitud de Cotización - JV Business Services</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #FDDA0D;
              color: #000;
              padding: 20px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background-color: #f9f9f9;
              padding: 20px;
              border-radius: 0 0 8px 8px;
            }
            .field {
              margin-bottom: 15px;
              padding: 10px;
              background-color: white;
              border-radius: 4px;
              border-left: 4px solid #FDDA0D;
            }
            .field-label {
              font-weight: bold;
              color: #333;
              margin-bottom: 5px;
            }
            .field-value {
              color: #666;
            }
            .footer {
              margin-top: 20px;
              padding-top: 20px;
              border-top: 1px solid #ddd;
              font-size: 12px;
              color: #888;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🔔 Nueva Solicitud de Cotización</h1>
            <p>JV Business Services LLC</p>
          </div>

          <div class="content">
            <p>Se ha recibido una nueva solicitud de cotización a través del sitio web:</p>

            <div class="field">
              <div class="field-label">👤 Nombre Completo:</div>
              <div class="field-value">${data.name}</div>
            </div>

            <div class="field">
              <div class="field-label">📧 Email:</div>
              <div class="field-value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>

            <div class="field">
              <div class="field-label">📱 Teléfono:</div>
              <div class="field-value"><a href="tel:${data.phone}">${data.phone}</a></div>
            </div>

            <div class="field">
              <div class="field-label">🛠️ Tipo de Servicio:</div>
              <div class="field-value">${getServiceName(data.service)}</div>
            </div>

            <div class="field">
              <div class="field-label">💬 Mensaje:</div>
              <div class="field-value">${data.message || 'Sin mensaje adicional'}</div>
            </div>
          </div>

          <div class="footer">
            <p>Este email fue enviado automáticamente desde el formulario de contacto de jvbusinessservices.com</p>
            <p>Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'America/New_York' })}</p>
          </div>
        </body>
      </html>
    `;

    const result = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'noreply@jvbusinessservices.com',
      to: process.env.EMAIL_TO || 'info@jvbusinessservices.com',
      subject: `Nueva Solicitud de Cotización - ${data.name}`,
      html: emailHtml,
      replyTo: data.email,
    });

    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

function getServiceName(serviceValue: string): string {
  const serviceMap: Record<string, string> = {
    'production-staffing': 'Personal de Producción',
    'commercial-cleaning': 'Limpieza Comercial',
    'event-staffing': 'Staffing para Eventos',
    'disinfection': 'Desinfección Especializada',
    'hotel-cleaning': 'Limpieza Hotelera',
    'residential-cleaning': 'Limpieza Residencial',
    'industrial-cleaning': 'Limpieza Industrial',
    'other': 'Otro'
  };

  return serviceMap[serviceValue] || serviceValue;
}