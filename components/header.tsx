"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { theme } = useTheme()

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Image
              src={theme === "light" ? "/images/jv-logo.png" : "/images/jv-logo-yellow.jpeg"}
              alt="JV Business Services LLC"
              width={60}
              height={60}
              className="h-10 w-auto lg:h-12 hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link
              href="#services"
              className="text-foreground hover:text-primary transition-colors text-sm xl:text-base"
            >
              {t("nav.services")}
            </Link>
            <Link
              href="#clients"
              className="text-foreground hover:text-primary transition-colors text-sm xl:text-base"
            >
              {t("nav.clients")}
            </Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base">
              {t("nav.about")}
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base">
              {t("nav.contact")}
            </Link>
            <button
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors text-sm xl:text-base"
            >
              <Globe size={16} />
              <span>{t("nav.languageSwitch")}</span>
            </button>
            <ThemeToggle />
            <Button
              size="sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t("hero.cta")}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="#services"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.services")}
              </Link>
              <Link
                href="#clients"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.clients")}
              </Link>
              <Link
                href="#about"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="#contact"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.contact")}
              </Link>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => {
                    setLanguage(language === "en" ? "es" : "en")
                    setIsMenuOpen(false)
                  }}
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                >
                  <Globe size={16} />
                  <span>{t("nav.languageSwitch")}</span>
                </button>
                <ThemeToggle />
              </div>
              <Button
                className="w-full"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  setIsMenuOpen(false)
                }}
              >
                {t("hero.cta")}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
