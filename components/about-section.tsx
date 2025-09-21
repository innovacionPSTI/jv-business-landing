"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Clock, Award, Shield } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Users,
      title: t("about.staff.title"),
      description: t("about.staff.desc"),
    },
    {
      icon: Clock,
      title: t("about.available.title"),
      description: t("about.available.desc"),
    },
    {
      icon: Award,
      title: t("about.guarantee.title"),
      description: t("about.guarantee.desc"),
    },
    {
      icon: Shield,
      title: t("about.experience.title"),
      description: t("about.experience.desc"),
    },
  ]

  return (
    <section id="about" className="py-16 lg:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 lg:mb-6 text-balance">
              {t("about.title")}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 lg:mb-6 text-pretty">
              We are driven by the intention to meet the market needs for commercial cleaning services. We have grown
              rapidly, coming to handle large accounts in the area we cover.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8 text-pretty">
              Our good and timely service has always characterized us because we provide our customers with the coverage
              that requires their exact needs with personalized service, being managed by the owner.
            </p>

            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-primary mr-3 flex-shrink-0" />
                <span className="text-foreground text-sm lg:text-base">Constantly trained staff</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-primary mr-3 flex-shrink-0" />
                <span className="text-foreground text-sm lg:text-base">Specialized equipment and chemicals</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-primary mr-3 flex-shrink-0" />
                <span className="text-foreground text-sm lg:text-base">Owner-managed service</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border h-full">
                <CardContent className="p-3 sm:p-4 lg:p-6 text-center h-full flex flex-col justify-center">
                  <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary mx-auto mb-2 lg:mb-4" />
                  <h3 className="font-semibold text-card-foreground mb-1 lg:mb-2 text-xs sm:text-sm lg:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-muted-foreground leading-tight">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
