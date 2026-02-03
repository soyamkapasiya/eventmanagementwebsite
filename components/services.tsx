"use client"

import { useState } from "react"
import Link from "next/link"
import { Users, Camera, Clapperboard, Music, Video, Star, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Music,
    title: "Choreography",
    description:
      "Professional choreography for all types of events, from weddings to corporate shows and music videos.",
    image: "/choreography-hero.jpg",
    href: "/services/choreography",
  },
  {
    icon: Users,
    title: "Dancers",
    description: "Talented and trained dancers for live performances, events, music videos, and promotional campaigns.",
    image: "/dancers-hero.jpg",
    href: "/services/dancers",
  },
  {
    icon: Camera,
    title: "Cinematography",
    description: "High-quality cinematography services for films, commercials, music videos, and event documentation.",
    image: "/cinematography-hero.jpg",
    href: "/services/cinematography",
  },
  {
    icon: Clapperboard,
    title: "Show Runners",
    description: "Expert show runners who manage and execute events flawlessly from start to finish.",
    image: "/show-runners-hero.jpg",
    href: "/services/show-runners",
  },
  {
    icon: Video,
    title: "Behind The Scene",
    description: "Complete behind-the-scenes coverage and documentation for your productions and events.",
    image: "/behind-the-scenes-hero.jpg",
    href: "/services/behind-the-scene",
  },
  {
    icon: Star,
    title: "Artist Management",
    description: "Professional artist management services including bookings, promotions, and career development.",
    image: "/artist-management-hero.jpg",
    href: "/services/artist-management",
  },
]

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to execution, we provide end-to-end entertainment solutions that bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={index}
                href={service.href}
                className={cn(
                  "group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-500 cursor-pointer block",
                  hoveredIndex === index ? "scale-[1.02] shadow-xl shadow-primary/10" : "hover:border-primary/50",
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-8">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                  {/* Hover Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">View Details</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
