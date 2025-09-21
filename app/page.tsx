"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
