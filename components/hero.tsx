"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown, Play } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [merged, setMerged] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setMerged(true)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  const entertainmentText = "Entertainment"

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/home-hero.jpg"
          alt="Entertainment background"
          className="w-full h-full object-cover scale-105 animate-subtle-float"
        />
        {/* Deep Royal Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/70 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1)_0%,transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Tagline */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-primary/50" />
            <p className="text-primary font-bold tracking-[0.4em] uppercase text-xs sm:text-sm">
              Creating Moments. Inspiring Movements.
            </p>
            <div className="h-px w-12 bg-primary/50" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-foreground mb-6 tracking-tight relative leading-tight">
            {/* Container for the merge animation */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-2">
              {/* PJ - slides in from left */}
              <span
                className={`relative inline-block transition-all duration-1000 ease-out py-2 ${mounted
                  ? merged
                    ? "translate-x-0 opacity-100"
                    : "translate-x-0 opacity-100 md:-translate-x-12"
                  : "-translate-x-[100vw] opacity-0"
                  }`}
              >
                <span className="inline-block text-primary relative">
                  {"PJ".split("").map((letter, index) => (
                    <span
                      key={index}
                      className={`inline-block transition-all duration-300 hover:scale-125 hover:text-primary/80 cursor-default ${merged ? "animate-glow-pulse" : ""
                        }`}
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        textShadow: merged ? "0 0 30px oklch(0.85 0.15 80 / 0.6), 0 0 60px oklch(0.85 0.15 80 / 0.3)" : "none",
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
                {/* Glow trail effect */}
                <span
                  className={`absolute inset-0 blur-3xl bg-primary/30 -z-10 transition-opacity duration-700 ${mounted && !merged ? "opacity-100" : "opacity-40"
                    }`}
                />
              </span>

              <span
                className={`inline-block transition-all duration-1000 ease-out ${mounted
                  ? merged
                    ? "translate-x-0 opacity-100"
                    : "translate-x-0 opacity-100 md:translate-x-12"
                  : "translate-x-[100vw] opacity-0"
                  }`}
              >
                {entertainmentText.split("").map((letter, index) => (
                  <span
                    key={index}
                    className={`inline-block transition-all duration-300 hover:text-primary hover:scale-110 cursor-default ${merged ? "animate-subtle-float" : ""
                      }`}
                    style={{
                      animationDelay: `${index * 0.05}s`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </div>
          </h1>

          {/* Animated underline that expands after merge */}
          <div className="relative h-px mx-auto mb-10 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-1000 ease-out mx-auto ${merged ? "w-80 md:w-[600px] opacity-100" : "w-0 opacity-0"
                }`}
            />
          </div>

          {/* Description */}
          <p className="text-white/60 max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed font-medium">
            India's premier event management agency specializing in choreography,
            cinematography, and star-studded entertainment experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-8 text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-all"
            >
              <Link href="#contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/20 text-white hover:bg-white/10 px-10 py-8 text-lg font-bold bg-transparent backdrop-blur-md hover:scale-105 transition-all"
            >
              <Link href="#services" className="flex items-center gap-3">
                <Play className="w-5 h-5 fill-current" />
                Explore Services
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            href="#services"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-float" />
      <div
        className="absolute top-1/3 right-20 w-3 h-3 bg-primary/50 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-3.5 h-3.5 bg-primary/20 rounded-full animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10 animate-pulse-slow"
      />
    </section>
  )
}
