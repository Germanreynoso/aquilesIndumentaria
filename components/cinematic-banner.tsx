"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function CinematicBanner() {
  return (
    <section className="relative py-32 sm:py-48 overflow-hidden bg-background">
      {/* Background with dramatic lighting */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(114,188,220,0.05)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_50%,rgba(212,175,55,0.05)_0%,transparent_50%)]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              <span className="text-[10px] tracking-[0.3em] text-gold font-bold uppercase">Edición de Coleccionista</span>
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mt-4 tracking-tighter leading-[0.9] uppercase italic">
              <span className="block">LA LEYENDA</span>
              <span className="block text-celeste">INMORTAL</span>
            </h2>

            <p className="text-xl text-muted-foreground mt-8 max-w-md leading-relaxed font-medium">
              Mística Maradona 1990: La Armadura del Diez. Llevá con vos un pedazo de historia del Mundial más emocionante. Ideal para fanáticos y coleccionistas.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-12">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#EAB308" }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-3 px-10 py-5 bg-gold text-background font-black tracking-[0.2em] rounded-xl transition-all duration-300"
              >
                COMPRAR RETRO
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-12 mt-16 pt-10 border-t border-white/5">
              <div>
                <div className="text-4xl font-black text-foreground tracking-tighter">1990</div>
                <div className="text-[10px] tracking-[0.3em] text-muted-foreground mt-1 font-bold uppercase">MUNDIAL</div>
              </div>
              <div>
                <div className="text-4xl font-black text-celeste tracking-tighter">10</div>
                <div className="text-[10px] tracking-[0.3em] text-muted-foreground mt-1 font-bold uppercase">EL D10S</div>
              </div>
              <div>
                <div className="text-4xl font-black text-foreground tracking-tighter">∞</div>
                <div className="text-[10px] tracking-[0.3em] text-muted-foreground mt-1 font-bold uppercase">GLORIA</div>
              </div>
            </div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Cinematic light beams */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,rgba(114,188,220,0.15)_0%,transparent_70%)] pointer-events-none" />

            {/* Jersey display */}
            <div className="relative group">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateZ: [-1, 1, -1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/10"
              >
                <Image
                  src="/images/products/Camiseta Retro Maradona Talle S al XXL.jpg"
                  alt="Retro Argentina 1986 Jersey"
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />

                {/* Glossy reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                {/* Bottom shading */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </motion.div>

              {/* Floating detail tag */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-10 right-0 sm:-right-10 bg-card/80 backdrop-blur-2xl border border-white/10 p-6 rounded-2xl shadow-2xl max-w-[200px]"
              >
                <div className="text-xs font-bold text-gold tracking-widest uppercase mb-2">AUTENTICIDAD</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Réplica exacta con tejidos de época y detalles bordados a mano.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
