import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/lib/language-context"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "JV Business Services LLC - Servicios Profesionales de Limpieza y Staffing",
  description:
    "Servicios profesionales de limpieza comercial, staffing para eventos y desinfección especializada. Personal bilingüe calificado disponible 24/7 en Miami.",
  keywords: "limpieza comercial, staffing eventos, desinfección, limpieza Miami, servicios profesionales",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Suspense fallback={null}>{children}</Suspense>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
