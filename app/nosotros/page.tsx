"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Trophy, Star, ShieldCheck } from "lucide-react"

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-graphite">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(114,188,220,0.1)_0%,transparent_50%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold tracking-[0.4em] text-celeste uppercase mb-6 block">
              Nuestra Historia
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter uppercase italic mb-8">
              AQUILES <span className="text-celeste">INDUMENTARIA</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Nacidos en el corazón de Tucumán, impulsados por la pasión inquebrantable del fútbol argentino. No vendemos solo camisetas; entregamos la armadura de los hinchas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                MÁS QUE UNA TIENDA, <br/>
                <span className="text-celeste italic">UNA PASIÓN</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Aquiles Indumentaria surgió con un objetivo claro: acercar a los fanáticos tucumanos las camisetas de fútbol de mejor calidad del mercado. Sabemos lo que significa vestir los colores de tu equipo, la emoción de un domingo de partido y la historia que cada prenda representa.
                </p>
                <p>
                  Desde los modelos más recientes de la Selección Argentina y el fútbol local, hasta joyas retro que marcaron épocas doradas. Nos aseguramos de que cada hilo y cada detalle cumplan con los estándares que un verdadero hincha exige.
                </p>
              </div>

              <div className="pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <Trophy className="w-8 h-8 text-gold mb-3" />
                  <h4 className="font-bold text-foreground">Calidad Premium</h4>
                  <p className="text-xs text-muted-foreground mt-1">Materiales de primera línea.</p>
                </div>
                <div>
                  <Star className="w-8 h-8 text-celeste mb-3" />
                  <h4 className="font-bold text-foreground">Atención Local</h4>
                  <p className="text-xs text-muted-foreground mt-1">De Tucumán para los tucumanos.</p>
                </div>
                <div>
                  <ShieldCheck className="w-8 h-8 text-green-500 mb-3" />
                  <h4 className="font-bold text-foreground">Confianza</h4>
                  <p className="text-xs text-muted-foreground mt-1">Garantía en cada compra.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Fallback pattern if image is not available, but we use an existing product image for aesthetic */}
              <div className="absolute inset-0 bg-secondary/20" />
              <Image
                src="/images/products/Camiseta Selección Argentina 2026 Titular Talle S al XXL.jpg"
                alt="Pasión por el Fútbol"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-xl font-bold text-foreground italic">"La camiseta se transpira, los colores se defienden."</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
