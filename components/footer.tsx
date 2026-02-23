import Link from "next/link"
import { Instagram, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <footer className="bg-background relative border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <span className="text-4xl font-black text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">PJ</span>
              <span className="text-2xl font-bold text-foreground tracking-[0.2em]">ENTERTAINMENT</span>
            </Link>
            <p className="text-white/50 leading-relaxed mb-10 max-w-md text-lg">
              Creating Moments. Inspiring Movements. Your ultimate partner for choreography, cinematography, event
              production, and artist management.
            </p>
            <div className="flex items-center gap-5">
              <Link
                href="https://www.instagram.com/pratham_12121"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 hover:text-primary-foreground hover:bg-primary transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="tel:+917987763257"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 hover:text-primary-foreground hover:bg-primary transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Phone className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:pjentertainment26@gmail.com"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 hover:text-primary-foreground hover:bg-primary transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-10">
            <h4 className="text-foreground font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <nav className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/50 hover:text-primary transition-colors font-medium hover:translate-x-1 transform duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-bold uppercase tracking-widest text-xs mb-8">Contact Info</h4>
            <div className="space-y-6">
              <a
                href="tel:+917987763257"
                className="flex items-center gap-4 text-white/50 hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium">+91 7987763257</span>
              </a>
              <a
                href="mailto:pjentertainment26@gmail.com"
                className="flex items-center gap-4 text-white/50 hover:text-primary transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium break-all">pjentertainment26@gmail.com</span>
              </a>
              <div className="flex items-start gap-4 text-white/50 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 mt-0.5" />
                </div>
                <span className="font-medium">Indore, Madhya Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/40 tracking-wide font-medium">© {currentYear} PJ Entertainment. All rights reserved.</p>
          <p className="text-sm text-white/40 font-medium">
            Founded by <span className="text-primary font-bold">Pratham Purohit</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
