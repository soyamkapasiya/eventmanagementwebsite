"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Instagram, Send, MessageCircle, Video } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7987763257",
      href: "tel:+917987763257",
    },
    {
      icon: Mail,
      label: "Email",
      value: "pjentertainment26@gmail.com",
      href: "mailto:pjentertainment26@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Indore, Madhya Pradesh",
      href: "https://maps.google.com/?q=Indore+Madhya+Pradesh",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@pratham_12121",
      href: "https://www.instagram.com/pratham_12121",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: "https://wa.me/917987763257?text=Hello%20PJ%20Entertainment,%20I%20would%20like%20to%20inquire%20about%20your%20services.",
    },
    {
      icon: Video,
      label: "YouTube",
      value: "PJ Entertainment Official",
      href: "https://youtube.com/@PJEntertainment",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Contact Info */}
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10" />
            <p className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4">Get In Touch</p>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">We'd Love to Hear From You</h2>
            <div className="w-20 h-1.5 bg-primary/40 mb-8 rounded-full" />
            <p className="text-white/60 leading-relaxed mb-12 text-lg">
              Drop us a message, call, or follow us online – we're just one click away. Whether it's a large-scale show
              or a high-impact shoot, we're ready to make it unforgettable.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.icon === Instagram || item.icon === MapPin ? "_blank" : undefined}
                    rel={item.icon === Instagram || item.icon === MapPin ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl">
                      <Icon className="w-6 h-6 text-primary group-hover:text-current transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                      <p className="text-foreground font-bold group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 md:p-12 shadow-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-8">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-white/40 uppercase tracking-widest px-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-white/5 border-white/10 rounded-2xl h-14 focus:border-primary/50 transition-colors placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold text-white/40 uppercase tracking-widest px-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white/5 border-white/10 rounded-2xl h-14 focus:border-primary/50 transition-colors placeholder:text-white/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-white/40 uppercase tracking-widest px-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 rounded-2xl h-14 focus:border-primary/50 transition-colors placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-white/40 uppercase tracking-widest px-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 rounded-3xl focus:border-primary/50 transition-colors resize-none placeholder:text-white/20 p-5"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-8 rounded-2xl text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-[1.02] transition-all">
                  <Send className="w-5 h-5 mr-3" />
                  Submit Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
