import { ServicePageLayout } from "@/components/service-page-layout"

export const metadata = {
  title: "Choreography Services | PJ Entertainment",
  description:
    "Professional choreography for weddings, corporate events, music videos, and live performances. Custom dance routines by expert choreographers.",
}

export default function ChoreographyPage() {
  return (
    <ServicePageLayout
      title="Choreography"
      tagline="Dance Direction"
      description="Transform your vision into captivating dance performances. Our expert choreographers create custom routines that tell your story through movement, whether it's for a wedding, corporate event, music video, or live show."
      heroImage="/choreography-hero.jpg"
      features={[
        "Wedding first dance choreography",
        "Sangeet & mehendi dance routines",
        "Corporate event flash mobs",
        "Music video choreography",
        "Stage show direction",
        "Bollywood dance sequences",
        "Western contemporary styles",
        "Group synchronization",
        "Solo performance coaching",
        "Kids dance training",
        "Competition preparation",
        "Rehearsal scheduling & management",
      ]}
      process={[
        {
          step: 1,
          title: "Consultation",
          description:
            "We discuss your vision, event type, music preferences, and skill levels to understand your needs.",
        },
        {
          step: 2,
          title: "Concept Design",
          description: "Our choreographers create a unique concept tailored to your event and musical selection.",
        },
        {
          step: 3,
          title: "Rehearsals",
          description: "Structured practice sessions to learn and perfect the choreography at your comfort level.",
        },
        {
          step: 4,
          title: "Performance",
          description: "We ensure you're fully prepared and confident for your big moment on stage.",
        },
      ]}
      pricing={[
        {
          name: "Basic",
          price: "₹15,000",
          description: "Perfect for small events",
          features: [
            "Single song choreography",
            "Up to 5 participants",
            "3 rehearsal sessions",
            "Basic steps & formations",
            "Video reference provided",
          ],
        },
        {
          name: "Premium",
          price: "₹35,000",
          description: "Ideal for weddings & parties",
          popular: true,
          features: [
            "Up to 3 song medley",
            "Up to 15 participants",
            "6 rehearsal sessions",
            "Complex choreography",
            "Props & formations",
            "On-site coordination",
            "Video documentation",
          ],
        },
        {
          name: "Professional",
          price: "₹75,000+",
          description: "For productions & shows",
          features: [
            "Unlimited songs",
            "Unlimited participants",
            "Unlimited rehearsals",
            "Professional dancers included",
            "Full show direction",
            "Costume consultation",
            "Lighting coordination",
            "Complete event management",
          ],
        },
      ]}
      gallery={[
        "/gallery-wedding.jpg",
        "/gallery-corporate.jpg",
        "/gallery-concert.jpg",
        "/choreography-hero.jpg",
        "/dancers-hero.jpg",
        "/home-hero.jpg",
      ]}
    />
  )
}
