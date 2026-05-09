"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Ruler, Truck, RotateCcw, HelpCircle, Mail, MapPin, Clock, CreditCard, MessageCircle } from "lucide-react"

export default function AyudaPage() {
  const [activeSection, setActiveSection] = useState("tallas")

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (['tallas', 'envios', 'devoluciones', 'preguntas', 'contacto'].includes(hash)) {
        setActiveSection(hash)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const sections = [
    { id: "tallas", name: "Guía de Tallas", icon: Ruler },
    { id: "envios", name: "Envíos y Retiros", icon: Truck },
    { id: "devoluciones", name: "Cambios y Devoluciones", icon: RotateCcw },
    { id: "preguntas", name: "Preguntas Frecuentes", icon: HelpCircle },
    { id: "contacto", name: "Contacto", icon: Mail },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "tallas":
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h2 className="text-3xl font-black text-foreground mb-4 tracking-tight uppercase">Guía de Tallas</h2>
              <p className="text-muted-foreground mb-8">
                Utilizamos medidas estándar de indumentaria deportiva en Argentina. Te recomendamos comparar estas medidas con una camiseta tuya que te quede bien.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-muted-foreground">
                  <thead className="bg-secondary/50 text-xs uppercase text-foreground">
                    <tr>
                      <th className="px-6 py-4 font-black">Talle</th>
                      <th className="px-6 py-4 font-black">Pecho (Axila a Axila)</th>
                      <th className="px-6 py-4 font-black">Largo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-secondary/20 transition-colors">
                      <td className="px-6 py-4 font-bold text-foreground">S</td>
                      <td className="px-6 py-4">48 - 50 cm</td>
                      <td className="px-6 py-4">68 - 70 cm</td>
                    </tr>
                    <tr className="hover:bg-secondary/20 transition-colors">
                      <td className="px-6 py-4 font-bold text-foreground">M</td>
                      <td className="px-6 py-4">51 - 53 cm</td>
                      <td className="px-6 py-4">71 - 73 cm</td>
                    </tr>
                    <tr className="hover:bg-secondary/20 transition-colors">
                      <td className="px-6 py-4 font-bold text-foreground">L</td>
                      <td className="px-6 py-4">54 - 56 cm</td>
                      <td className="px-6 py-4">74 - 76 cm</td>
                    </tr>
                    <tr className="hover:bg-secondary/20 transition-colors">
                      <td className="px-6 py-4 font-bold text-foreground">XL</td>
                      <td className="px-6 py-4">57 - 59 cm</td>
                      <td className="px-6 py-4">77 - 79 cm</td>
                    </tr>
                    <tr className="hover:bg-secondary/20 transition-colors">
                      <td className="px-6 py-4 font-bold text-foreground">XXL</td>
                      <td className="px-6 py-4">60 - 62 cm</td>
                      <td className="px-6 py-4">80 - 82 cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="p-6 bg-celeste/10 border border-celeste/20 rounded-xl mt-8">
              <h4 className="font-bold text-celeste flex items-center gap-2 mb-2">
                <Ruler className="w-4 h-4" /> ¿Cómo medir?
              </h4>
              <ul className="text-sm text-muted-foreground space-y-2 ml-6 list-disc">
                <li><strong>Pecho:</strong> Medí de axila a axila, con la prenda apoyada sobre una superficie plana.</li>
                <li><strong>Largo:</strong> Medí desde el punto más alto del hombro (junto al cuello) hasta el borde inferior de la camiseta.</li>
                <li><em>Las medidas son aproximadas y pueden tener una variación de +/- 1 a 2 cm.</em></li>
              </ul>
            </div>
          </div>
        )
      case "envios":
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h2 className="text-3xl font-black text-foreground mb-4 tracking-tight uppercase">Envíos y Retiros</h2>
              <p className="text-muted-foreground mb-8">
                Operamos de manera local en <strong>San Miguel de Tucumán</strong>. Queremos que tengas tu camiseta lo más rápido posible.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-card border border-border rounded-xl">
                <Truck className="w-8 h-8 text-celeste mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Envío por Cadetería</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Enviamos a domicilio dentro de San Miguel de Tucumán y alrededores mediante cadetería de confianza.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc ml-4">
                  <li>El costo del envío es a cargo del comprador.</li>
                  <li>Se abona al momento de recibir el producto.</li>
                  <li>Demora: 24 a 48 hs hábiles luego de confirmar tu compra.</li>
                </ul>
              </div>
              
              <div className="p-6 bg-card border border-border rounded-xl">
                <MapPin className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Punto de Encuentro</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Si preferís no pagar envío, podemos coordinar la entrega en un punto de encuentro céntrico.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc ml-4">
                  <li>Generalmente en zona Barrio Norte, Barrio Sur o Microcentro.</li>
                  <li>Días y horarios a coordinar por WhatsApp según disponibilidad.</li>
                  <li>Sin cargo adicional.</li>
                </ul>
              </div>
            </div>
          </div>
        )
      case "devoluciones":
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h2 className="text-3xl font-black text-foreground mb-4 tracking-tight uppercase">Cambios y Devoluciones</h2>
              <p className="text-muted-foreground mb-8">
                Nuestra prioridad es que estés conforme con tu compra. Si tuviste algún inconveniente, te ayudamos a resolverlo.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <RotateCcw className="w-5 h-5 text-celeste" /> Cambios por Talle
                </h3>
                <p className="text-sm text-muted-foreground">
                  Realizamos cambios por talle dentro de los <strong>10 días</strong> de haber recibido el producto. La prenda debe estar sin uso, en perfectas condiciones y con sus etiquetas originales. Los costos de envío o cadetería por cambios corren por cuenta del cliente (o se pueden realizar en el punto de encuentro sin cargo). El cambio está sujeto al stock disponible.
                </p>
              </div>

              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-gold" /> Fallas de Fábrica
                </h3>
                <p className="text-sm text-muted-foreground">
                  Revisamos cada prenda antes de enviarla, pero si recibiste un producto con una falla de fabricación comprobable, nos hacemos cargo del 100% de los costos de envío para el cambio. Tenés un plazo de 48 hs desde recibido el producto para notificar la falla.
                </p>
              </div>

              <div className="p-4 bg-muted/50 border-l-4 border-celeste text-sm text-muted-foreground">
                <strong>Importante:</strong> No realizamos devoluciones de dinero por arrepentimiento de compra, únicamente permitimos el cambio por otro artículo del mismo valor (o pagando la diferencia).
              </div>
            </div>
          </div>
        )
      case "preguntas":
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h2 className="text-3xl font-black text-foreground mb-4 tracking-tight uppercase">Preguntas Frecuentes</h2>
              <p className="text-muted-foreground mb-8">
                Resolvemos tus dudas más comunes de forma rápida.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-celeste" /> ¿Qué medios de pago aceptan?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Aceptamos Transferencia Bancaria (alias, CBU, billeteras virtuales) y Efectivo al momento de la entrega en nuestro punto de encuentro o cadetería.
                </p>
              </div>

              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-celeste" /> ¿Cuánto demora en llegar mi pedido?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Si el producto está en stock, lo despachamos mediante cadete dentro de las 24 a 48 hs hábiles. Si coordinamos punto de encuentro en San Miguel de Tucumán, puede ser al día siguiente dependiendo de la disponibilidad de horarios.
                </p>
              </div>

              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-celeste" /> ¿Tienen local al público en Tucumán?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Actualmente operamos como tienda 100% online. No contamos con showroom ni local a la calle. Sin embargo, brindamos excelente atención y coordinación por WhatsApp.
                </p>
              </div>
              
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-celeste" /> ¿Hacen envíos al interior de la provincia?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Nuestra logística está concentrada en San Miguel de Tucumán y alrededores mediante cadetería. Para otras localidades de la provincia, consultanos vía WhatsApp para verificar opciones de transporte o correo.
                </p>
              </div>
            </div>
          </div>
        )
      case "contacto":
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h2 className="text-3xl font-black text-foreground mb-4 tracking-tight uppercase">Contacto</h2>
              <p className="text-muted-foreground mb-8">
                Estamos a tu disposición. Elegí el medio de contacto que te resulte más cómodo.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <a 
                href="https://wa.me/5493816464923" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-8 bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366] rounded-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Atención rápida y personalizada para consultas y pedidos.</p>
                <span className="mt-4 font-bold text-[#25D366]">+54 9 381 646-4923</span>
              </a>

              <a 
                href="https://instagram.com/aquiles.indumentaria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-8 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 border border-pink-500/30 hover:border-pink-500 rounded-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Instagram</h3>
                <p className="text-sm text-muted-foreground">Mandanos un MD (Mensaje Directo) y te respondemos a la brevedad.</p>
                <span className="mt-4 font-bold text-pink-500">@aquiles.indumentaria</span>
              </a>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-16 bg-graphite border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tighter uppercase italic">
            CENTRO DE <span className="text-celeste">AYUDA</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Todo lo que necesitás saber sobre tus compras, envíos y políticas de la tienda.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-64 lg:w-72 flex-shrink-0">
            <div className="sticky top-32 space-y-2">
              <h3 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-6 pl-4">Secciones</h3>
              <nav className="flex flex-col gap-2">
                {sections.map((section) => {
                  const isActive = activeSection === section.id
                  const Icon = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => {
                        window.location.hash = section.id
                      }}
                      className={`flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 text-left ${
                        isActive 
                          ? 'bg-celeste text-background shadow-[0_0_20px_rgba(114,188,220,0.3)]' 
                          : 'bg-transparent text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {section.name}
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 min-w-0">
            {renderContent()}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
