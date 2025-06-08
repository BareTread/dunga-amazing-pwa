"use client"

// Removed framer-motion for deployment
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Github, 
  Twitter, 
  Heart, 
  Zap, 
  Code, 
  Sparkles,
  ArrowUp
} from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative mt-20 border-t border-slate-200/50 dark:border-slate-700/50 bg-gradient-to-r from-slate-50/50 to-blue-50/50 dark:from-slate-900/50 dark:to-slate-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div
            className="md:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Dunga
              </div>
              <Badge variant="secondary" className="text-xs">
                <Sparkles className="w-3 h-3 mr-1" />
                PWA
              </Badge>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-4 max-w-md">
              A modern Next.js PWA template built with shadcn/ui, TypeScript, and Tailwind CSS. 
              Perfect for building fast, beautiful, and installable web applications.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div
          >
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/features", label: "Features" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div
          >
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Built With</h3>
            <ul className="space-y-2">
              {[
                { name: "Next.js 15", icon: Zap },
                { name: "React 19", icon: Code },
                { name: "TypeScript", icon: Sparkles },
                { name: "Tailwind CSS", icon: Heart },
              ].map((tech) => {
                const Icon = tech.icon
                return (
                  <li key={tech.name} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <Icon className="w-4 h-4" />
                    {tech.name}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="mt-12 pt-8 border-t border-slate-200/50 dark:border-slate-700/50 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <span>&copy; 2024 Dunga. Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and lots of coffee ☕</span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="group"
          >
            <ArrowUp className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-r from-pink-500/5 to-blue-500/5 rounded-full blur-3xl" />
      </div>
    </footer>
  )
}
