"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, Sparkles, Shield, Wrench, Zap, Brush, Factory } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Factory,
      title: t("services.production.title"),
      description: t("services.production.desc"),
      items: ["Manufacturing staff", "Warehouse operations", "Industrial workers", "Quality control"],
    },
    {
      icon: Building2,
      title: t("services.cleaning.title"),
      description: t("services.cleaning.desc"),
      items: ["Office cleaning", "Public areas", "Window cleaning", "Floor maintenance"],
    },
    {
      icon: Users,
      title: t("services.staffing.title"),
      description: t("services.staffing.desc"),
      items: ["Event staff", "Hospitality service", "Bilingual staff", "Complete coverage"],
    },
    {
      icon: Shield,
      title: t("services.disinfection.title"),
      description: t("services.disinfection.desc"),
      items: ["UV disinfection", "EPA approved products", "Electrostatic equipment", "CDC protocols"],
    },
    {
      icon: Wrench,
      title: t("services.maintenance.title"),
      description: t("services.maintenance.desc"),
      items: ["Floor waxing", "Maintenance", "Specialized care", "Regular service"],
    },
    {
      icon: Zap,
      title: t("services.pressure.title"),
      description: t("services.pressure.desc"),
      items: ["Parking lots", "Exterior cleaning", "High pressure", "Outdoor areas"],
    },
    {
      icon: Brush,
      title: t("services.specialized.title"),
      description: t("services.specialized.desc"),
      items: ["Carpet cleaning", "Kitchen cleaning", "Bathroom cleaning", "Latest technology"],
    },
  ]

  return (
    <section id="services" className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 lg:mb-6 text-balance">
            {t("services.title")}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Video Gallery */}
        <div className="mb-12 lg:mb-16">
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src="/videos/jv-bussines-staffing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src="/videos/public-event-staffing-specialists.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow h-full">
              <CardHeader className="pb-3 lg:pb-4">
                <service.icon className="h-8 w-8 lg:h-12 lg:w-12 text-primary mb-3 lg:mb-4" />
                <CardTitle className="text-card-foreground text-base lg:text-lg">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-sm lg:text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-xs lg:text-sm text-muted-foreground">
                      <Sparkles className="h-3 w-3 lg:h-4 lg:w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
