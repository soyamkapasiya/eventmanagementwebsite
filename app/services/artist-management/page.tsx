import { ServicePageLayout } from "@/components/service-page-layout"

export const metadata = {
  title: "Artist Management | PJ Entertainment",
  description:
    "Professional artist management services including bookings, promotions, brand deals, and career development for performers and entertainers.",
}

export default function ArtistManagementPage() {
  return (
    <ServicePageLayout
      title="Artist Management"
      tagline="Elevate Your Career"
      description="Partner with PJ Entertainment to take your artistic career to new heights. We provide comprehensive management services including bookings, brand collaborations, social media growth, and strategic career planning."
      heroImage="/artist-management-hero.jpg"
      features={[
        "Event bookings & scheduling",
        "Brand collaboration deals",
        "Contract negotiations",
        "Career strategy planning",
        "Social media management",
        "PR & publicity",
        "Portfolio development",
        "Show production support",
        "Travel & logistics",
        "Financial management",
        "Legal assistance",
        "Talent development training",
      ]}
      process={[
        {
          step: 1,
          title: "Evaluation",
          description: "Assessing your talent, current standing, and career goals.",
        },
        {
          step: 2,
          title: "Strategy",
          description: "Creating a customized roadmap for your artistic growth.",
        },
        {
          step: 3,
          title: "Execution",
          description: "Active management with bookings, promotions, and opportunities.",
        },
        {
          step: 4,
          title: "Growth",
          description: "Continuous evaluation and scaling of your career trajectory.",
        },
      ]}
      pricing={[
        {
          name: "Starter",
          price: "₹10,000/mo",
          description: "Emerging artists",
          features: [
            "Basic booking assistance",
            "Event coordination",
            "Social media guidance",
            "Monthly consultations",
            "Portfolio review",
          ],
        },
        {
          name: "Professional",
          price: "₹25,000/mo",
          description: "Established performers",
          popular: true,
          features: [
            "Dedicated manager",
            "Active booking pursuit",
            "Brand deal negotiations",
            "Social media management",
            "PR & publicity support",
            "Contract handling",
            "Weekly check-ins",
          ],
        },
        {
          name: "Elite",
          price: "Commission Based",
          description: "Top-tier artists",
          features: [
            "Full-service management",
            "Exclusive representation",
            "High-value brand deals",
            "Tour management",
            "Complete PR handling",
            "Legal team access",
            "Financial planning",
            "24/7 support",
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
