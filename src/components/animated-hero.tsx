"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"

export function AnimatedHero() {
  return (
    <div className="text-center mb-16 animate-fade-in">
      <div className="flex justify-center mb-4">
        <Badge variant="secondary" className="mb-4 px-4 py-2 animate-bounce">
          <Sparkles className="w-4 h-4 mr-2" />
          🚀 Now with PWA Support
        </Badge>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6 animate-slide-up">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
          Dunga
        </span>
      </h1>

      <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto animate-slide-up-delay">
        A modern Next.js PWA built with shadcn/ui components. Fast, responsive, and beautiful.
        Install it on your device for the best experience!
      </p>

      <div className="flex gap-4 justify-center animate-slide-up-delay-2">
        <Button size="lg" className="group">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button variant="outline" size="lg">
          Learn More
        </Button>
      </div>

      {/* Floating elements with CSS animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float-delay" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-float-delay-2" />
      </div>
    </div>
  )
}
