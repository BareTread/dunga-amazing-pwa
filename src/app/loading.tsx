"use client"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative animate-fade-in">
          {/* Animated logo */}
          <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center animate-pulse">
            <span className="text-2xl font-bold text-white">D</span>
          </div>

          {/* Loading text */}
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-slide-up">
            Loading Dunga
          </h2>

          {/* Animated dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>

          {/* Progress bar */}
          <div className="w-64 h-2 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mt-8 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float" style={{ left: '10%', top: '20%' }} />
          <div className="absolute w-2 h-2 bg-purple-500/20 rounded-full animate-float-delay" style={{ left: '80%', top: '30%' }} />
          <div className="absolute w-2 h-2 bg-pink-500/20 rounded-full animate-float-delay-2" style={{ left: '60%', top: '70%' }} />
        </div>
      </div>
    </div>
  )
}
