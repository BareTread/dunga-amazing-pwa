"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, X, Smartphone, Sparkles } from "lucide-react"

export function SimpleInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setTimeout(() => setShowInstallPrompt(true), 3000)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    try {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    } catch (error) {
      console.error('Installation failed:', error)
    }
  }

  if (!showInstallPrompt) return null

  return (
    <div className="fixed bottom-4 right-4 w-80 z-50 animate-slide-up">
      <Card className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-0 shadow-2xl shadow-blue-500/20">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-lg flex items-center gap-2">
                  Install Dunga
                  <Badge variant="secondary" className="text-xs">
                    <Sparkles className="w-3 h-3 mr-1" />
                    PWA
                  </Badge>
                </CardTitle>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowInstallPrompt(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription className="text-sm">
            Get the full app experience with offline access and faster loading!
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex gap-2">
            <Button onClick={handleInstall} size="sm" className="flex-1 group">
              <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Install Now
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowInstallPrompt(false)}
            >
              Later
            </Button>
          </div>
          
          <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">
            ✨ Works offline • 🚀 Faster loading • 📱 Native feel
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
