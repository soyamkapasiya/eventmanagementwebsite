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
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="/about-founder.jpg"
                alt="Pratham Purohit receiving Dance Mania 1st Runner Up award"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-10 -right-4 lg:right-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                  <Award className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Pratham Purohit</p>
                  <p className="text-sm font-medium text-white/50 tracking-wide">Founder & Creative Director</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4">Our Journey</p>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">Creative Visionary</h2>
            <div className="w-20 h-1.5 bg-primary/30 mb-8 rounded-full" />
            <div className="space-y-6 text-white/60 leading-relaxed mb-12 text-lg">
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
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{stat.label}</p>
                  </div>
                )
              })}
            </div>

            <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-8 text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-all">
              <Link href="#contact">Work With Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
