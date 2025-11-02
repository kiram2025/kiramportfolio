"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, ImageIcon, Award } from "lucide-react"

export default function Media() {
  const downloads = [
    {
      icon: FileText,
      title: "Professional Resume",
      description: "Complete professional background and achievements",
      filename: "Kiramuddin_Resume.pdf",
    },
    {
      icon: Award,
      title: "Sample Certificate",
      description: "Example of Kiram Academy certification",
      filename: "Sample_Certificate.pdf",
    },
    {
      icon: ImageIcon,
      title: "Press Kit",
      description: "High-resolution images and brand assets",
      filename: "Kiram_Organization_Press_Kit.zip",
    },
  ]

  return (
    <section id="media" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Media & Downloads</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Access press materials, professional documents, and brand assets.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {downloads.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <Button variant="outline" className="w-full group bg-transparent">
                  <Download className="h-4 w-4 mr-2 transition-transform group-hover:translate-y-1" />
                  Download
                </Button>
                <span className="text-xs text-muted-foreground mt-2">{item.filename}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">6</div>
            <div className="text-sm text-muted-foreground">Active Divisions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Customers Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
