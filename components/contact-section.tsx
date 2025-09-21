"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { language, translations } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
    alert(translations.contact.successMessage)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            {translations.contact.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty px-4">
            {translations.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6">
                {translations.contact.info.title}
              </h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">{translations.contact.info.phone}</h4>
                    <p className="text-muted-foreground">(786) 443-9212</p>
                    <p className="text-sm text-muted-foreground">{translations.contact.info.available247}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground break-all">jvbusiness.services@yahoo.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">{translations.contact.info.serviceArea}</h4>
                    <p className="text-muted-foreground">{translations.contact.info.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg md:text-xl">{translations.contact.whyChoose.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 text-sm md:text-base">
                  {translations.contact.whyChoose.items.map((item, index) => (
                    <li key={index}>✓ {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-4">
              <CardTitle className="text-card-foreground text-lg md:text-xl">
                {translations.contact.form.title}
              </CardTitle>
              <CardDescription className="text-sm md:text-base">
                {translations.contact.form.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm md:text-base">
                      {translations.contact.form.fullName}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-input border-border text-sm md:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm md:text-base">
                      {translations.contact.form.phone}
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-input border-border text-sm md:text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm md:text-base">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input border-border text-sm md:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm md:text-base">
                    {translations.contact.form.serviceType}
                  </Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-sm md:text-base"
                  >
                    <option value="">{translations.contact.form.selectService}</option>
                    {translations.contact.form.services.map((service, index) => (
                      <option key={index} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm md:text-base">
                    {translations.contact.form.message}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder={translations.contact.form.messagePlaceholder}
                    className="bg-input border-border text-sm md:text-base resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-sm md:text-base py-2 md:py-3"
                >
                  {translations.contact.form.submit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
