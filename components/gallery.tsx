"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/choreography-hero.jpg",
    alt: "Grand Choreography",
    category: "Choreography",
    description: "Creative direction for large-scale events",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    src: "/cinematography-hero.jpg",
    alt: "Cinematic Vision",
    category: "Cinematography",
    description: "High-definition event coverage",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: "/show-runner1.jpeg",
    alt: "Live Show Direction",
    category: "Show Runners",
    description: "Seamless backstage coordination",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: "/artist-management1.png",
    alt: "Talent Showcase",
    category: "Artist Management",
    description: "Representing top-tier performers",
    className: "md:col-span-1 md:row-span-2"
  },
  {
    src: "/behindthescene3.png",
    alt: "Production Hub",
    category: "Behind The Scenes",
    description: "The team behind the magic",
    className: "md:col-span-2 md:row-span-1"
  },
  {
    src: "/dancers1.png",
    alt: "Stage Performance",
    category: "Dance Performance",
    description: "Energy and precision on stage",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: "/choreographer1.png",
    alt: "Artistic Rehearsal",
    category: "Choreography",
    description: "Perfecting every movement",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: "/cinematography2.png",
    alt: "Film Production",
    category: "Cinematography",
    description: "Professional camera operations",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: "/artist-management3.png",
    alt: "Artist Backstage",
    category: "Artist Management",
    description: "Behind the curtain coordination",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: "/home-hero.jpg",
    alt: "Grand Production",
    category: "Events",
    description: "Visual spectacle on a massive scale",
    className: "md:col-span-2 md:row-span-1"
  },
  {
    src: "/cinematography3.png",
    alt: "Creative Visuals",
    category: "Cinematography",
    description: "Artistic event storytelling",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: "/behindthescene1.png",
    alt: "Technical Setup",
    category: "Behind The Scenes",
    description: "Rigging and light engineering",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: "/choreographer3.png",
    alt: "Dance Ensemble",
    category: "Choreography",
    description: "Group performance mastery",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: "/show-runner3.jpeg",
    alt: "Event Flow",
    category: "Show Runners",
    description: "Critical timing and execution",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: "/artist-management2.png",
    alt: "Artist Portfolio",
    category: "Artist Management",
    description: "Visual branding for performers",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: "/choreographer2.png",
    alt: "Dance Workshop",
    category: "Choreography",
    description: "Teaching the art of movement",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: "/cinematography1.png",
    alt: "Wedding Cinema",
    category: "Cinematography",
    description: "Capturing love in motion",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: "/dancers2.jpeg",
    alt: "Classical Rhythm",
    category: "Dance Performance",
    description: "Traditional performance excellence",
    className: "md:col-span-1 md:row-span-1"
  }
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4">Our Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 text-glow">Event Gallery</h2>
          <div className="w-24 h-1.5 bg-primary/40 mx-auto mb-8 rounded-full" />
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Explore a curated selection of our most memorable productions, from high-energy stage shows to cinematic masterpieces.
          </p>
        </div>

        {/* Dynamic Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px] md:auto-rows-[250px] grid-flow-dense">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={cn(
                "relative overflow-hidden rounded-[2rem] border border-white/5 cursor-pointer group transition-all duration-700 hover:border-primary/30 hover:scale-[1.02] shadow-xl",
                image.className
              )}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2">{image.category}</p>
                  <h4 className="text-foreground text-xl font-bold mb-2">{image.alt}</h4>
                  <p className="text-white/60 text-sm line-clamp-2 font-medium">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/gallery" className="flex items-center gap-2">
              View All Photos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg mx-auto"
            />
            <div className="text-center mt-4">
              <p className="text-primary text-sm uppercase tracking-wider">{galleryImages[selectedImage].category}</p>
              <p className="text-foreground text-xl font-semibold">{galleryImages[selectedImage].alt}</p>
              <p className="text-muted-foreground">{galleryImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
