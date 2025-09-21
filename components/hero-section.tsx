"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="home" className="bg-gradient-to-br from-muted to-background py-16 lg:py-24 xl:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 lg:mb-6 text-balance leading-tight">
            {t("hero.title")}
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-primary font-semibold mb-4 lg:mb-6 text-balance">
            {t("hero.subtitle")}
          </p>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 lg:mb-12 text-pretty max-w-3xl mx-auto">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center mb-12 lg:mb-16">
            <Button size="lg" className="text-sm lg:text-base">
              {t("hero.cta")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-sm lg:text-base"
            >
              {t("hero.contact")}
            </Button>
          </div>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="bg-card p-4 lg:p-6 rounded-lg border border-border">
              <Phone className="h-6 w-6 lg:h-8 lg:w-8 text-primary mx-auto mb-3 lg:mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2 text-sm lg:text-base">Phone</h3>
              <p className="text-muted-foreground text-sm lg:text-base">(786) 443-9212</p>
            </div>

            <div className="bg-card p-4 lg:p-6 rounded-lg border border-border">
              <Mail className="h-6 w-6 lg:h-8 lg:w-8 text-primary mx-auto mb-3 lg:mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2 text-sm lg:text-base">Email</h3>
              <p className="text-muted-foreground text-sm lg:text-base break-all">jvbusiness.services@yahoo.com</p>
            </div>

            <div className="bg-card p-4 lg:p-6 rounded-lg border border-border sm:col-span-2 lg:col-span-1">
              <Clock className="h-6 w-6 lg:h-8 lg:w-8 text-primary mx-auto mb-3 lg:mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2 text-sm lg:text-base">Availability</h3>
              <p className="text-muted-foreground text-sm lg:text-base">24/7 - Every day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
