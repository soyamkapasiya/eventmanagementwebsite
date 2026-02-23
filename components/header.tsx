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
  { href: "/services/dancers", label: "Dance Performance" },
  { href: "/services/cinematography", label: "Cinematography" },
  { href: "/services/show-runners", label: "Show Runners" },
  { href: "/services/behind-the-scene", label: "Behind The Scenes" },
  { href: "/services/artist-management", label: "Artist Management" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div
        className={cn(
          "w-full max-w-5xl transition-all duration-500 rounded-full border border-white/10 px-6 lg:px-10",
          scrolled
            ? "bg-background/60 backdrop-blur-xl py-3 shadow-2xl shadow-primary/10"
            : "bg-background/40 backdrop-blur-md py-4"
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 transition-transform duration-500 group-hover:scale-110">
              <Image
                src="/pj-logo.jpeg"
                alt="PJ Entertainment Logo"
                fill
                className="object-contain rounded-full shadow-lg"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              link.label !== "Home" && (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-white/80 hover:text-primary transition-all duration-300 tracking-wider uppercase"
                >
                  {link.label}
                </Link>
              )
            ))}

            {/* Home specifically styled or first */}
            <Link
              href="/"
              className="text-sm font-bold text-primary transition-all duration-300 tracking-wider uppercase"
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-semibold text-white/80 hover:text-primary transition-all duration-300 tracking-wider uppercase">
                Services
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", servicesOpen && "rotate-180")} />
              </button>

              <div
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300",
                  servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2",
                )}
              >
                <div className="bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl min-w-[240px] py-3 overflow-hidden">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-6 py-3 text-sm font-medium text-white/70 hover:text-primary hover:bg-white/5 transition-all duration-200"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="https://www.instagram.com/pratham_12121"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform px-6">
              <Link href="/#contact">Let's Connect</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isOpen ? "max-h-[800px] mt-6 pb-6" : "max-h-0",
          )}
        >
          <nav className="flex flex-col gap-3 px-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-primary transition-colors py-3 border-b border-white/5"
            >
              Home
            </Link>

            <div className="border-b border-white/5">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-lg font-semibold text-white/80 hover:text-primary transition-colors py-3"
              >
                Services
                <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", servicesOpen && "rotate-180")} />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  servicesOpen ? "max-h-96 pb-4" : "max-h-0",
                )}
              >
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 pl-6 text-white/60 hover:text-primary transition-colors border-l border-white/10"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              link.label !== "Home" && (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-white/80 hover:text-primary transition-colors py-3 border-b border-white/5"
                >
                  {link.label}
                </Link>
              )
            ))}

            <div className="flex items-center gap-6 pt-6">
              <Link
                href="https://www.instagram.com/pratham_12121"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-all duration-300"
              >
                <Instagram className="w-6 h-6" />
                <span className="font-medium">Instagram</span>
              </Link>
            </div>
            <Button asChild className="mt-6 w-full rounded-full bg-primary text-primary-foreground py-6 text-lg">
              <Link href="/#contact">Let's Connect</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
