"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap, Wifi, Clock, X } from "lucide-react"

interface PerformanceMetrics {
  loadTime: number
  connectionType: string
  isOnline: boolean
  memoryUsage?: number
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [showMonitor, setShowMonitor] = useState(false)

  useEffect(() => {
    const getPerformanceMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart
      
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
      const connectionType = connection ? connection.effectiveType || 'unknown' : 'unknown'
      
      const memoryInfo = (performance as any).memory
      const memoryUsage = memoryInfo ? Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024) : undefined

      setMetrics({
        loadTime: Math.round(loadTime),
        connectionType,
        isOnline: navigator.onLine,
        memoryUsage
      })
    }

    // Get initial metrics
    if (document.readyState === 'complete') {
      getPerformanceMetrics()
    } else {
      window.addEventListener('load', getPerformanceMetrics)
    }

    // Show monitor after a delay (only in development)
    const timer = setTimeout(() => {
      if (process.env.NODE_ENV === 'development') {
        setShowMonitor(true)
      }
    }, 5000)

    // Listen for online/offline events
    const handleOnline = () => setMetrics(prev => prev ? { ...prev, isOnline: true } : null)
    const handleOffline = () => setMetrics(prev => prev ? { ...prev, isOnline: false } : null)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('load', getPerformanceMetrics)
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
      clearTimeout(timer)
    }
  }, [])

  if (!metrics || !showMonitor) return null

  const getConnectionColor = (type: string) => {
    switch (type) {
      case '4g': return 'bg-green-500'
      case '3g': return 'bg-yellow-500'
      case '2g': return 'bg-red-500'
      case 'slow-2g': return 'bg-red-600'
      default: return 'bg-gray-500'
    }
  }

  const getLoadTimeColor = (time: number) => {
    if (time < 100) return 'text-green-600'
    if (time < 300) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <AnimatePresence>
      {showMonitor && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="fixed top-4 right-4 w-80 z-50"
        >
          <Card className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  Performance Monitor
                  <Badge variant="outline" className="text-xs">DEV</Badge>
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowMonitor(false)}
                  className="h-6 w-6"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Load Time */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Load Time</span>
                </div>
                <span className={`text-sm font-mono ${getLoadTimeColor(metrics.loadTime)}`}>
                  {metrics.loadTime}ms
                </span>
              </div>

              {/* Connection */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wifi className={`w-4 h-4 ${metrics.isOnline ? 'text-green-500' : 'text-red-500'}`} />
                  <span className="text-sm">Connection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${getConnectionColor(metrics.connectionType)}`} />
                  <span className="text-sm font-mono uppercase">
                    {metrics.connectionType}
                  </span>
                </div>
              </div>

              {/* Memory Usage */}
              {metrics.memoryUsage && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-purple-500 rounded-sm flex items-center justify-center">
                      <span className="text-xs text-white font-bold">M</span>
                    </div>
                    <span className="text-sm">Memory</span>
                  </div>
                  <span className="text-sm font-mono text-purple-600">
                    {metrics.memoryUsage}MB
                  </span>
                </div>
              )}

              {/* Status */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${metrics.isOnline ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                  <span className="text-xs text-slate-600 dark:text-slate-300">
                    {metrics.isOnline ? 'Online' : 'Offline'} • PWA Ready
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
