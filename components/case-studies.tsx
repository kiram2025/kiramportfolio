"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Award } from "lucide-react"

const caseStudies = [
  {
    title: "Kiram Academy: Transforming IT Education",
    category: "Education",
    icon: Award,
    problem:
      "Students struggled to find quality IT training that combined theoretical knowledge with practical, hands-on experience needed for industry certifications.",
    approach: [
      "Developed comprehensive curriculum covering CCNA, CCNP, Network+, A+, and CEH",
      "Built state-of-the-art labs with real networking equipment",
      "Created extensive video library and PDF resources for self-paced learning",
      "Hired industry-experienced instructors with active certifications",
      "Implemented job placement assistance program",
    ],
    impact: [
      "500+ students successfully trained",
      "85% certification pass rate (industry average: 65%)",
      "70% job placement within 6 months",
      "95% student satisfaction rating",
      "Partnerships with 20+ local tech companies",
    ],
    image: "/students-in-it-training-lab.jpg",
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Kiram Coffeeshop: Building Community Through Coffee",
    category: "Hospitality",
    icon: Users,
    problem:
      "The local community lacked a welcoming third space where people could work, connect, and participate in cultural events.",
    approach: [
      "Designed comfortable workspace with reliable WiFi and power outlets",
      "Sourced premium coffee beans from local suppliers",
      "Launched monthly community events (open mic, art shows, workshops)",
      "Created flexible seating arrangements for individuals and groups",
      "Partnered with local artists for rotating gallery displays",
    ],
    impact: [
      "200+ daily customers with 60% repeat rate",
      "15+ community events hosted monthly",
      "Featured in 3 local publications",
      "40% increase in foot traffic to neighboring businesses",
      "Became preferred meeting spot for 10+ local organizations",
    ],
    image: "/community-gathering-in-coffeeshop.jpg",
    color: "from-amber-500/10 to-orange-500/10",
  },
  {
    title: "Kiram Special Burger: Redefining Fast Casual",
    category: "Food Service",
    icon: TrendingUp,
    problem:
      "Fast food customers wanted quality ingredients and unique flavors without sacrificing convenience or affordability.",
    approach: [
      "Developed signature burger recipes with house-made sauces",
      "Sourced premium beef and introduced plant-based options",
      "Implemented efficient kitchen workflow for 5-minute service",
      "Created customization system for dietary preferences",
      "Launched loyalty program with mobile app integration",
    ],
    impact: [
      "500+ burgers sold weekly",
      "4.7-star average rating across platforms",
      "300+ active loyalty program members",
      "25% month-over-month growth in first year",
      "Expanded to delivery partnerships with 3 major platforms",
    ],
    image: "/gourmet-burger-prep.png",
    color: "from-yellow-500/10 to-red-500/10",
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Case Studies</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Deep dives into how Kiram Organization ventures solve real problems and create measurable impact.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className={`relative h-64 lg:h-auto bg-gradient-to-br ${study.color}`}>
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-medium">{study.category}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <study.icon className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold text-balance">{study.title}</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <span className="text-primary">→</span> Problem
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <span className="text-primary">→</span> Approach
                      </h4>
                      <ul className="space-y-2">
                        {study.approach.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <span className="text-primary">→</span> Impact
                      </h4>
                      <ul className="space-y-2">
                        {study.impact.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1">✓</span>
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
