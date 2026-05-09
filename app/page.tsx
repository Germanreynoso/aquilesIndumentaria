import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { FeaturedProducts } from "@/components/featured-products"
import { CinematicBanner } from "@/components/cinematic-banner"
import { SocialSection } from "@/components/social-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "name": "Aquiles Indumentaria",
    "image": "https://aquilesindumentaria.com.ar/icon-light-32x32.png",
    "description": "Camisetas de fútbol premium que celebran la cultura del fútbol argentino.",
    "url": "https://aquilesindumentaria.com.ar",
    "telephone": "+5493816464923",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tucumán",
      "addressRegion": "T",
      "addressCountry": "AR"
    },
    "sameAs": [
      "https://www.instagram.com/aquiles.indumentaria/"
    ]
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <CinematicBanner />
      {/* <SocialSection /> */}
      <Footer />
    </main>
  )
}
