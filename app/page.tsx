import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { FeaturedProducts } from "@/components/featured-products"
import { CinematicBanner } from "@/components/cinematic-banner"
import { SocialSection } from "@/components/social-section"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <CinematicBanner />
      <SocialSection />
      <Newsletter />
      <Footer />
    </main>
  )
}
