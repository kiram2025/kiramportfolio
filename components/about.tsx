"use client"

import { Award, Target, Users, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function About() {
  const milestones = [
    { year: "2020", event: "Founded Kiram Organization" },
    { year: "2021", event: "Launched Kiram Academy with certification programs" },
    { year: "2022", event: "Opened Kiram Coffeeshop & Restaurant" },
    { year: "2023", event: "Introduced Kiram Special Burger & Store" },
    { year: "2024", event: "Launched Kiram Airport concept" },
  ]

  const values = [
    {
      icon: Target,
      title: "Vision",
      description: "To create sustainable businesses that empower communities and drive innovation.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Leveraging technology and creativity to solve real-world challenges.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building spaces and services that bring people together and create opportunities.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality in every venture we undertake.",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">About the Founder</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kiramuddin is an entrepreneur and visionary who believes in the power of diverse ventures to create lasting
            impact. From education to hospitality and aviation, each division of Kiram Organization reflects a
            commitment to excellence, innovation, and community empowerment.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <value.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">Journey & Milestones</h3>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-px h-full bg-border relative">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background group-hover:scale-125 transition-transform" />
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-lg font-medium">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
