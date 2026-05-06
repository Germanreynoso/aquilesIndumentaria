"use client"

import { motion } from "framer-motion"
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react"

const footerLinks = {
  shop: [
    { name: "Argentina", href: "#argentina" },
    { name: "Boca Juniors", href: "#boca" },
    { name: "River Plate", href: "#river" },
    { name: "Europeos", href: "#european" },
    { name: "Retro", href: "#retro" },
  ],
  help: [
    { name: "Guía de Tallas", href: "#size" },
    { name: "Envíos", href: "#shipping" },
    { name: "Devoluciones", href: "#returns" },
    { name: "Preguntas Frecuentes", href: "#faq" },
    { name: "Contacto", href: "#contact" },
  ],
  company: [
    { name: "Sobre Nosotros", href: "#about" },
    { name: "Empleos", href: "#careers" },
    { name: "Prensa", href: "#press" },
    { name: "Sostenibilidad", href: "#sustainability" },
  ],
}

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
]

export function Footer() {
  return (
    <footer className="bg-graphite border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Top section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <motion.a
              href="/"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="text-2xl font-bold tracking-tighter text-foreground">CAMISETAS</span>
            </motion.a>
            <p className="text-sm text-muted-foreground mt-4 max-w-xs">
              Camisetas de fútbol premium que celebran la cultura del fútbol argentino. Nacido en Buenos Aires, usado en todo el mundo.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="text-xs tracking-[0.2em] text-foreground font-semibold uppercase mb-4">Tienda</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help links */}
          <div>
            <h3 className="text-xs tracking-[0.2em] text-foreground font-semibold uppercase mb-4">Ayuda</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xs tracking-[0.2em] text-foreground font-semibold uppercase mb-4">Compañía</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment methods placeholder */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <h3 className="text-xs tracking-[0.2em] text-foreground font-semibold uppercase mb-4">Aceptamos</h3>
            <div className="flex flex-wrap gap-2">
              {["VISA", "MC", "AMEX", "PAYPAL"].map((method) => (
                <div
                  key={method}
                  className="px-3 py-2 bg-secondary rounded-sm text-[10px] tracking-wider text-muted-foreground"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © 2026 CAMISETAS. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Política de Privacidad
              </a>
              <a href="#terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Large brand text */}
      <div className="border-t border-border overflow-hidden">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap py-6"
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[8rem] sm:text-[12rem] font-bold tracking-tighter text-border/30 mx-8"
            >
              CAMISETAS
            </span>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}
