"use client"

// Removed framer-motion for deployment compatibility

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div
          className="relative"
        >
          {/* Animated logo */}
          <div
            className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center"
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-2xl font-bold text-white">D</span>
          </div>

          {/* Loading text */}
          <motion.h2
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
          >
            Loading Dunga
          </motion.h2>

          {/* Animated dots */}
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-64 h-2 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mt-8 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
                duration: 3 + Math.random() * 2,
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
