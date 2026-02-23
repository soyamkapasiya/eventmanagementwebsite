"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, Phone, Mail, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

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
  galleryImageClassName?: string
  heroForegroundImage?: string
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
  galleryImageClassName,
  heroForegroundImage,
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

            <div className="grid lg:grid-cols-2 gap-12 items-center">
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

              {/* Hero Foreground Image */}
              <div className="hidden lg:block relative aspect-video rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right-8 duration-700">
                <img
                  src={heroForegroundImage || heroImage || "/placeholder.svg"}
                  alt={`${title} Hero`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
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

        {/* Pricing Section */}
        <section className="py-24 bg-card/30 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4">Investment</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Service Packages</h2>
              <div className="w-20 h-1 bg-primary/30 mx-auto mb-8 rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((tier, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative p-8 rounded-[2.5rem] border transition-all duration-500",
                    tier.popular
                      ? "bg-primary/10 border-primary/30 shadow-2xl shadow-primary/10 scale-105 z-10"
                      : "bg-white/5 border-white/10 hover:border-white/20"
                  )}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-black text-primary">{tier.price}</span>
                  </div>
                  <p className="text-white/40 text-sm mb-8">{tier.description}</p>
                  <div className="space-y-4 mb-10">
                    {tier.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-white/60 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant={tier.popular ? "default" : "outline"}
                    className={cn(
                      "w-full rounded-2xl py-6 font-bold",
                      tier.popular
                        ? "bg-primary text-primary-foreground"
                        : "border-white/10 hover:bg-white/5"
                    )}
                  >
                    <Link href="/#contact">Choose {tier.name}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Gallery Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4">Our Work</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Recent Projects</h2>
              <div className="w-20 h-1 bg-primary/30 mx-auto mb-8 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/5 group cursor-pointer animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards shadow-xl transition-all hover:border-primary/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${title} project ${index + 1}`}
                    className={cn(
                      "w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110",
                      galleryImageClassName,
                    )}
                  />
                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex flex-col justify-end p-8">
                    <p className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-1">{title}</p>
                    <h4 className="text-foreground font-bold text-lg">Project Highlights</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl px-10 py-7 font-bold text-lg">
                <Link href="/#contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl px-10 py-7 font-bold text-lg border-white/10 hover:bg-white/5">
                <a href="mailto:pjentertainment26@gmail.com">
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
