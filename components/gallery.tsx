"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = Array(14).fill(null).map((_, i) => ({
  src: "/placeholder.svg",
  alt: `Gallery Image ${i + 1}`,
  category: ["Events", "Choreography", "Production"][i % 3],
  description: "View detailed gallery image"
}))

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Event Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our world of entertainment. Every event is a story, and we're here to tell yours.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={cn(
                "relative overflow-hidden rounded-lg cursor-pointer group",
                index === 0 || index === 4 ? "md:col-span-2" : "",
                index === 0 ? "row-span-2" : "",
              )}
              onClick={() => setSelectedImage(index)}
            >
              <div className={cn("aspect-square", index === 0 && "md:aspect-auto md:h-full")}>
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs text-primary font-medium uppercase tracking-wider">{image.category}</p>
                  <p className="text-foreground font-semibold">{image.alt}</p>
                  <p className="text-muted-foreground text-sm">{image.description}</p>
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
