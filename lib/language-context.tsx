"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"

interface Translations {
  nav: {
    services: string
    clients: string
    about: string
    contact: string
    languageSwitch: string
  }
  hero: {
    title: string
    subtitle: string
    description: string
    cta: string
    contact: string
  }
  services: {
    title: string
    subtitle: string
    production: { title: string; desc: string }
    cleaning: { title: string; desc: string }
    staffing: { title: string; desc: string }
    disinfection: { title: string; desc: string }
    maintenance: { title: string; desc: string }
    pressure: { title: string; desc: string }
    specialized: { title: string; desc: string }
  }
  clients: {
    title: string
    subtitle: string
  }
  about: {
    mainTitle: string
    subtitle: string
    title: string
    description1: string
    description2: string
    highlights: string[]
    experience: { title: string; desc: string }
    staff: { title: string; desc: string }
    available: { title: string; desc: string }
    guarantee: { title: string; desc: string }
  }
  contact: {
    title: string
    subtitle: string
    successMessage: string
    info: {
      title: string
      phone: string
      available247: string
      serviceArea: string
      location: string
    }
    whyChoose: {
      title: string
      items: string[]
    }
    form: {
      title: string
      description: string
      fullName: string
      phone: string
      serviceType: string
      selectService: string
      message: string
      messagePlaceholder: string
      submit: string
      services: { value: string; label: string }[]
    }
  }
  footer: {
    description: string
    slogan: string
    services: {
      title: string
      list: string[]
    }
    contact: {
      title: string
      manager: string
    }
    copyright: string
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  translations: Translations
  t: (key: string) => string
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      services: "Services",
      clients: "Our Clients",
      about: "About",
      contact: "Contact",
      languageSwitch: "Español",
    },
    hero: {
      title: "Professional Cleaning & Staffing Services",
      subtitle: "A GOOD JOB & SERVICES DONE AT GOOD PRICE",
      description:
        "We provide quality commercial cleaning, event staffing, and disinfection services with professional, bilingual staff available 24/7.",
      cta: "Get Quote",
      contact: "Contact Us",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive cleaning and staffing solutions for your business",
      production: {
        title: "Production Staffing",
        desc: "Skilled production staff for manufacturing, warehouses, and industrial operations",
      },
      cleaning: {
        title: "Commercial Cleaning",
        desc: "Professional cleaning for offices, hotels, warehouses, and residential properties",
      },
      staffing: {
        title: "Event Staffing",
        desc: "Qualified, bilingual hospitality professionals for your events and operations",
      },
      disinfection: {
        title: "Disinfection Services",
        desc: "Specialized decontamination using hospital-grade, EPA approved disinfectants",
      },
      maintenance: {
        title: "Floor Maintenance",
        desc: "Floor specialist services including wax application and maintenance",
      },
      pressure: {
        title: "Pressure Cleaning",
        desc: "High-pressure cleaning for parking lots, exteriors, and outdoor areas",
      },
      specialized: {
        title: "Specialized Cleaning",
        desc: "Carpet, window, kitchen, and bathroom cleaning with latest technology",
      },
    },
    clients: {
      title: "Our Clients",
      subtitle: "Trusted by industry leaders and prestigious events worldwide",
    },
    about: {
      mainTitle: "About Us",
      subtitle: "Professional excellence in every service, serving South Florida since 2005",
      title: "Why Choose JV Business Services",
      description1: "We are driven by the intention to meet the market needs for commercial cleaning services. We have grown rapidly, coming to handle large accounts in the area we cover.",
      description2: "Our good and timely service has always characterized us because we provide our customers with the coverage that requires their exact needs with personalized service, being managed by the owner.",
      highlights: [
        "Constantly trained staff",
        "Specialized equipment and chemicals",
        "Owner-managed service"
      ],
      experience: {
        title: "Professional Experience",
        desc: "Years of experience in commercial and industrial services with the latest technology equipment.",
      },
      staff: {
        title: "Qualified Staff",
        desc: "Bilingual, trained professionals who understand the hospitality industry inside and out.",
      },
      available: {
        title: "24/7 Availability",
        desc: "We provide service 7 days a week, 24 hours a day without interrupting your operations.",
      },
      guarantee: {
        title: "Service Guarantee",
        desc: "We guarantee our services and will find alternatives if things don't work out.",
      },
    },
    contact: {
      title: "Contact Us",
      subtitle: "We're here to help you. Request a free quote or contact us for any questions about our services.",
      successMessage: "Thank you for your message! We will contact you soon.",
      info: {
        title: "Contact Information",
        phone: "Phone",
        available247: "Available 24/7",
        serviceArea: "Service Area",
        location: "Miami-Dade and surrounding areas",
      },
      whyChoose: {
        title: "Why choose us?",
        items: [
          "Bilingual and qualified staff",
          "Latest technology equipment and products",
          "Personalized and reliable service",
          "Competitive prices",
          "24/7 availability",
        ],
      },
      form: {
        title: "Request Quote",
        description: "Fill out the form and we will contact you soon.",
        fullName: "Full Name",
        phone: "Phone",
        serviceType: "Service Type",
        selectService: "Select a service",
        message: "Message",
        messagePlaceholder: "Describe your specific needs...",
        submit: "Send Request",
        services: [
          { value: "production-staffing", label: "Production Staffing" },
          { value: "commercial-cleaning", label: "Commercial Cleaning" },
          { value: "event-staffing", label: "Event Staffing" },
          { value: "disinfection", label: "Specialized Disinfection" },
          { value: "hotel-cleaning", label: "Hotel Cleaning" },
          { value: "residential-cleaning", label: "Residential Cleaning" },
          { value: "industrial-cleaning", label: "Industrial Cleaning" },
          { value: "other", label: "Other" },
        ],
      },
    },
    footer: {
      description:
        "JV Business Services LLC - Professional cleaning and staffing services. Committed to quality and customer satisfaction.",
      slogan: "A GOOD JOB & SERVICES DONE AT GOOD PRICE",
      services: {
        title: "Services",
        list: [
          "Production Staffing",
          "Commercial Cleaning",
          "Event Staffing",
          "Specialized Disinfection",
          "Hotel Cleaning",
          "Residential Cleaning",
        ],
      },
      contact: {
        title: "Contact",
        manager: "General Manager",
      },
      copyright: "© 2024 JV Business Services LLC. All rights reserved.",
    },
  },
  es: {
    nav: {
      services: "Servicios",
      clients: "Nuestros Clientes",
      about: "Nosotros",
      contact: "Contacto",
      languageSwitch: "English",
    },
    hero: {
      title: "Servicios Profesionales de Limpieza y Personal",
      subtitle: "UN BUEN TRABAJO Y SERVICIOS A BUEN PRECIO",
      description:
        "Brindamos servicios de calidad en limpieza comercial, personal para eventos y desinfección con personal profesional bilingüe disponible 24/7.",
      cta: "Obtener Cotización",
      contact: "Contáctanos",
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones integrales de limpieza y personal para su negocio",
      production: {
        title: "Personal de Producción",
        desc: "Personal especializado en producción para manufactura, almacenes y operaciones industriales",
      },
      cleaning: {
        title: "Limpieza Comercial",
        desc: "Limpieza profesional para oficinas, hoteles, almacenes y propiedades residenciales",
      },
      staffing: {
        title: "Personal para Eventos",
        desc: "Profesionales bilingües calificados en hospitalidad para sus eventos y operaciones",
      },
      disinfection: {
        title: "Servicios de Desinfección",
        desc: "Descontaminación especializada usando desinfectantes de grado hospitalario aprobados por EPA",
      },
      maintenance: {
        title: "Mantenimiento de Pisos",
        desc: "Servicios especializados en pisos incluyendo aplicación de cera y mantenimiento",
      },
      pressure: {
        title: "Limpieza a Presión",
        desc: "Limpieza de alta presión para estacionamientos, exteriores y áreas al aire libre",
      },
      specialized: {
        title: "Limpieza Especializada",
        desc: "Limpieza de alfombras, ventanas, cocinas y baños con la última tecnología",
      },
    },
    clients: {
      title: "Nuestros Clientes",
      subtitle: "Confianza de líderes de la industria y eventos prestigiosos a nivel mundial",
    },
    about: {
      mainTitle: "Sobre Nosotros",
      subtitle: "Excelencia profesional en cada servicio, sirviendo al sur de Florida desde 2005",
      title: "Por Qué Elegir JV Business Services",
      description1: "Nos impulsa la intención de satisfacer las necesidades del mercado en servicios de limpieza comercial. Hemos crecido rápidamente, llegando a manejar grandes cuentas en el área que cubrimos.",
      description2: "Nuestro buen y oportuno servicio siempre nos ha caracterizado porque brindamos a nuestros clientes la cobertura que requieren sus necesidades exactas con un servicio personalizado, siendo gestionado por el propietario.",
      highlights: [
        "Personal constantemente capacitado",
        "Equipos y químicos especializados",
        "Servicio gestionado por el propietario"
      ],
      experience: {
        title: "Experiencia Profesional",
        desc: "Años de experiencia en servicios comerciales e industriales con equipos de última tecnología.",
      },
      staff: {
        title: "Personal Calificado",
        desc: "Profesionales bilingües y capacitados que entienden la industria de hospitalidad por completo.",
      },
      available: {
        title: "Disponibilidad 24/7",
        desc: "Brindamos servicio 7 días a la semana, 24 horas al día sin interrumpir sus operaciones.",
      },
      guarantee: {
        title: "Garantía de Servicio",
        desc: "Garantizamos nuestros servicios y encontraremos alternativas si las cosas no funcionan.",
      },
    },
    contact: {
      title: "Contáctanos",
      subtitle:
        "Estamos aquí para ayudarte. Solicita una cotización gratuita o contáctanos para cualquier consulta sobre nuestros servicios.",
      successMessage: "¡Gracias por su mensaje! Nos pondremos en contacto pronto.",
      info: {
        title: "Información de Contacto",
        phone: "Teléfono",
        available247: "Disponible 24/7",
        serviceArea: "Área de Servicio",
        location: "Miami-Dade y áreas circundantes",
      },
      whyChoose: {
        title: "¿Por qué elegirnos?",
        items: [
          "Personal bilingüe y calificado",
          "Equipos y productos de última tecnología",
          "Servicio personalizado y confiable",
          "Precios competitivos",
          "Disponibilidad 24/7",
        ],
      },
      form: {
        title: "Solicitar Cotización",
        description: "Complete el formulario y nos pondremos en contacto con usted pronto.",
        fullName: "Nombre Completo",
        phone: "Teléfono",
        serviceType: "Tipo de Servicio",
        selectService: "Seleccione un servicio",
        message: "Mensaje",
        messagePlaceholder: "Describa sus necesidades específicas...",
        submit: "Enviar Solicitud",
        services: [
          { value: "production-staffing", label: "Personal de Producción" },
          { value: "commercial-cleaning", label: "Limpieza Comercial" },
          { value: "event-staffing", label: "Staffing para Eventos" },
          { value: "disinfection", label: "Desinfección Especializada" },
          { value: "hotel-cleaning", label: "Limpieza Hotelera" },
          { value: "residential-cleaning", label: "Limpieza Residencial" },
          { value: "industrial-cleaning", label: "Limpieza Industrial" },
          { value: "other", label: "Otro" },
        ],
      },
    },
    footer: {
      description:
        "JV Business Services LLC - Servicios profesionales de limpieza y staffing. Comprometidos con la calidad y la satisfacción del cliente.",
      slogan: "UN BUEN TRABAJO Y SERVICIOS A BUEN PRECIO",
      services: {
        title: "Servicios",
        list: [
          "Personal de Producción",
          "Limpieza Comercial",
          "Staffing para Eventos",
          "Desinfección Especializada",
          "Limpieza Hotelera",
          "Limpieza Residencial",
        ],
      },
      contact: {
        title: "Contacto",
        manager: "Gerente General",
      },
      copyright: "© 2024 JV Business Services LLC. Todos los derechos reservados.",
    },
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations: translations[language], t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
