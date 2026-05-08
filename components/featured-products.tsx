"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, ShoppingBag, Star } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Camiseta AFA Entrenamiento",
    team: "SELECCION ARGENTINA",
    sizes: "S al XXL",
    badge: "MÁS VENDIDO",
    image: "/images/products/Camiseta AFA entrenamiento Talles S al XXL.jpeg",
  },
  {
    id: 2,
    name: "Camiseta Argentina 2026 Titular",
    team: "SELECCION ARGENTINA",
    sizes: "S al XXL",
    badge: "NUEVO",
    image: "/images/products/Camiseta Selección Argentina 2026 Titular Talle S al XXL.jpg",
  },
  {
    id: 3,
    name: "Camiseta del Dibu",
    team: "SELECCION ARGENTINA",
    sizes: "6 al 16 | S al XXL",
    badge: null,
    image: "/images/products/Camiseta del Dibu. Para Adulto y para niño Del 6 al 16 Y del S al XXL.jpg",
  },
  {
    id: 4,
    name: "Camiseta Argentina 2026 Infantil",
    team: "SELECCION ARGENTINA",
    sizes: "6 al 16",
    badge: null,
    image: "/images/products/Camiseta Argentina 2026 Infantil  Talles 6 al 16.jpg",
  },
  {
    id: 5,
    name: "Pupera Selección Argentina",
    team: "SELECCION ARGENTINA",
    sizes: "S al XXL",
    badge: null,
    image: "/images/products/Pupera de la Selección Argentina Talle S al XXL.jpeg",
  },
  {
    id: 6,
    name: "Camiseta Alternativa Boca",
    team: "FUTBOL ARGENTINO",
    sizes: "S al XXL",
    badge: "POPULAR",
    image: "/images/products/Camiseta Alternativa Boca Talles S al XXL.jpg",
  },
  {
    id: 7,
    name: "Camiseta Infantil Boca Alternativa",
    team: "FUTBOL ARGENTINO",
    sizes: "6 al 16",
    badge: null,
    image: "/images/products/Camiseta Infantil Boca Alternativa  Talles 6 al 16.jpg",
  },
  {
    id: 8,
    name: "Camiseta Retro Maradona",
    team: "RETRO",
    sizes: "S al XXL",
    badge: "ICÓNICO",
    image: "/images/products/Camiseta Retro Maradona Talle S al XXL.jpg",
  },
  {
    id: 9,
    name: "Camiseta Retro River",
    team: "RETRO",
    sizes: "S al XXL",
    badge: null,
    image: "/images/products/Camiseta Retro River Talle S al XXL.jpg",
  },
  {
    id: 10,
    name: "Camiseta Retro Boca Alternativa",
    team: "RETRO",
    sizes: "Consultar talles",
    badge: null,
    image: "/images/products/Camiseta Retro Boca Alternativa.jpg",
  },
  {
    id: 11,
    name: "Remera Oversize Estampada",
    team: "URBAN",
    sizes: "S al L",
    badge: "NUEVO",
    image: "/images/products/Urban Remera Oversize Estampada Talles S al L.jpeg",
  },
  {
    id: 12,
    name: "Remera Oversize Lisa",
    team: "URBAN",
    sizes: "S al L",
    badge: null,
    image: "/images/products/Urban Remera Oversize Lisa Talles S al L.jpeg",
  },
  {
    id: 13,
    name: "Remera Clásica Estampada",
    team: "URBAN",
    sizes: "S al XXL",
    badge: null,
    image: "/images/products/Urban Remera Clásica estampada Talles S al XXL.jpeg",
  },
  {
    id: 14,
    name: "Remera Clásica Lisa",
    team: "URBAN",
    sizes: "S al XL",
    badge: null,
    image: "/images/products/Urban Remera Clásica Lisa Talle S al XL.jpeg",
  },
  {
    id: 15,
    name: "Musculosa Clásica Lisa",
    team: "URBAN",
    sizes: "S al XXL",
    badge: null,
    image: "/images/products/Urban Musculosa clásica lisa Talles S al XXL.jpeg",
  },
  {
    id: 16,
    name: "Remera Waffle",
    team: "URBAN",
    sizes: "S al XXL",
    badge: "TENDENCIA",
    image: "/images/products/Urban Remera Waffle Talle S al XXL.jpeg",
  },
]

export function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>("")

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash.startsWith('search=')) {
        setSearchQuery(decodeURIComponent(hash.split('=')[1]).toLowerCase())
        setActiveCategory(null)
      } else if (['seleccion-argentina', 'retro', 'futbol-argentino', 'urban'].includes(hash)) {
        setActiveCategory(hash)
        setSearchQuery("")
      } else if (hash === 'all-products' || hash === 'all' || !hash) {
        setActiveCategory(null)
        setSearchQuery("")
      }
    }

    // Initial check
    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const filteredProducts = products.filter(p => {
    if (searchQuery) {
      return p.name.toLowerCase().includes(searchQuery) || p.team.toLowerCase().includes(searchQuery)
    }
    if (activeCategory) {
      const teamId = p.team.toLowerCase().replace('ó', 'o').replace(' ', '-')
      return teamId === activeCategory
    }
    return true
  })

  return (
    <section id="productos" className="py-24 sm:py-32 bg-graphite relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-celeste/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-deep-blue/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] text-celeste font-bold uppercase mb-4 block">
            {searchQuery ? "RESULTADOS DE BÚSQUEDA" : "EXCLUSIVIDAD EN CADA HILO"}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mt-2 tracking-tighter leading-none uppercase">
            {searchQuery ? (
              <>PARA <span className="text-celeste">"{searchQuery}"</span></>
            ) : (
              <>NUESTRA <span className="text-celeste">SELECCIÓN</span></>
            )}
          </h2>
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto text-lg">
            {searchQuery 
              ? `Encontramos ${filteredProducts.length} producto${filteredProducts.length === 1 ? '' : 's'} para tu búsqueda.`
              : "Descubre las prendas que definen el estilo dentro y fuera del campo. Calidad profesional garantizada."}
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
        >
          <button
            onClick={() => { window.location.hash = 'all-products'; setActiveCategory(null); }}
            className={`px-6 py-2 rounded-full text-xs font-bold tracking-[0.15em] transition-all duration-300 border ${
              activeCategory === null 
                ? 'bg-celeste border-celeste text-background' 
                : 'bg-transparent border-border/50 text-muted-foreground hover:border-celeste/50 hover:text-foreground'
            }`}
          >
            TODOS
          </button>
          {[
            { id: "seleccion-argentina", name: "SELECCIÓN ARGENTINA" },
            { id: "retro", name: "RETRO" },
            { id: "futbol-argentino", name: "FÚTBOL ARGENTINO" },
            { id: "urban", name: "URBAN" }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => { window.location.hash = cat.id; setActiveCategory(cat.id); }}
              className={`px-6 py-2 rounded-full text-xs font-bold tracking-[0.15em] transition-all duration-300 border ${
                activeCategory === cat.id 
                  ? 'bg-celeste border-celeste text-background' 
                  : 'bg-transparent border-border/50 text-muted-foreground hover:border-celeste/50 hover:text-foreground'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Products grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100, damping: 15 }}
                className="group"
              >
              <div className="relative flex flex-col h-full bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-celeste/30 transition-all duration-500 shadow-xl hover:shadow-celeste/5">
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-celeste text-background text-[10px] tracking-[0.2em] font-bold rounded-full">
                    {product.badge}
                  </div>
                )}

                {/* Wishlist button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 z-20 p-2.5 bg-background/60 backdrop-blur-md border border-border/50 rounded-full text-foreground hover:bg-celeste hover:text-background transition-all duration-300"
                  aria-label="Añadir a favoritos"
                >
                  <Heart className="w-4 h-4" />
                </motion.button>

                {/* Product image area */}
                <div className="relative aspect-[4/5] bg-secondary/30 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 1 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                    />
                    
                    {/* Image overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>

                  {/* Quick add button overlay */}
                  <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-4 bg-foreground text-background text-xs font-bold tracking-[0.2em] flex items-center justify-center gap-2 shadow-2xl rounded-lg"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      AÑADIR AL CARRITO
                    </motion.button>
                  </div>
                </div>

                {/* Product info */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] tracking-[0.25em] text-celeste font-bold">{product.team}</span>
                  </div>
                  
                  <h3 className="text-base font-bold text-foreground group-hover:text-celeste transition-colors duration-300 line-clamp-1">{product.name}</h3>
                  
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-[0.1em]">Talles disponibles</span>
                      <span className="text-sm font-bold text-foreground">{product.sizes}</span>
                    </div>
                  </div>
                </div>
              </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <motion.a
            href="#all-products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-foreground/20 text-foreground text-sm font-black tracking-[0.3em] rounded-xl hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-500"
          >
            EXPLORAR TODO EL CATÁLOGO
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
