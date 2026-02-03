import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MarqueeText } from "@/components/marquee-text"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <MarqueeText />
      <Services />
      <About />
      <Gallery />
      <MarqueeText reverse />
      <Contact />
      <Footer />
    </main>
  )
}
