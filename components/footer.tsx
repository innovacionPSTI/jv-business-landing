"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { translations } = useLanguage()

  return (
    <footer className="bg-sidebar border-t border-sidebar-border">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/jv-logo.png"
                alt="JV Business Services LLC"
                width={48}
                height={48}
                className="h-8 md:h-10 w-auto"
              />
            </div>
            <p className="text-sidebar-foreground text-sm">{translations.footer.description}</p>
            <p className="text-sidebar-foreground text-sm font-semibold">"{translations.footer.slogan}"</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sidebar-foreground mb-4 text-sm md:text-base">
              {translations.footer.services.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {translations.footer.services.list.map((service, index) => (
                <li key={index}>
                  <Link
                    href="#services"
                    className="text-sidebar-foreground hover:text-sidebar-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sidebar-foreground mb-4 text-sm md:text-base">
              {translations.footer.contact.title}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-sidebar-primary flex-shrink-0" />
                <span className="text-sm text-sidebar-foreground">(786) 443-9212</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-sidebar-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-sidebar-foreground break-all">info@jvbusinessservices.com</span>
              </div>
              <div className="text-sm text-sidebar-foreground">
                <strong>Jaime Villegas</strong>
                <br />
                {translations.footer.contact.manager}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-sm text-sidebar-foreground">{translations.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
