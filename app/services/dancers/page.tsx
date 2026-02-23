import { ServicePageLayout } from "@/components/service-page-layout"

export const metadata = {
  title: "Professional Dance Performance | PJ Entertainment",
  description:
    "Hire talented professional dancers for events, music videos, corporate shows, and live performances. Trained in multiple dance styles.",
}

export default function DancersPage() {
  return (
    <ServicePageLayout
      title="Dance Performance"
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

      gallery={[
        "/dancers1.png",
        "/dancers2.jpeg",
        "/dancers3.jpeg",
        "/home-hero.jpg",
        "/choreography-hero.jpg",
        "/behindthescene1.png",
      ]}
      galleryImageClassName="object-top"
    />
  )
}
