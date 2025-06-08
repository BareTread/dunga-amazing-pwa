"use client"

// Removed framer-motion for deployment compatibility
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
// Removed toast for deployment compatibility
import { 
  Zap, 
  Palette, 
  Smartphone, 
  Shield, 
  Rocket, 
  Heart,
  Code,
  Globe,
  Layers,
  Sparkles
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Optimized for speed with Next.js 15",
    details: "Server-side rendering, static generation, and automatic code splitting ensure your app loads instantly.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Palette,
    title: "Beautiful Design System",
    description: "shadcn/ui components with Tailwind CSS",
    details: "Consistent, accessible, and customizable components that look great out of the box.",
    color: "from-pink-400 to-purple-500"
  },
  {
    icon: Smartphone,
    title: "Progressive Web App",
    description: "Install on any device",
    details: "Native app experience with offline support, push notifications, and home screen installation.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Type Safety",
    description: "Built with TypeScript",
    details: "Catch errors at compile time and enjoy excellent IntelliSense support.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Code,
    title: "Developer Experience",
    description: "Hot reload and modern tooling",
    details: "Fast refresh, excellent debugging tools, and a delightful development workflow.",
    color: "from-indigo-400 to-blue-500"
  },
  {
    icon: Globe,
    title: "SEO Optimized",
    description: "Built for search engines",
    details: "Server-side rendering and meta tag management for excellent SEO performance.",
    color: "from-teal-400 to-green-500"
  },
  {
    icon: Layers,
    title: "Component Library",
    description: "Reusable UI components",
    details: "A comprehensive set of components built with Radix UI primitives.",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Rocket,
    title: "Modern Architecture",
    description: "Latest React patterns",
    details: "Server Components, Suspense, and other cutting-edge React features.",
    color: "from-orange-400 to-red-500"
  }
]

export default function Features() {
  const handleFeatureClick = (title: string) => {
    alert(`Feature Explored! 🎉\n${title} - This could open a detailed view!`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Comprehensive Features
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Everything You Need
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Dunga comes packed with modern features and tools to help you build amazing web applications faster than ever.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group cursor-pointer"
                onClick={() => handleFeatureClick(feature.title)}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
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
                      {feature.details}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        <div
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-0">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Build Something Amazing?</CardTitle>
              <CardDescription className="text-lg">
                Start your next project with Dunga and experience the difference
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="group">
                  Get Started
                  <Rocket className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  View Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
