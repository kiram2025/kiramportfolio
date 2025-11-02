"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Coffee, UtensilsCrossed, Sandwich, ShoppingBag, Plane } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const projects = [
  {
    id: "academy",
    icon: GraduationCap,
    title: "Kiram Academy",
    subtitle: "Professional IT Training & Certification",
    description:
      "Comprehensive IT education platform offering industry-recognized certifications and hands-on training.",
    image: "/modern-it-training-lab-with-computers.jpg",
    color: "from-blue-500/20 to-cyan-500/20",
    details: {
      overview:
        "Kiram Academy is a premier IT training institution dedicated to empowering students with cutting-edge technical skills and industry-recognized certifications.",
      challenge:
        "The IT industry demands practical, hands-on experience alongside theoretical knowledge. Many training programs fail to bridge this gap.",
      features: [
        "CCNA, CCNP, Network+, A+, CEH certification paths",
        "State-of-the-art hands-on labs with real equipment",
        "Comprehensive video tutorials and PDF resources",
        "Expert instructors with industry experience",
        "Flexible learning schedules",
        "Job placement assistance",
      ],
      impact: "Over 500+ students trained with 85% certification pass rate and 70% job placement success.",
      why: "In today's digital world, quality IT education is the foundation for career success. Kiram Academy bridges the gap between education and employment.",
    },
  },
  {
    id: "coffeeshop",
    icon: Coffee,
    title: "Kiram Coffeeshop",
    subtitle: "Community Hub & Artisan Coffee",
    description: "A welcoming space where great coffee meets community connection and creativity.",
    image: "/modern-cozy-coffeeshop-interior.jpg",
    color: "from-amber-500/20 to-orange-500/20",
    details: {
      overview:
        "Kiram Coffeeshop is more than just a place for coffee—it's a community hub where people connect, work, and create.",
      challenge:
        "Creating a space that balances quality coffee service with a welcoming atmosphere for diverse community needs.",
      features: [
        "Artisan coffee from locally sourced beans",
        "Comfortable workspace with free WiFi",
        "Community events and workshops",
        "Fresh pastries and light meals",
        "Meeting spaces for small groups",
        "Local art displays",
      ],
      impact: "Serving 200+ customers daily and hosting 15+ community events monthly.",
      why: "Great coffee and community connection are essential ingredients for a thriving neighborhood.",
    },
  },
  {
    id: "restaurant",
    icon: UtensilsCrossed,
    title: "Kiram Restaurant",
    subtitle: "Culinary Excellence & Hospitality",
    description: "Fine dining experience featuring diverse cuisines and exceptional service.",
    image: "/elegant-restaurant-dining-room.jpg",
    color: "from-red-500/20 to-pink-500/20",
    details: {
      overview:
        "Kiram Restaurant offers an exceptional dining experience with a focus on quality ingredients, innovative recipes, and warm hospitality.",
      challenge:
        "Delivering consistent quality while offering diverse menu options that cater to various tastes and dietary preferences.",
      features: [
        "Diverse international and local cuisine",
        "Fresh, locally-sourced ingredients",
        "Private dining rooms for events",
        "Professional catering services",
        "Seasonal menu updates",
        "Wine and beverage selection",
      ],
      impact: "1000+ satisfied diners monthly with 4.8-star average rating.",
      why: "Food brings people together. We create memorable dining experiences that celebrate culture and community.",
    },
  },
  {
    id: "burger",
    icon: Sandwich,
    title: "Kiram Special Burger",
    subtitle: "Signature Burgers & Fast Casual",
    description: "Gourmet burgers crafted with premium ingredients and unique flavor combinations.",
    image: "/gourmet-burger-with-fresh-ingredients.jpg",
    color: "from-yellow-500/20 to-red-500/20",
    details: {
      overview:
        "Kiram Special Burger elevates the classic burger experience with premium ingredients and creative flavor profiles.",
      challenge: "Standing out in a competitive fast-casual market while maintaining quality and speed of service.",
      features: [
        "Signature burger recipes with unique sauces",
        "Premium beef and alternative protein options",
        "Fresh-cut fries and sides",
        "Customizable burger options",
        "Quick service without compromising quality",
        "Delivery and takeout available",
      ],
      impact: "500+ burgers sold weekly with growing customer loyalty program.",
      why: "Everyone loves a great burger. We're redefining fast casual with quality ingredients and bold flavors.",
    },
  },
  {
    id: "store",
    icon: ShoppingBag,
    title: "Kiram Store",
    subtitle: "Products & Learning Marketplace",
    description: "Curated marketplace offering quality products and educational resources.",
    image: "/modern-retail-interior.png",
    color: "from-green-500/20 to-emerald-500/20",
    details: {
      overview:
        "Kiram Store is a unique marketplace that combines quality products with educational resources, serving both consumer and learning needs.",
      challenge:
        "Creating a retail experience that seamlessly integrates physical products with digital learning materials.",
      features: [
        "Curated product selection",
        "Educational books and materials",
        "IT equipment and accessories",
        "Online and in-store shopping",
        "Student discounts available",
        "Product demonstrations and workshops",
      ],
      impact: "300+ products available with 95% customer satisfaction rate.",
      why: "Access to quality products and learning resources should be convenient and affordable for everyone.",
    },
  },
  {
    id: "airport",
    icon: Plane,
    title: "Kiram Airport",
    subtitle: "Aviation Services & Logistics",
    description: "Innovative aviation concept focused on efficient logistics and travel services.",
    image: "/modern-airport-terminal.jpg",
    color: "from-sky-500/20 to-blue-500/20",
    details: {
      overview:
        "Kiram Airport represents our vision for the future of aviation services, combining efficient logistics with exceptional passenger experience.",
      challenge: "Developing a comprehensive aviation service model that addresses modern travel and logistics needs.",
      features: [
        "Efficient passenger services",
        "Cargo and logistics solutions",
        "Modern facilities and amenities",
        "Technology-driven operations",
        "Safety-first approach",
        "Sustainable aviation practices",
      ],
      impact: "Concept in development with partnerships established for future implementation.",
      why: "Aviation connects the world. We're building services that make travel and logistics more efficient and accessible.",
    },
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Projects & Ventures</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore the diverse divisions of Kiram Organization, each designed to create value and opportunity in its
            respective industry.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <project.icon className="absolute bottom-4 right-4 h-12 w-12 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                <Button variant="link" className="mt-4 p-0 h-auto">
                  Learn more →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold flex items-center gap-3">
                  <selectedProject.icon className="h-8 w-8 text-primary" />
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />

                <div>
                  <h4 className="text-xl font-semibold mb-2">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.details.overview}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-2">Challenge</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.details.challenge}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3">Features & Services</h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {selectedProject.details.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-2">Impact & Results</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.details.impact}</p>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2">Why This Matters</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.details.why}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
