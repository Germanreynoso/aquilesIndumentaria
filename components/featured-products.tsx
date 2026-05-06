"use client"

import { motion } from "framer-motion"
import { Heart, ShoppingBag, Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Argentina Home 2026",
    team: "ARGENTINA",
    price: 149,
    originalPrice: 179,
    rating: 4.9,
    reviews: 234,
    badge: "MÁS VENDIDO",
    colors: ["celeste", "white"],
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
  },
  {
    id: 4,
    name: "Argentina Retro 1986",
    team: "RETRO",
    price: 169,
    originalPrice: null,
    rating: 5.0,
    reviews: 412,
    badge: "ICÓNICO",
    colors: ["celeste", "white"],
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-24 sm:py-32 bg-graphite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-celeste uppercase">Destacados</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 tracking-tight">
            MÁS BUSCADOS
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Las camisetas que nuestra comunidad más ama. Calidad premium, diseños auténticos.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-card border border-border rounded-sm overflow-hidden">
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-foreground text-background text-[10px] tracking-[0.15em] font-semibold rounded-sm">
                    {product.badge}
                  </div>
                )}

                {/* Wishlist button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Añadir a la lista de deseos"
                >
                  <Heart className="w-4 h-4 text-foreground" />
                </motion.button>

                {/* Product image area */}
                <div className="relative aspect-[3/4] bg-secondary flex items-center justify-center overflow-hidden">
                  {/* Jersey placeholder */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-3/4 h-3/4 bg-gradient-to-b from-celeste/20 to-deep-blue/20 rounded-sm flex items-center justify-center"
                  >
                    <span className="text-6xl font-bold text-foreground/20">
                      {product.id}
                    </span>
                  </motion.div>

                  {/* Quick add button */}
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ scale: 1.02 }}
                    className="absolute bottom-0 left-0 right-0 py-3 bg-foreground text-background text-sm font-semibold tracking-wide flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    COMPRA RÁPIDA
                  </motion.button>
                </div>

                {/* Product info */}
                <div className="p-4">
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground">{product.team}</span>
                  <h3 className="text-sm font-semibold text-foreground mt-1">{product.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-gold text-gold" />
                      <span className="text-xs text-foreground">{product.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews} reseñas)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-lg font-bold text-foreground">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                    )}
                  </div>

                  {/* Color swatches */}
                  <div className="flex items-center gap-2 mt-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={`w-5 h-5 rounded-full border-2 border-border hover:border-foreground transition-colors ${
                          color === "celeste" ? "bg-celeste" :
                          color === "white" ? "bg-foreground" :
                          color === "blue" ? "bg-deep-blue" :
                          color === "gold" ? "bg-gold" :
                          color === "black" ? "bg-background" :
                          color === "red" ? "bg-destructive" : ""
                        }`}
                        aria-label={`Color: ${color}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#all-products"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-8 py-4 border border-foreground text-foreground font-semibold tracking-wide rounded-sm hover:bg-foreground hover:text-background transition-colors"
          >
            VER TODOS LOS PRODUCTOS
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
