"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Palette, Smartphone, Shield, Rocket, Heart } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "⚡ Lightning Fast",
    description: "Built with Next.js 15 and optimized for performance",
    content: "Server-side rendering, static generation, and automatic code splitting for lightning-fast load times.",
    badge: "Performance"
  },
  {
    icon: Palette,
    title: "🎨 Beautiful Design",
    description: "Designed with shadcn/ui and Tailwind CSS",
    content: "Modern, accessible components with dark mode support and beautiful animations.",
    badge: "Design"
  },
  {
    icon: Smartphone,
    title: "📱 PWA Ready",
    description: "Progressive Web App capabilities built-in",
    content: "Installable, offline-capable, and mobile-optimized for the best user experience.",
    badge: "Mobile"
  },
  {
    icon: Shield,
    title: "🔒 Type Safe",
    description: "Built with TypeScript for reliability",
    content: "Full type safety throughout the application with excellent developer experience.",
    badge: "Security"
  },
  {
    icon: Rocket,
    title: "🚀 Modern Stack",
    description: "Latest technologies and best practices",
    content: "React 19, Next.js 15, Tailwind CSS, and more cutting-edge technologies.",
    badge: "Technology"
  },
  {
    icon: Heart,
    title: "💖 Developer Experience",
    description: "Built with love for developers",
    content: "Hot reload, excellent tooling, and a delightful development experience.",
    badge: "DX"
  }
]

export function FeaturesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {features.map((feature, index) => {
        const Icon = feature.icon
        return (
          <div
            key={feature.title}
            className="group animate-slide-up hover:-translate-y-1 transition-transform duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.content}
                </p>
              </CardContent>
            </Card>
          </div>
        )
      })}
    </div>
  )
}
