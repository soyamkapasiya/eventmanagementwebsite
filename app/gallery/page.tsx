"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { X, Filter } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const allGalleryImages = Array(24).fill(null).map((_, i) => ({
  src: "/placeholder.svg",
  alt: `Gallery Image ${i + 1}`,
  category: ["Events", "Choreography", "Behind The Scenes"][i % 3],
  description: "View detailed gallery image"
}))

const categories = ["All", "Events", "Choreography", "Behind The Scenes"]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages =
    activeCategory === "All" ? allGalleryImages : allGalleryImages.filter((img) => img.category === activeCategory)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">Our Portfolio</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Event Gallery</h1>
            <p className="text-muted-foreground text-lg">
              Explore our collection of memorable moments from events, performances, and productions. Each image tells a
              story of creativity, passion, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Filter className="w-5 h-5 text-muted-foreground mr-2" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border-border hover:border-primary hover:text-primary",
                )}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl cursor-pointer group aspect-[4/3]"
                onClick={() => setSelectedImage(allGalleryImages.indexOf(image))}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-foreground font-semibold text-lg">{image.alt}</h3>
                    <p className="text-muted-foreground text-sm">{image.description}</p>
                  </div>
                </div>
                {/* Subtle border on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300" />
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">130+</p>
              <p className="text-muted-foreground">Events Captured</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">4000+</p>
              <p className="text-muted-foreground">Happy Moments</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">8+</p>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">40+</p>
              <p className="text-muted-foreground">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Want to Create Your Own Moments?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let us help you create unforgettable memories. From choreography to full event management, we bring your
              vision to life.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="/#contact">Start Your Project</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/98 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation arrows */}
          <button
            className="absolute left-4 md:left-8 text-foreground hover:text-primary transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(selectedImage > 0 ? selectedImage - 1 : allGalleryImages.length - 1)
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-4 md:right-8 text-foreground hover:text-primary transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(selectedImage < allGalleryImages.length - 1 ? selectedImage + 1 : 0)
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={allGalleryImages[selectedImage].src || "/placeholder.svg"}
              alt={allGalleryImages[selectedImage].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg mx-auto"
            />
            <div className="text-center mt-6">
              <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-2">
                {allGalleryImages[selectedImage].category}
              </span>
              <p className="text-foreground text-xl font-semibold">{allGalleryImages[selectedImage].alt}</p>
              <p className="text-muted-foreground">{allGalleryImages[selectedImage].description}</p>
              <p className="text-muted-foreground/60 text-sm mt-2">
                {selectedImage + 1} / {allGalleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
