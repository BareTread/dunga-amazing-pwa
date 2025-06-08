"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Code, Users, Zap, Heart } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Built with Love
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6">
              About Dunga
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A modern web application template that combines the best of Next.js, React, and modern web technologies.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                      <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-xl">Modern Stack</CardTitle>
                  </div>
                  <CardDescription>Built with the latest technologies</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      Next.js 15 with App Router
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-500" />
                      React 19 with Server Components
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-green-500" />
                      TypeScript for type safety
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-purple-500" />
                      Tailwind CSS for styling
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-pink-500" />
                      shadcn/ui for components
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/10 to-blue-500/10">
                      <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="text-xl">PWA Features</CardTitle>
                  </div>
                  <CardDescription>Progressive Web App capabilities</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-500" />
                      Installable on any device
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-green-500" />
                      Offline functionality
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-purple-500" />
                      Push notifications ready
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-pink-500" />
                      App-like experience
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-orange-500" />
                      Responsive design
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <Card className="text-center">
            <CardHeader>
              <CardTitle>Ready to build something amazing?</CardTitle>
              <CardDescription>
                This template gives you everything you need to create modern web applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 justify-center">
                <Link href="/">
                  <Button>Back to Home</Button>
                </Link>
                <Button variant="outline">View on GitHub</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
