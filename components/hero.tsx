"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-graphite" />
      
      {/* Cinematic light effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-celeste/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-deep-blue/10 rounded-full blur-[100px]" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-celeste rounded-full animate-pulse" />
              <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Nueva Colección 2026
              </span>
            </motion.div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] text-balance">
              <span className="block">DONDE</span>
              <span className="block text-celeste">LA PASIÓN</span>
              <span className="block">ENCUENTRA EL ESTILO</span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty"
            >
              Camisetas de fútbol premium que celebran la cultura del fútbol argentino. 
              Desde La Bombonera hasta el escenario mundial.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-semibold tracking-wide rounded-sm hover:bg-foreground/90 transition-colors"
              >
                COMPRAR AHORA
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-3 px-8 py-4 border border-border text-foreground font-semibold tracking-wide rounded-sm hover:bg-secondary/50 transition-colors"
              >
                <Play className="w-4 h-4" />
                VER VIDEO
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-8 sm:gap-12"
            >
              {[
                { value: "50K+", label: "FANS" },
                { value: "200+", label: "CAMISETAS" },
                { value: "4.9", label: "VALORACIÓN" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - Featured Jersey */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            {/* Glow effect behind jersey */}
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-celeste/10 rounded-full blur-[80px]" />
            
            {/* Jersey display */}
            <div className="relative">
              {/* Jersey placeholder - cinematic display */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem] bg-gradient-to-b from-celeste/20 to-deep-blue/30 rounded-sm flex items-center justify-center border border-celeste/20"
              >
                {/* Argentina flag stripes */}
                <div className="absolute inset-0 overflow-hidden rounded-sm">
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-celeste/30" />
                  <div className="absolute top-1/3 left-0 right-0 h-1/3 bg-foreground/10" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-celeste/30" />
                </div>
                
                {/* Sun of May */}
                <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gold/80 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold flex items-center justify-center text-background font-bold text-2xl sm:text-3xl">
                    ☀
                  </div>
                </div>

                {/* Number */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-6xl sm:text-7xl font-bold text-foreground/80">
                  10
                </div>
              </motion.div>

              {/* Product info overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-[-4rem] bg-card/90 backdrop-blur-sm border border-border p-4 rounded-sm"
              >
                <div className="text-xs tracking-[0.15em] text-muted-foreground">ARGENTINA 2026</div>
                <div className="text-lg font-bold text-foreground mt-1">EQUIPACIÓN LOCAL</div>
                <div className="text-celeste font-bold mt-2">$149</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground">DESLIZAR</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
