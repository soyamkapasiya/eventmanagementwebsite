"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Instagram, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
]

const serviceLinks = [
  { href: "/services/choreography", label: "Choreography" },
  { href: "/services/dancers", label: "Dancers" },
  { href: "/services/cinematography", label: "Cinematography" },
  { href: "/services/show-runners", label: "Show Runners" },
  { href: "/services/behind-the-scene", label: "Behind The Scene" },
  { href: "/services/artist-management", label: "Artist Management" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/pj-logo.jpeg"
                alt="PJ Entertainment Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wide uppercase"
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wide uppercase">
                Services
                <ChevronDown className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")} />
              </button>

              <div
                className={cn(
                  "absolute top-full left-0 pt-2 transition-all duration-200",
                  servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2",
                )}
              >
                <div className="bg-card border border-border rounded-lg shadow-xl min-w-[220px] py-2">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/#about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wide uppercase"
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wide uppercase"
            >
              Gallery
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wide uppercase"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="https://www.instagram.com/pratham_12121"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/#contact">Start Project</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-foreground p-2" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[600px] pb-6" : "max-h-0",
          )}
        >
          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border"
            >
              Home
            </Link>

            <div className="border-b border-border">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Services
                <ChevronDown className={cn("w-5 h-5 transition-transform", servicesOpen && "rotate-180")} />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  servicesOpen ? "max-h-96 pb-2" : "max-h-0",
                )}
              >
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 pl-4 text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/#about"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border"
            >
              About
            </Link>
            <Link
              href="/gallery"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border"
            >
              Gallery
            </Link>
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border"
            >
              Contact
            </Link>

            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://www.instagram.com/pratham_12121"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </Link>
            </div>
            <Button asChild className="mt-2 bg-primary text-primary-foreground">
              <Link href="/#contact">Start Project</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
