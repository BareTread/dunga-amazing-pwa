# Dunga - Modern Next.js PWA

A beautiful, modern Progressive Web App built with Next.js 15, shadcn/ui, and Tailwind CSS.

## ✨ Features

### 🚀 Core Technologies
- **Next.js 15** with App Router and Server Components
- **React 19** with latest features and Suspense
- **TypeScript** for complete type safety
- **Tailwind CSS** for utility-first styling
- **Turbopack** for lightning-fast development

### 🎨 UI & Design
- **shadcn/ui** components with Radix UI primitives
- **Framer Motion** for smooth animations
- **Dark/Light Mode** with next-themes
- **Responsive Design** for all screen sizes
- **Beautiful Gradients** and modern aesthetics

### 📱 PWA Capabilities
- **Installable** on any device (mobile, desktop, tablet)
- **Offline Support** with advanced service worker
- **Background Sync** for offline actions
- **Push Notifications** ready
- **App-like Experience** with standalone display
- **Smart Install Prompts** with enhanced UX

### 🔧 Developer Experience
- **Hot Reload** with instant updates
- **Performance Monitoring** in development
- **Toast Notifications** system
- **Error Boundaries** with beautiful 404 page
- **Loading States** with animated components
- **ESLint & Prettier** configured

### 🎯 Advanced Features
- **Animated Components** with Framer Motion
- **Theme Toggle** with system preference detection
- **Enhanced Navigation** with active states
- **Smart Caching** strategies
- **SEO Optimized** with proper meta tags
- **Accessibility** focused components

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 PWA Features

- **Installable**: Add to home screen on mobile and desktop
- **Offline Support**: Basic caching with service worker
- **App-like Experience**: Standalone display mode
- **Install Prompt**: Smart installation prompts for users

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **PWA**: Custom service worker

## 📁 Project Structure

```
src/
├── app/                 # App Router pages
│   ├── about/          # About page
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   └── install-prompt.tsx
└── lib/
    └── utils.ts       # Utility functions

public/
├── manifest.json      # PWA manifest
├── sw.js             # Service worker
└── icon.svg          # App icon
```

## 🎨 Components

### shadcn/ui Components
- **Button** - Multiple variants and sizes
- **Card** - Flexible content containers
- **Badge** - Status and category indicators
- **Toast** - Notification system

### Custom Components
- **Navigation** - Animated header with theme toggle
- **AnimatedHero** - Eye-catching hero section
- **FeaturesGrid** - Interactive feature showcase
- **InstallPrompt** - Smart PWA installation prompts
- **Footer** - Comprehensive site footer
- **PerformanceMonitor** - Real-time performance metrics
- **ThemeToggle** - Dark/light mode switcher

### Pages
- **Home** - Landing page with hero and features
- **About** - Information about the project
- **Features** - Detailed feature showcase
- **404** - Beautiful error page
- **Loading** - Animated loading states
- **Offline** - Offline fallback page

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🤝 Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## 📄 License

This project is open source and available under the MIT License.
