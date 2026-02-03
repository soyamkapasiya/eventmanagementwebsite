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
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Tagline */}
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6">
            Creating Moments. Inspiring Movements.
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight relative">
            {/* Container for the merge animation */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
              {/* PJ - slides in from left */}
              <span
                className={`relative inline-block transition-all duration-1000 ease-out ${mounted
                    ? merged
                      ? "translate-x-0 opacity-100"
                      : "translate-x-0 opacity-100 md:-translate-x-8"
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
                        textShadow: merged ? "0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary)/0.5)" : "none",
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
                {/* Glow trail effect */}
                <span
                  className={`absolute inset-0 blur-2xl bg-primary/40 -z-10 transition-opacity duration-500 ${mounted && !merged ? "opacity-100" : "opacity-50"
                    }`}
                />
              </span>

              {/* Entertainment - slides in from right */}
              <span
                className={`inline-block transition-all duration-1000 ease-out ${mounted
                    ? merged
                      ? "translate-x-0 opacity-100"
                      : "translate-x-0 opacity-100 md:translate-x-8"
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

            {/* Merge flash effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none transition-opacity duration-300 ${merged ? "opacity-0" : "opacity-0"
                }`}
              style={{
                animation: merged ? "merge-flash 0.5s ease-out" : "none",
              }}
            />
          </h1>

          {/* Animated underline that expands after merge */}
          <div className="relative h-1 mx-auto mb-6 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-700 ease-out mx-auto ${merged ? "w-64 md:w-96 opacity-100" : "w-0 opacity-0"
                }`}
            />
          </div>

          {/* Description */}
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            All type of event management services - from choreography and dancers to cinematography, artist management,
            and beyond.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
            >
              <Link href="#contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-secondary px-8 py-6 text-lg bg-transparent"
            >
              <Link href="#services" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
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
    </section>
  )
}
