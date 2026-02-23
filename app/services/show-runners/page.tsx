import { ServicePageLayout } from "@/components/service-page-layout"

export const metadata = {
  title: "Show Runners | PJ Entertainment",
  description:
    "Expert show runners and event directors for flawless event execution. Complete stage management and coordination services.",
}

export default function ShowRunnersPage() {
  return (
    <ServicePageLayout
      title="Show Runners"
      tagline="Flawless Execution"
      description="Leave the stress of event management to our expert show runners. We handle every detail from backstage coordination to on-stage cues, ensuring your event runs seamlessly from start to finish."
      heroImage="/show-runners-hero.jpg"
      features={[
        "Complete event direction",
        "Stage management",
        "Artist coordination",
        "Technical crew management",
        "Timeline & cue management",
        "Vendor coordination",
        "Backstage operations",
        "Emergency contingency",
        "VIP management",
        "Guest coordination",
        "Sound & light cues",
        "Live show direction",
      ]}
      process={[
        {
          step: 1,
          title: "Planning",
          description: "Detailed event planning, timeline creation, and coordination with all stakeholders.",
        },
        {
          step: 2,
          title: "Pre-Event",
          description: "Technical rehearsals, vendor briefings, and contingency planning.",
        },
        {
          step: 3,
          title: "Execution",
          description: "Real-time show direction ensuring smooth flow of all elements.",
        },
        {
          step: 4,
          title: "Wrap-Up",
          description: "Organized event closure, vendor settlement, and post-event report.",
        },
      ]}

      gallery={[
        "/show-runner1.jpeg",
        "/show-runner2.jpeg",
        "/show-runner3.jpeg",
        "/home-hero.jpg",
        "/show-runners-hero.jpg",
        "/behindthescene3.png",
      ]}
      galleryImageClassName="object-top"
    />
  )
}
