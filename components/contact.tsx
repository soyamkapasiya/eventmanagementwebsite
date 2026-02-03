"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Instagram, Send, MessageCircle } from "lucide-react"

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
    console.log("Form submitted:", formData)
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
      value: "prathampurohit2002@gmail.com",
      href: "mailto:prathampurohit2002@gmail.com",
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
  ]

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">We'd Love to Hear From You</h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Drop us a message, call, or follow us online – we're just one click away. Whether it's a large-scale show
              or a high-impact shoot, we're ready to make it unforgettable.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.icon === Instagram || item.icon === MapPin ? "_blank" : undefined}
                    rel={item.icon === Instagram || item.icon === MapPin ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm text-muted-foreground mb-2 block">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-secondary border-border"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm text-muted-foreground mb-2 block">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-secondary border-border"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-secondary border-border resize-none"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6">
                <Send className="w-4 h-4 mr-2" />
                Submit Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
