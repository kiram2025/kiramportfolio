"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Navigation />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Founder & Visionary</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">Kiramuddin</h1>

            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">Founder of Kiram Organization</p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Building education, hospitality, and aviation with passion and technology. Creating opportunities and
              transforming industries through innovation.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="group" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className={`relative ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl rotate-6 blur-2xl" />
              <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 to-secondary/20 rounded-3xl -rotate-6 blur-2xl" />

              {/* Main image container */}
              <div className="relative bg-card rounded-3xl overflow-hidden border border-border shadow-2xl">
             
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-muted-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  )
}
