import { ServicePageLayout } from "@/components/service-page-layout"

export const metadata = {
  title: "Cinematography Services | PJ Entertainment",
  description:
    "Professional cinematography for films, music videos, commercials, and events. High-quality video production with state-of-the-art equipment.",
}

export default function CinematographyPage() {
  return (
    <ServicePageLayout
      title="Cinematography"
      tagline="Visual Storytelling"
      description="Capture your moments in cinematic excellence. Our experienced cinematographers use cutting-edge equipment and creative vision to produce stunning visual content that tells your story beautifully."
      heroImage="/cinematography-hero.jpg"
      features={[
        "Music video production",
        "Wedding cinematography",
        "Corporate films",
        "Commercial advertisements",
        "Event documentation",
        "Drone aerial shots",
        "4K & 8K capabilities",
        "Cinematic color grading",
        "Multi-camera setups",
        "Slow motion & timelapse",
        "Live streaming services",
        "Documentary filmmaking",
      ]}
      process={[
        {
          step: 1,
          title: "Pre-Production",
          description: "Script review, storyboarding, location scouting, and production planning.",
        },
        {
          step: 2,
          title: "Production",
          description: "Professional filming with our expert crew and high-end equipment.",
        },
        {
          step: 3,
          title: "Post-Production",
          description: "Editing, color grading, sound design, and visual effects.",
        },
        {
          step: 4,
          title: "Delivery",
          description: "Final output in your required format with revisions included.",
        },
      ]}
      pricing={[
        {
          name: "Basic",
          price: "₹25,000",
          description: "Short form content",
          features: [
            "Single camera setup",
            "4-hour shoot",
            "Basic editing",
            "1 minute final cut",
            "2 revisions",
            "Social media formats",
          ],
        },
        {
          name: "Standard",
          price: "₹60,000",
          description: "Events & mid-length content",
          popular: true,
          features: [
            "Multi-camera setup",
            "Full day coverage",
            "Professional editing",
            "3-5 minute final cut",
            "Color grading",
            "5 revisions",
            "All format delivery",
            "Drone shots included",
          ],
        },
        {
          name: "Premium",
          price: "₹1,50,000+",
          description: "Full productions",
          features: [
            "Complete film crew",
            "Multi-day shoots",
            "Cinema-quality editing",
            "Unlimited duration",
            "Advanced VFX",
            "Professional sound design",
            "Unlimited revisions",
            "Raw footage included",
            "DCP for theatrical release",
          ],
        },
      ]}
      gallery={[
        "/cinematography-hero.jpg",
        "/gallery-wedding.jpg",
        "/gallery-corporate.jpg",
        "/gallery-concert.jpg",
        "/behind-the-scenes-hero.jpg",
        "/home-hero.jpg",
      ]}
    />
  )
}
