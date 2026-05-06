"use client"

import { motion } from "framer-motion"
import { Heart, ShoppingBag, Star } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Argentina Home 2024",
    team: "ARGENTINA",
    price: 149,
    originalPrice: 179,
    rating: 4.9,
    reviews: 234,
    badge: "MÁS VENDIDO",
    colors: ["celeste", "white"],
    image: "/images/products/jersey-1.jpg",
  },
  {
    id: 2,
    name: "Boca Juniors Home",
    team: "BOCA JUNIORS",
    price: 129,
    originalPrice: null,
    rating: 4.8,
    reviews: 189,
    badge: "NUEVO",
    colors: ["blue", "gold"],
    image: "/images/products/jersey-2.jpg",
  },
  {
    id: 3,
    name: "River Plate Away",
    team: "RIVER PLATE",
    price: 129,
    originalPrice: 159,
    rating: 4.7,
    reviews: 156,
    badge: null,
    colors: ["black", "red"],
    image: "/images/products/jersey-3.jpg",
  },
  {
    id: 4,
    name: "Real Madrid Home",
    team: "EUROPEOS",
    price: 159,
    originalPrice: null,
    rating: 5.0,
    reviews: 412,
    badge: "ICÓNICO",
    colors: ["white", "gold"],
    image: "/images/products/jersey-4.jpg",
  },
  {
    id: 5,
    name: "Manchester City Home",
    team: "EUROPEOS",
    price: 139,
    originalPrice: 159,
    rating: 4.8,
    reviews: 201,
    badge: "OFERTA",
    colors: ["celeste", "white"],
    image: "/images/products/jersey-5.jpg",
  },
  {
    id: 6,
    name: "Inter Miami Home",
    team: "MLS",
    price: 169,
    originalPrice: null,
    rating: 4.9,
    reviews: 567,
    badge: "POPULAR",
    colors: ["pink", "black"],
    image: "/images/products/jersey-6.jpg",
  },
  {
    id: 7,
    name: "France Home 2024",
    team: "INTERNACIONAL",
    price: 149,
    originalPrice: null,
    rating: 4.7,
    reviews: 124,
    badge: null,
    colors: ["blue", "white"],
    image: "/images/products/jersey-7.jpg",
  },
  {
    id: 8,
    name: "Argentina Retro 1986",
    team: "RETRO",
    price: 189,
    originalPrice: 219,
    rating: 5.0,
    reviews: 890,
    badge: "LIMITADA",
    colors: ["celeste", "white"],
    image: "/images/products/jersey-8.jpg",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-24 sm:py-32 bg-graphite relative overflow-hidden">
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
          <span className="text-xs tracking-[0.4em] text-celeste font-bold uppercase mb-4 block">EXCLUSIVIDAD EN CADA HILO</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mt-2 tracking-tighter leading-none">
            NUESTRA <span className="text-celeste">SELECCIÓN</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto text-lg">
            Descubre las prendas que definen el estilo dentro y fuera del campo. Calidad profesional garantizada.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
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
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-gold text-gold" />
                      <span className="text-xs font-medium text-foreground">{product.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-base font-bold text-foreground group-hover:text-celeste transition-colors duration-300 line-clamp-1">{product.name}</h3>
                  
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-black text-foreground">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through decoration-celeste/40">${product.originalPrice}</span>
                      )}
                    </div>
                    
                    {/* Color swatches */}
                    <div className="flex items-center -space-x-1">
                      {product.colors.map((color) => (
                        <div
                          key={color}
                          className={`w-3.5 h-3.5 rounded-full ring-2 ring-background border border-border ${
                            color === "celeste" ? "bg-celeste" :
                            color === "white" ? "bg-foreground" :
                            color === "blue" ? "bg-deep-blue" :
                            color === "gold" ? "bg-gold" :
                            color === "black" ? "bg-background" :
                            color === "red" ? "bg-destructive" :
                            color === "pink" ? "bg-pink-400" : "bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
