import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Aquiles Indumentaria <onboarding@resend.dev>', // Resend uses onboarding@resend.dev for testing domains, or your custom domain if verified
      to: [email],
      subject: '¡Bienvenido a la familia Aquiles!',
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0a0a; color: #ffffff; padding: 0; text-align: center; border-radius: 12px; overflow: hidden; border: 1px solid #1f2937; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
          
          <!-- Header Banner -->
          <div style="background-color: #72bcdc; padding: 40px 20px; background-image: linear-gradient(135deg, #72bcdc 0%, #1e3a8a 100%);">
            <h1 style="color: #ffffff; font-size: 32px; font-weight: 900; text-transform: uppercase; letter-spacing: 4px; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">AQUILES</h1>
            <span style="display: block; color: #e0f2fe; font-size: 12px; letter-spacing: 6px; font-weight: 700; margin-top: 5px;">INDUMENTARIA</span>
          </div>

          <!-- Content Body -->
          <div style="padding: 50px 30px;">
            <h2 style="font-size: 26px; font-weight: 800; margin: 0 0 25px 0; color: #ffffff; text-transform: uppercase;">¡Bienvenido a la Familia!</h2>
            
            <p style="font-size: 16px; color: #9ca3af; line-height: 1.8; margin-bottom: 25px;">
              Es un honor tenerte en nuestro equipo. Desde hoy, sos un jugador VIP en nuestra comunidad. Serás el primero en conocer nuestros <strong>nuevos lanzamientos</strong>, acceder a <strong>ofertas exclusivas</strong> y conseguir esas ediciones limitadas antes que nadie.
            </p>

            <div style="margin: 35px 0; padding: 25px; background-color: #111827; border-radius: 8px; border-left: 4px solid #72bcdc;">
              <p style="font-size: 20px; font-style: italic; font-weight: 700; color: #ffffff; margin: 0;">
                "La camiseta se transpira,<br>los colores se defienden."
              </p>
            </div>

            <div style="margin: 40px 0;">
              <a href="https://aquiles-indumentaria.vercel.app" style="background-color: #ffffff; color: #000000; text-decoration: none; padding: 16px 36px; font-weight: 800; border-radius: 50px; display: inline-block; font-size: 15px; letter-spacing: 2px; text-transform: uppercase;">IR A LA TIENDA</a>
            </div>
          </div>

          <!-- Social Media Footer -->
          <div style="background-color: #050505; padding: 40px 30px; border-top: 1px solid #1f2937;">
            <p style="font-size: 14px; color: #72bcdc; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 20px;">Seguinos en nuestras redes</p>
            
            <!-- Social Icons (Using standard emojis for maximum email client compatibility) -->
            <div style="margin-bottom: 25px;">
              <a href="https://instagram.com/aquilesindumentaria" style="display: inline-block; margin: 0 10px; text-decoration: none; font-size: 28px;">📸</a>
              <a href="https://facebook.com/aquilesindumentaria" style="display: inline-block; margin: 0 10px; text-decoration: none; font-size: 28px;">📘</a>
              <a href="https://tiktok.com/@aquilesindumentaria" style="display: inline-block; margin: 0 10px; text-decoration: none; font-size: 28px;">🎵</a>
              <a href="https://wa.me/5493816464923" style="display: inline-block; margin: 0 10px; text-decoration: none; font-size: 28px;">💬</a>
            </div>
            
            <p style="font-size: 14px; color: #e5e7eb; margin-bottom: 5px;"><strong>Instagram:</strong> @aquilesindumentaria</p>
            <p style="font-size: 14px; color: #e5e7eb; margin-top: 0;"><strong>WhatsApp:</strong> +54 9 3816 464923</p>
            
            <p style="font-size: 12px; color: #4b5563; margin-top: 30px; line-height: 1.5;">
              Estás recibiendo este correo porque te suscribiste en la tienda online.<br>
              Aquiles Indumentaria | San Miguel de Tucumán, Argentina.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
