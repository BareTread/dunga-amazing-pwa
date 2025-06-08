import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { InstallPrompt } from "@/components/install-prompt"
import { Navigation } from "@/components/navigation"
import { AnimatedHero } from "@/components/animated-hero"
import { FeaturesGrid } from "@/components/features-grid"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 relative">
        <AnimatedHero />

        {/* Features Grid */}
        <FeaturesGrid />

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Ready to get started?</CardTitle>
              <CardDescription>
                Join thousands of developers building amazing apps with our stack
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 justify-center">
                <Button>Start Building</Button>
                <Button variant="outline">View Documentation</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
      <InstallPrompt />
    </div>
  );
}
