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
    title: "Dance Performance",
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
    title: "Behind The Scenes",
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
    imageClassName: "object-top",
  },
]

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4">What We Do</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">Our Services</h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto mb-8 rounded-full" />
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            From concept to execution, we provide end-to-end entertainment solutions that bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={index}
                href={service.href}
                className={cn(
                  "group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-700 cursor-pointer block",
                  hoveredIndex === index ? "scale-[1.03] border-primary/30 shadow-2xl shadow-primary/10 -translate-y-2" : "hover:border-primary/20",
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className={cn("w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110", service.imageClassName)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:rotate-6">
                    <Icon className="w-8 h-8 text-primary group-hover:text-current transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm lg:text-base group-hover:text-white/80 transition-colors">{service.description}</p>

                  {/* Hover Arrow */}
                  <div className="mt-8 flex items-center gap-3 text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-sm font-bold uppercase tracking-wider">View Details</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
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
