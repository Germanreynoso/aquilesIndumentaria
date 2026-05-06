"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CinematicBanner() {
  return (
    <section className="relative py-32 sm:py-48 overflow-hidden">
      {/* Background with dramatic lighting */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Cinematic light beams */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[800px] bg-celeste/5 rotate-12 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[600px] bg-deep-blue/8 -rotate-12 blur-[80px]" />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.3em] text-gold uppercase">Edición Limitada</span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-4 tracking-tight leading-[1.1]">
              <span className="block">LA LEYENDA</span>
              <span className="block text-celeste">NUNCA MUERE</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mt-6 max-w-md text-pretty">
              Celebrando el momento más icónico en la historia del fútbol. 
              La colección del Mundial 1986 - donde Maradona se hizo inmortal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-gold text-background font-semibold tracking-wide rounded-sm hover:bg-gold/90 transition-colors"
              >
                COMPRAR RETRO
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-foreground">1986</div>
                <div className="text-xs tracking-[0.2em] text-muted-foreground mt-1">MUNDIAL</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-celeste">10</div>
                <div className="text-xs tracking-[0.2em] text-muted-foreground mt-1">CAMISETA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">∞</div>
                <div className="text-xs tracking-[0.2em] text-muted-foreground mt-1">LEYENDA</div>
              </div>
            </div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Dramatic glow */}
            <div className="absolute w-80 h-80 bg-gold/10 rounded-full blur-[80px]" />
            
            {/* Number 10 display */}
            <div className="relative">
              <motion.div
                animate={{ rotateY: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-[22rem] lg:h-[30rem]"
              >
                {/* Jersey silhouette */}
                <div className="absolute inset-0 bg-gradient-to-b from-celeste/30 to-deep-blue/40 rounded-sm border border-celeste/20">
                  {/* Stripes */}
                  <div className="absolute inset-0 flex">
                    <div className="flex-1 bg-celeste/30" />
                    <div className="flex-1 bg-foreground/10" />
                    <div className="flex-1 bg-celeste/30" />
                    <div className="flex-1 bg-foreground/10" />
                    <div className="flex-1 bg-celeste/30" />
                  </div>
                  
                  {/* Large 10 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[12rem] font-bold text-foreground/80 drop-shadow-2xl">
                      10
                    </span>
                  </div>
                </div>

                {/* Floating particles */}
                <motion.div
                  animate={{ y: [-20, 20, -20] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-8 -right-8 w-16 h-16 bg-gold/20 rounded-full blur-xl"
                />
                <motion.div
                  animate={{ y: [20, -20, 20] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-8 -left-8 w-20 h-20 bg-celeste/20 rounded-full blur-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
