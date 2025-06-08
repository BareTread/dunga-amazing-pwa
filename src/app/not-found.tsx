"use client"

// Removed framer-motion for deployment compatibility
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-pink-50 dark:from-slate-900 dark:via-red-900/20 dark:to-pink-900/20 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        <div
        >
          {/* Animated 404 */}
          <div
            className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-8"
              scale: [1, 1.05, 1],
            }}
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            404
          </div>

          <motion.h1
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4"
          >
            Oops! Page Not Found
          </motion.h1>

          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 mb-8"
          >
            The page you're looking for seems to have wandered off into the digital void.
          </motion.p>

          <div
            className="mb-8"
          >
            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Search className="w-5 h-5" />
                  What can you do?
                </CardTitle>
                <CardDescription>
                  Here are some helpful options to get you back on track
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-left">
                    <h4 className="font-semibold mb-2">Quick Navigation</h4>
                    <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                      <li>• Go back to the homepage</li>
                      <li>• Check out our features</li>
                      <li>• Learn more about Dunga</li>
                    </ul>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold mb-2">Possible Issues</h4>
                    <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                      <li>• Mistyped URL</li>
                      <li>• Outdated bookmark</li>
                      <li>• Page moved or deleted</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/">
              <Button size="lg" className="group">
                <Home className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Go Home
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button>
          </div>

          {/* Floating sad emoji */}
          <div
            className="text-6xl mt-8"
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            😢
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-red-500/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
