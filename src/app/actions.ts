'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
    name: string;
    email: string;
    message: string;
    honeypot?: string;
}

interface ActionResponse {
    success: boolean;
    message: string;
}

export async function sendContactEmail(
    prevState: ActionResponse | null,
    formData: FormData
): Promise<ActionResponse> {
    try {
        // Extract form data
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;
        const honeypot = formData.get('website') as string; // honeypot field

        // Honeypot check - if filled, it's a bot
        if (honeypot) {
            console.log('Bot detected via honeypot');
            return {
                success: false,
                message: 'Submission rejected',
            };
        }

        // Validation
        if (!name || !email || !message) {
            return {
                success: false,
                message: 'Por favor, completa todos los campos',
            };
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                success: false,
                message: 'Por favor, introduce un email válido',
            };
        }

        // Sanitize inputs (basic XSS prevention)
        const sanitizedName = name.trim().slice(0, 100);
        const sanitizedEmail = email.trim().toLowerCase().slice(0, 100);
        const sanitizedMessage = message.trim().slice(0, 1000);

        // Length validation
        if (sanitizedName.length < 2) {
            return {
                success: false,
                message: 'El nombre debe tener al menos 2 caracteres',
            };
        }

        if (sanitizedMessage.length < 10) {
            return {
                success: false,
                message: 'El mensaje debe tener al menos 10 caracteres',
            };
        }

        // Send email via Resend
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Use verified domain or resend default
            to: process.env.CONTACT_EMAIL || 'kilamper.dev@outlook.es',
            replyTo: sanitizedEmail,
            subject: `Nuevo mensaje de ${sanitizedName}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nuevo mensaje desde tu portfolio</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nombre:</strong> ${sanitizedName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${sanitizedEmail}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h3 style="color: #555; margin-top: 0;">Mensaje:</h3>
            <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${sanitizedMessage}</p>
          </div>
          <p style="color: #888; font-size: 12px; margin-top: 20px;">
            Este mensaje fue enviado desde el formulario de contacto de tu portfolio.
          </p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return {
                success: false,
                message: 'Error al enviar el mensaje. Por favor, intenta de nuevo.',
            };
        }

        console.log('Email sent successfully:', data);

        return {
            success: true,
            message: '¡Mensaje enviado con éxito! Te responderé pronto.',
        };
    } catch (error) {
        console.error('Server action error:', error);
        return {
            success: false,
            message: 'Error inesperado. Por favor, intenta de nuevo más tarde.',
        };
    }
}
