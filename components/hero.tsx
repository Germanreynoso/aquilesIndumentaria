"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function InstagramEmbed() {
  return (
    <div className="w-full flex justify-center items-center bg-white rounded-xl overflow-hidden shadow-2xl">
      <iframe
        src="https://www.instagram.com/reel/DVzcGsDjnBP/embed"
        className="w-[326px] h-[580px] sm:w-[400px] sm:h-[620px] border-0"
        scrolling="no"
        allowTransparency={true}
        allow="encrypted-media"
      />
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-graphite" />

      {/* Cinematic light effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(114,188,220,0.1)_0%,transparent_70%)]" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-deep-blue/20 rounded-full blur-[120px] opacity-50" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-celeste opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-celeste"></span>
              </span>
              <span className="text-[10px] tracking-[0.3em] text-foreground font-bold uppercase">
                COLECCIÓN OFICIAL 2024/25
              </span>
            </motion.div>

            {/* Main headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-[0.9] uppercase italic">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block"
                >EL CORAZÓN</motion.span>
              </span>
              <span className="block text-celeste overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block"
                >DEL VALLE</motion.span>
              </span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
            >
              Indumentaria deportiva de alta gama diseñada para los que viven el fútbol con intensidad.
              Calidad profesional en cada detalle.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(114,188,220,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-3 px-10 py-5 bg-foreground text-background font-black tracking-[0.2em] rounded-xl hover:bg-celeste hover:text-background transition-all duration-300"
              >
                COMPRAR AHORA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <Dialog>
                <DialogTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center justify-center gap-3 px-10 py-5 border-2 border-white/10 text-foreground font-bold tracking-[0.1em] rounded-xl transition-all duration-300"
                  >
                    <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-celeste/20 transition-colors">
                      <Play className="w-4 h-4 fill-current" />
                    </div>
                    VER SPOT
                  </motion.button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-transparent border-none shadow-none p-0 flex justify-center items-center overflow-hidden">
                  <DialogHeader className="sr-only">
                    <DialogTitle>Ver Spot</DialogTitle>
                    <DialogDescription>Spot publicitario de la marca en Instagram</DialogDescription>
                  </DialogHeader>
                  <div className="w-full flex justify-center rounded-xl overflow-hidden max-h-[80vh] overflow-y-auto custom-scrollbar">
                    <InstagramEmbed />
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </motion.div>

          {/* Right content - Featured Jersey */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Jersey display container */}
            <div className="relative group">
              {/* Dynamic shadow/glow */}
              <div className="absolute inset-0 bg-celeste/20 blur-[100px] rounded-full scale-75 group-hover:scale-110 transition-transform duration-1000" />

              {/* Main Image */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-[28rem] lg:h-[35rem] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
              >
                <Image
                  src="images/products/Camiseta Selección Argentina 2026 Titular Talle S al XXL.jpg"
                  alt="Featured Argentina Jersey"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute -bottom-6 -left-6 sm:-left-12 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-celeste rounded-full flex items-center justify-center font-black text-background">
                    10
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] text-celeste font-bold">PREMIUM EDITION</div>
                    <div className="text-lg font-black text-foreground">ARGENTINA 24</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-celeste rounded-full"
            />
          </div>
          <span className="text-[10px] tracking-[0.4em] text-white/40 font-bold uppercase">EXPLORAR</span>
        </div>
      </motion.div>
    </section>
  )
}
