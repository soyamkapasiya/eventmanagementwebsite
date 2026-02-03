"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, Phone, Mail, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}

interface ServicePageLayoutProps {
  title: string
  tagline: string
  description: string
  heroImage: string
  features: string[]
  process: { step: number; title: string; description: string }[]
  pricing: PricingTier[]
  gallery: string[]
  children?: ReactNode
}

export function ServicePageLayout({
  title,
  tagline,
  description,
  heroImage,
  features,
  process,
  pricing,
  gallery,
}: ServicePageLayoutProps) {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src="/royal_stage_background.jpg"
          alt="Royal Stage Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage || "/placeholder.svg"} alt={title} className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            <div className="max-w-3xl">
              <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">{tagline}</p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">{title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">{description}</p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/#contact">Get Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 bg-transparent"
                >
                  <a href="tel:7987763257">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Offer</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive {title.toLowerCase()} services tailored to your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">How It Works</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Process</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step) => (
                <div key={step.step} className="relative">
                  <div className="text-7xl font-bold text-primary/10 absolute -top-4 -left-2">
                    {step.step.toString().padStart(2, "0")}
                  </div>
                  <div className="relative pt-8">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Gallery Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">Our Work</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Recent Projects</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map((image, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${title} project ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/#contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="mailto:prathampurohit2002@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
