import { ServicePageLayout } from "@/components/service-page-layout"

export const metadata = {
  title: "Behind The Scene Coverage | PJ Entertainment",
  description:
    "Professional behind-the-scenes documentation for films, events, and productions. Capture the magic of making.",
}

export default function BehindTheScenePage() {
  return (
    <ServicePageLayout
      title="Behind The Scene"
      tagline="Capture The Magic"
      description="Document the journey behind your productions. Our BTS team captures the raw moments, hard work, and creativity that goes into making your project, creating valuable content for marketing and memories."
      heroImage="/behind-the-scenes-hero.jpg"
      features={[
        "Film production BTS",
        "Music video making",
        "Event preparation coverage",
        "Artist journey documentation",
        "Making-of featurettes",
        "Social media content",
        "Photo & video documentation",
        "Interview segments",
        "Time-lapse of setups",
        "Candid moments capture",
        "Promotional content creation",
        "Real-time social updates",
      ]}
      process={[
        {
          step: 1,
          title: "Brief",
          description: "Understanding your production schedule and key moments to capture.",
        },
        {
          step: 2,
          title: "Coverage",
          description: "Unobtrusive documentation throughout your production or event.",
        },
        {
          step: 3,
          title: "Editing",
          description: "Creating engaging BTS content from raw footage and photos.",
        },
        {
          step: 4,
          title: "Delivery",
          description: "Multi-format content ready for various platforms.",
        },
      ]}
      pricing={[
        {
          name: "Basic",
          price: "₹12,000",
          description: "Half-day coverage",
          features: [
            "Single videographer",
            "4-hour coverage",
            "Photo + video",
            "Quick turnaround",
            "Social media clips",
            "50+ edited photos",
          ],
        },
        {
          name: "Standard",
          price: "₹30,000",
          description: "Full production coverage",
          popular: true,
          features: [
            "2-person crew",
            "Full day coverage",
            "Interview segments",
            "3-5 minute BTS video",
            "200+ edited photos",
            "Social media package",
            "Making-of content",
          ],
        },
        {
          name: "Premium",
          price: "₹60,000+",
          description: "Complete documentation",
          features: [
            "Full BTS crew",
            "Multi-day coverage",
            "Documentary-style edit",
            "Extended making-of film",
            "Unlimited photos",
            "Real-time social updates",
            "Exclusive interviews",
            "RAW files included",
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
