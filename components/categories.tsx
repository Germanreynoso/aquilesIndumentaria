"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    id: "seleccion-argentina",
    name: "SELECCION ARGENTINA",
    subtitle: "Selección Nacional",
    description: "Colección oficial Albiceleste",
    items: "24 Artículos",
    accent: "bg-celeste",
  },
  {
    id: "retro",
    name: "RETRO",
    subtitle: "Clásicos",
    description: "Camisetas vintage icónicas",
    items: "45 Artículos",
    accent: "bg-muted-foreground",
  },
  {
    id: "futbol-argentino",
    name: "FUTBOL ARGENTINO",
    subtitle: "Liga Profesional",
    description: "Equipos del fútbol local",
    items: "60 Artículos",
    accent: "bg-gold",
  },
  {
    id: "urban",
    name: "URBAN",
    subtitle: "Streetwear",
    description: "Indumentaria urbana",
    items: "30 Artículos",
    accent: "bg-deep-blue",
  },
]

export function Categories() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-xs tracking-[0.3em] text-celeste uppercase">Colecciones</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 tracking-tight">
              COMPRAR POR EQUIPO
            </h2>
          </div>
          <a href="#all" className="text-sm tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
            VER TODAS LAS COLECCIONES
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <motion.a
              key={category.id}
              href={`#${category.id}`}
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = category.id;
                setTimeout(() => {
                  document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-card border border-border rounded-sm p-6 hover:border-foreground/30 transition-all duration-300 overflow-hidden"
            >
              {/* Accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${category.accent} opacity-60`} />
              
              {/* Glow on hover */}
              <div className={`absolute inset-0 ${category.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground">{category.subtitle}</span>
                <h3 className="text-lg font-bold text-foreground mt-2 tracking-tight">{category.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{category.description}</p>
                
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">{category.items}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
