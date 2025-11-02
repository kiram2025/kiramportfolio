"use client"

import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "Network Engineer",
    company: "Tech Solutions Inc.",
    content:
      "Kiram Academy transformed my career. The hands-on labs and expert instruction helped me pass my CCNA on the first try. Within 3 months, I landed my dream job.",
    rating: 5,
    image: "/professional-male-portrait.png",
  },
  {
    name: "Sarah Mohammed",
    role: "Small Business Owner",
    company: "Local Entrepreneur",
    content:
      "Kiram Coffeeshop has become my second office. The atmosphere is perfect for productivity, and the community events have helped me network and grow my business.",
    rating: 5,
    image: "/professional-female-portrait.png",
  },
  {
    name: "Omar Ali",
    role: "IT Student",
    company: "Kiram Academy Graduate",
    content:
      "The comprehensive curriculum and supportive instructors at Kiram Academy gave me the confidence and skills I needed. I'm now pursuing my CEH certification.",
    rating: 5,
    image: "/young-male-student.png",
  },
  {
    name: "Fatima Ibrahim",
    role: "Restaurant Patron",
    company: "Regular Customer",
    content:
      "Kiram Restaurant never disappoints. The quality of food, the ambiance, and the service are consistently excellent. It's our go-to place for family celebrations.",
    rating: 5,
    image: "/professional-female-portrait-smiling.jpg",
  },
  {
    name: "Yusuf Ahmed",
    role: "Food Enthusiast",
    company: "Burger Lover",
    content:
      "Kiram Special Burger has ruined all other burgers for me! The quality of ingredients and unique flavor combinations are unmatched. Worth every visit.",
    rating: 5,
    image: "/young-male-portrait-casual.jpg",
  },
  {
    name: "Amina Osman",
    role: "Business Partner",
    company: "Logistics Company",
    content:
      "Working with Kiramuddin and the Kiram Organization team has been exceptional. Their professionalism, vision, and execution are truly impressive.",
    rating: 5,
    image: "/professional-businesswoman-portrait.png",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">What People Say</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hear from students, customers, and partners who have experienced the Kiram Organization difference.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />

              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm mb-3">"{testimonial.content}"</p>

              <p className="text-xs text-muted-foreground font-medium">{testimonial.company}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
