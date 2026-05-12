import { NextResponse } from "next/server"

const SYSTEM_PROMPT = `
Eres el asistente virtual de Aquiles Indumentaria, una tienda de camisetas de fútbol en Tucumán, Argentina.
Tus respuestas deben ser muy cortas, directas y amigables (máximo 2-3 oraciones).

Información de la tienda:
- Productos: Camisetas de la Selección Argentina, equipos locales (Atlético Tucumán, San Martín, etc.) y modelos retro premium.
- Ubicación: San Miguel de Tucumán. Somos tienda 100% online (sin local físico).
- Envíos: Cadetería en Tucumán (24-48hs hábiles) o punto de encuentro gratuito en el centro.
- Pagos: Transferencia bancaria o efectivo al recibir.
- Cambios: Tienes 10 días para cambios de talle. La prenda debe estar sin uso y con etiqueta original.
- Contacto: WhatsApp (+54 9 381 646-4923) e Instagram (@aquiles.indumentaria).

Fútbol:
- Eres un experto en fútbol mundial y local. Puedes responder dudas sobre jugadores, equipos, historia y actualidad.
- Mantén siempre un tono apasionado por el deporte pero profesional.

Regla de oro:
- Si no sabes algo específico de un pedido o stock actual, sugiere contactar por WhatsApp.
- Sé extremadamente conciso.
`

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content || "Lo siento, hubo un error al procesar tu mensaje."

    return NextResponse.json({ response: content })
  } catch (error) {
    console.error("Chat Error:", error)
    return NextResponse.json({ error: "Error en el servidor" }, { status: 500 })
  }
}
