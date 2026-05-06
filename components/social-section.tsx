"use client"

import { motion } from "framer-motion"
import { Instagram, Heart, MessageCircle } from "lucide-react"

const socialPosts = [
  { id: 1, likes: "12.4K", comments: "234", user: "@futbol_cultura" },
  { id: 2, likes: "8.9K", comments: "156", user: "@la_bombonera" },
  { id: 3, likes: "15.2K", comments: "389", user: "@camisetas_arg" },
  { id: 4, likes: "6.7K", comments: "98", user: "@streetfutbol_ba" },
  { id: 5, likes: "21.3K", comments: "567", user: "@albiceleste_fans" },
  { id: 6, likes: "9.1K", comments: "201", user: "@retro_futbol" },
]

export function SocialSection() {
  return (
    <section className="py-24 sm:py-32 bg-graphite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-5 h-5 text-celeste" />
            <span className="text-xs tracking-[0.3em] text-celeste uppercase">@camisetas_argentina</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            USADO POR LA COMUNIDAD
          </h2>
          <p className="text-muted-foreground mt-4">
            Etiquétanos en tus fotos para tener la oportunidad de ser destacado
          </p>
        </motion.div>

        {/* Social grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {socialPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square bg-secondary rounded-sm overflow-hidden cursor-pointer"
            >
              {/* Placeholder image */}
              <div className="absolute inset-0 bg-gradient-to-br from-celeste/20 via-secondary to-deep-blue/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-foreground/10">
                  {post.id}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-foreground fill-foreground" />
                    <span className="text-sm font-semibold text-foreground">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-foreground" />
                    <span className="text-sm font-semibold text-foreground">{post.comments}</span>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{post.user}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-border text-foreground font-semibold tracking-wide rounded-sm hover:bg-secondary/50 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            SÍGUENOS
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
