"use client"

import { useState, useEffect } from "react"
// Removed framer-motion for deployment compatibility
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, X, Smartphone, Sparkles } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      // Show prompt after a delay for better UX
      setTimeout(() => setShowInstallPrompt(true), 3000)
    }

    const appInstalledHandler = () => {
      setIsInstalled(true)
      setShowInstallPrompt(false)
      toast({
        title: "🎉 App Installed!",
        description: "Dunga has been installed successfully. You can now access it from your home screen!",
      })
    }

    window.addEventListener('beforeinstallprompt', handler)
    window.addEventListener('appinstalled', appInstalledHandler)

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
      window.removeEventListener('appinstalled', appInstalledHandler)
    }
  }, [toast])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    try {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice

      if (outcome === 'accepted') {
        toast({
          title: "Installing...",
          description: "Dunga is being installed on your device!",
        })
      }

      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    } catch (error) {
      toast({
        title: "Installation failed",
        description: "There was an issue installing the app. Please try again.",
      })
    }
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
    // Don't show again for this session
    sessionStorage.setItem('installPromptDismissed', 'true')
  }

  // Don't show if already installed or dismissed
  if (isInstalled || !showInstallPrompt || sessionStorage.getItem('installPromptDismissed')) {
    return null
  }

  return (
    <AnimatePresence>
      {showInstallPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="fixed bottom-4 right-4 w-80 z-50"
        >
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
                  onClick={handleDismiss}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription className="text-sm">
                Get the full app experience with offline access, faster loading, and native features!
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
                  onClick={handleDismiss}
                >
                  Maybe Later
                </Button>
              </div>

              <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                ✨ Works offline • 🚀 Faster loading • 📱 Native feel
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
