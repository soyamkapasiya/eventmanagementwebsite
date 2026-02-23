"use client"

import { useState, useEffect } from "react"
import { Quote, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Groom",
        text: "The choreography for our wedding was spectacular! Pratham and his team made even the non-dancers in our family look like professionals.",
        rating: 5
    },
    {
        name: "Sneha Kapoor",
        role: "Event Planner",
        text: "Working with PJ Entertainment for our corporate gala was a breeze. Their show runners are top-notch and handled everything with grace.",
        rating: 5
    },
    {
        name: "Anil Verma",
        role: "Music Director",
        text: "The cinematography for our latest music video exceeded all expectations. The visual storytelling techniques used were truly world-class.",
        rating: 5
    }
]

export function Testimonials() {
    return (
        <section className="py-24 bg-secondary/10 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-20">
                    <p className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4">Testimonials</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">What Our Clients Say</h2>
                    <div className="w-24 h-1.5 bg-primary/30 mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="relative p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 group"
                        >
                            <Quote className="w-12 h-12 text-primary/20 absolute top-8 right-8 group-hover:text-primary/40 transition-colors" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                ))}
                            </div>

                            <p className="text-white/70 italic mb-8 leading-relaxed font-medium">"{item.text}"</p>

                            <div>
                                <p className="text-foreground font-bold text-lg">{item.name}</p>
                                <p className="text-primary/60 text-sm font-bold uppercase tracking-widest">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
