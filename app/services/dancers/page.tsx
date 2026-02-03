import { ServicePageLayout } from "@/components/service-page-layout"

export const metadata = {
  title: "Professional Dancers | PJ Entertainment",
  description:
    "Hire talented professional dancers for events, music videos, corporate shows, and live performances. Trained in multiple dance styles.",
}

export default function DancersPage() {
  return (
    <ServicePageLayout
      title="Dancers"
      tagline="Talent On Demand"
      description="Access our roster of professionally trained dancers for any occasion. From elegant classical performances to high-energy Bollywood numbers, our dancers bring passion, precision, and professionalism to every performance."
      heroImage="/dancers-hero.jpg"
      features={[
        "Bollywood dance specialists",
        "Classical trained dancers",
        "Hip-hop & street style performers",
        "Contemporary & modern dancers",
        "Western freestyle dancers",
        "Folk & traditional performers",
        "Backup dancers for artists",
        "Event opening acts",
        "Brand promotion dancers",
        "Award show performances",
        "Music video dancers",
        "Mall activation performers",
      ]}
      process={[
        {
          step: 1,
          title: "Requirements",
          description: "Share your event details, dance style preferences, and number of dancers needed.",
        },
        {
          step: 2,
          title: "Selection",
          description: "We curate the perfect team of dancers matching your requirements and budget.",
        },
        {
          step: 3,
          title: "Rehearsals",
          description: "Our dancers rehearse and perfect the choreography for your event.",
        },
        {
          step: 4,
          title: "Performance",
          description: "Professional delivery with coordinated costumes and flawless execution.",
        },
      ]}
      pricing={[
        {
          name: "Solo/Duo",
          price: "₹8,000",
          description: "Per dancer, per event",
          features: [
            "1-2 professional dancers",
            "Single performance slot",
            "Standard choreography",
            "Basic costumes included",
            "2-hour event coverage",
            "Basic costumes included",
          ],
        },
        {
          name: "Group (4-6)",
          price: "₹25,000",
          description: "Small group performances",
          popular: true,
          features: [
            "4-6 professional dancers",
            "Up to 2 performance slots",
            "Custom choreography",
            "Theme-based costumes",
            "Full event presence",
            "Coordination with DJ/band",
          ],
        },
        {
          name: "Troupe (8+)",
          price: "₹50,000+",
          description: "Large scale productions",
          features: [
            "8+ professional dancers",
            "Multiple performance slots",
            "Complex choreography",
            "Premium costumes",
            "Full production support",
            "Stage management",
            "Backup dancers included",
            "Travel & accommodation",
          ],
        },
      ]}
      gallery={[
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
      ]}
    />
  )
}
