"use client"

import { useLanguage } from "@/lib/language-context"
import { useTheme } from "next-themes"
import Image from "next/image"

interface ClientLogo {
  name: string
  blackLogo: string
  whiteLogo: string
}

const clients: ClientLogo[] = [
  {
    name: "Olympia Arts",
    blackLogo: "/images/clients/blackLogo/OlympiaArts-Black.png",
    whiteLogo: "/images/clients/whiteLogo/OlympiaArts-white.png"
  },
  {
    name: "Art Basel",
    blackLogo: "/images/clients/blackLogo/artbasel-black.png",
    whiteLogo: "/images/clients/whiteLogo/artbasel-white.png"
  },
  {
    name: "Bombshell",
    blackLogo: "/images/clients/blackLogo/bombshell-black.png",
    whiteLogo: "/images/clients/whiteLogo/bombshell-white.png"
  },
  {
    name: "Bureau Betak",
    blackLogo: "/images/clients/blackLogo/bureaubetak-black.png",
    whiteLogo: "/images/clients/whiteLogo/bureaubetak-white.png"
  },
  {
    name: "Green Springs",
    blackLogo: "/images/clients/blackLogo/greensprings-black.png",
    whiteLogo: "/images/clients/whiteLogo/greensprings-white.png"
  },
  {
    name: "Hard Rock",
    blackLogo: "/images/clients/blackLogo/hardrock-black.png",
    whiteLogo: "/images/clients/whiteLogo/hardrock-white.webp"
  },
  {
    name: "Latin Grammy Awards",
    blackLogo: "/images/clients/blackLogo/latin-grammy-awards-black.png",
    whiteLogo: "/images/clients/whiteLogo/latin-grammy-awards-white.png"
  },
  {
    name: "North Gardens",
    blackLogo: "/images/clients/blackLogo/northgardens-black.png",
    whiteLogo: "/images/clients/whiteLogo/northgardens-white.png"
  },
  {
    name: "Premios Juventud",
    blackLogo: "/images/clients/blackLogo/premiosjuventud-black.png",
    whiteLogo: "/images/clients/whiteLogo/premiosjuventud-white.png"
  },
  {
    name: "Soprema",
    blackLogo: "/images/clients/blackLogo/soprema-black.png",
    whiteLogo: "/images/clients/whiteLogo/soprema-white.png"
  },
  {
    name: "Telemundo",
    blackLogo: "/images/clients/blackLogo/telemundo-black.png",
    whiteLogo: "/images/clients/whiteLogo/telemundo-white.png"
  },
  {
    name: "Tu Cara Me Suena",
    blackLogo: "/images/clients/blackLogo/tucaramesuena-black.png",
    whiteLogo: "/images/clients/whiteLogo/tucaramesuena-white.png"
  },
  {
    name: "Univision",
    blackLogo: "/images/clients/blackLogo/univision-black.png",
    whiteLogo: "/images/clients/whiteLogo/univision-white.png"
  }
]

export function ClientsSection() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  return (
    <section id="clients" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t("clients.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("clients.subtitle")}
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-infinite hover:animate-pause" style={{ width: 'max-content' }}>
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-40 h-24 mx-4 flex items-center justify-center"
              >
                <Image
                  src={theme === "dark" ? client.whiteLogo : client.blackLogo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain filter opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-40 h-24 mx-4 flex items-center justify-center"
              >
                <Image
                  src={theme === "dark" ? client.whiteLogo : client.blackLogo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain filter opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}