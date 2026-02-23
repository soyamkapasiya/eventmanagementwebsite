import { ServicePageLayout } from "@/components/service-page-layout"

export const metadata = {
  title: "Behind The Scenes Coverage | PJ Entertainment",
  description:
    "Professional behind-the-scenes documentation for films, events, and productions. Capture the magic of making.",
}

export default function BehindTheScenePage() {
  return (
    <ServicePageLayout
      title="Behind The Scenes"
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

      gallery={[
        "/behindthescene1.png",
        "/behindthescene2.png",
        "/behindthescene3.png",
        "/home-hero.jpg",
        "/behind-the-scenes-hero.jpg",
        "/cinematography1.png",
      ]}
      galleryImageClassName="object-top"
    />
  )
}
