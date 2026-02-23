interface MarqueeTextProps {
  reverse?: boolean
}

const services = [
  "Choreography",
  "Dance Performance",
  "Artist Management",
  "Cinematography",
  "Show Runners",
  "Behind The Scenes",
  "Event Production",
  "Post Production",
]

export function MarqueeText({ reverse = false }: MarqueeTextProps) {
  return (
    <div className="py-10 bg-secondary overflow-hidden border-y border-border">
      <div className={`flex whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[...services, ...services].map((service, index) => (
          <span
            key={index}
            className="text-sm font-medium text-muted-foreground uppercase tracking-widest mx-8 flex items-center gap-8"
          >
            {service}
            <span className="text-primary">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
