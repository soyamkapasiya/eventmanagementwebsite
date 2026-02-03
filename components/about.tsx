import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Users, Calendar, Star } from "lucide-react"

const stats = [
  { icon: Calendar, value: "8+", label: "Years Experience" },
  { icon: Users, value: "130+", label: "Events Managed" },
  { icon: Award, value: "4000+", label: "Happy Clients" },
  { icon: Star, value: "25+", label: "Team Members" },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="/about-founder.jpg"
                alt="Pratham Purohit receiving Dance Mania 1st Runner Up award"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 lg:right-8 bg-card border border-border rounded-lg p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Pratham Purohit</p>
                  <p className="text-sm text-muted-foreground">Founder & Creative Director</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">Our Journey</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">From Passion to Powerhouse</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                PJ Entertainments was born out of a deep love for performance, storytelling, and visual artistry. Over
                the years, we've evolved into a full-service entertainment company – offering everything from
                choreography and dancers to cinematography, artist management, and post-production.
              </p>
              <p>
                Whether it's a live concert, a brand film, or a cultural festival, we blend creativity with execution to
                create unforgettable moments. Our team of passionate professionals is dedicated to bringing your vision
                to life with precision and artistry.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                )
              })}
            </div>

            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#contact">Work With Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
